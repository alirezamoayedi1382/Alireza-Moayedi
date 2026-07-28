// Cache processed transparent PNG data URLs to avoid redundant canvas processing
const transparentCache = new Map<string, string>();

/**
 * Removes the light/white background from an image URL using flood-fill from edges,
 * cleans edge fringes, enhances image color contrast and brightness for dark design,
 * and returns a promise resolving to a transparent PNG data URL.
 */
export function removeImageBackground(imageSrc: string, colorThreshold = 210): Promise<string> {
  if (transparentCache.has(imageSrc)) {
    return Promise.resolve(transparentCache.get(imageSrc)!);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(imageSrc);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        // BFS Flood fill from edges to remove outer background
        const visited = new Uint8Array(width * height);
        const queue: number[] = [];

        // Helper to check if a pixel is background-like (light / near-white / pale gray)
        const isLightPixel = (idx: number): boolean => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const avg = (r + g + b) / 3;
          const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
          // Pale/light gray or white background check
          return avg >= colorThreshold && maxDiff < 30;
        };

        // Add top and bottom border pixels to queue
        for (let x = 0; x < width; x++) {
          const topIdx = (0 * width + x) * 4;
          const botIdx = ((height - 1) * width + x) * 4;
          if (isLightPixel(topIdx) && !visited[x]) {
            visited[x] = 1;
            queue.push(x);
          }
          const botPos = (height - 1) * width + x;
          if (isLightPixel(botIdx) && !visited[botPos]) {
            visited[botPos] = 1;
            queue.push(botPos);
          }
        }

        // Add left and right border pixels to queue
        for (let y = 0; y < height; y++) {
          const leftIdx = (y * width + 0) * 4;
          const rightIdx = (y * width + (width - 1)) * 4;
          const leftPos = y * width + 0;
          const rightPos = y * width + (width - 1);

          if (isLightPixel(leftIdx) && !visited[leftPos]) {
            visited[leftPos] = 1;
            queue.push(leftPos);
          }
          if (isLightPixel(rightIdx) && !visited[rightPos]) {
            visited[rightPos] = 1;
            queue.push(rightPos);
          }
        }

        // BFS traversal to turn background pixels completely transparent
        let head = 0;
        while (head < queue.length) {
          const pos = queue[head++];
          const pxIdx = pos * 4;

          data[pxIdx + 3] = 0; // Alpha = 0

          const cx = pos % width;
          const cy = Math.floor(pos / width);

          const neighbors = [
            cy > 0 ? pos - width : -1,
            cy < height - 1 ? pos + width : -1,
            cx > 0 ? pos - 1 : -1,
            cx < width - 1 ? pos + 1 : -1,
          ];

          for (const nPos of neighbors) {
            if (nPos >= 0 && !visited[nPos]) {
              visited[nPos] = 1;
              const nIdx = nPos * 4;
              if (isLightPixel(nIdx)) {
                queue.push(nPos);
              } else {
                // Feather edge pixels
                const r = data[nIdx];
                const g = data[nIdx + 1];
                const b = data[nIdx + 2];
                const avg = (r + g + b) / 3;
                if (avg > 180) {
                  const alphaFactor = (255 - avg) / (255 - 180);
                  data[nIdx + 3] = Math.floor(255 * Math.max(0, Math.min(1, alphaFactor * 0.9)));
                }
              }
            }
          }
        }

        // Color & contrast boost pass for non-transparent pixels to make colors punchy in dark mode
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] > 10) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];

            // Slightly increase contrast & brightness so details pop against dark backgrounds
            r = Math.min(255, Math.max(0, (r - 128) * 1.08 + 132));
            g = Math.min(255, Math.max(0, (g - 128) * 1.08 + 132));
            b = Math.min(255, Math.max(0, (b - 128) * 1.08 + 132));

            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        transparentCache.set(imageSrc, dataUrl);
        resolve(dataUrl);
      } catch (e) {
        console.warn('Error removing background, using original image:', e);
        resolve(imageSrc);
      }
    };

    img.onerror = () => resolve(imageSrc);
  });
}

