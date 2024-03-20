export const debounceWrapper = <Func extends (...args: unknown[]) => ReturnType<Func> | PromiseLike<ReturnType<Func>>>(
  wrapped: Func,
  delay = 1500,
): ((...args: Parameters<Func>) => Promise<ReturnType<Func>>) => {
  let lastCalledTime = Infinity;
  let lastTimeOutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<Func>) => {
    clearTimeout(lastTimeOutId);
    lastCalledTime = Date.now();

    return new Promise((resolve, reject) => {
      lastTimeOutId = setTimeout(() => {
        if (Date.now() - lastCalledTime >= delay) {
          resolve(wrapped(...args));
        } else {
          reject();
        }
      }, delay);
    });
  };
};
