const debounce = (fn, debounceTime = 0) => {
  let timer;
  return function () {
    const callback = () => fn.apply(this, arguments);

    clearTimeout(timer);

    timer = setTimeout(callback, debounceTime);
  };
};

export default debounce;
