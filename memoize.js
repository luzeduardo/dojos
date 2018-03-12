const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(--n);
};

const memoizer = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


export {
  factorial,
  memoizer,
};
