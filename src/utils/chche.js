const setCache = (key, item) => {
  sessionStorage.setItem(key, item);
};

const getCache = (item) => {
  return JSON.parse(sessionStorage.getItem(item));
};

export { setCache, getCache };
