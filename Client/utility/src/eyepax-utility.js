// Anything exported from this file is importable by other in-browser modules.
const apiCache = new Map();

export function getData(url) {
  const data = apiCache.get(url);
  if (data) {
    console.log("cached api");
    return Promise.resolve(data);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = {
        data: 10,
      };
      apiCache.set(url, result);
      console.log("actual api");
      resolve(result);
    }, 2000);
  });
}
