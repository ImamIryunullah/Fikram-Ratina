export const preloadImages = (sources, onProgress) => {
  let loaded = 0;

  return Promise.all(
    sources.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => {
            loaded++;
            onProgress(Math.round((loaded / sources.length) * 100));
            resolve();
          };
        })
    )
  );
};
