import { debounceWrapper } from '@/common/utils/debounce/debounce';

const waitTime = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
describe('Тестирование debounce', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('вызов единожды (последний) оборачиваемой функции при наборе подряд идущих вызовов', async () => {
    const spy = jest.fn((a: string) => a);
    const delay = 500;
    const wrappedFn = debounceWrapper(spy, delay);

    wrappedFn('a');
    wrappedFn('b');
    wrappedFn('c');
    wrappedFn('d');
    const result = await wrappedFn('e');

    expect(spy).toBeCalledTimes(1);
    expect(result).toBe('e');
    expect(spy).toBeCalledWith('e');
  });
  test('вызов единожды (последний) оборачиваемой функции при наборе отложенных вызовов', async () => {
    const spy = jest.fn((a: string) => a);
    const delay = 500;
    const wrappedFn = debounceWrapper(spy, delay);

    wrappedFn('a');
    await waitTime(delay - 100);
    wrappedFn('b');
    await waitTime(delay - 100);
    const result = await wrappedFn('c');

    expect(spy).toBeCalledTimes(1);
    expect(result).toBe('c');
    expect(spy).toBeCalledWith('c');
  });
  test.each([100, 300, 500])('корреткность времени отложенного выполнения при его задании', async (delay) => {
    const spy = jest.fn(() => 0);
    const wrappedFn = debounceWrapper(spy, delay);

    const start = performance.now();
    await wrappedFn();
    const end = performance.now();

    expect(end - start).toBeGreaterThanOrEqual(delay - 1);
    expect(end - start).toBeLessThan(delay + 100);
  });
  test('корреткность типизации при создании функции обертки через debounce', async () => {
    const wrappedA = debounceWrapper((a: number) => a, 0);

    // @ts-expect-error: Функция обертка не допускает пустого списка аргументов
    await wrappedA();

    // @ts-expect-error: Функция обертка не допускает аргумент типа string
    await wrappedA('a');

    await wrappedA(1);

    const wrappedB = debounceWrapper(() => 0, 0);

    // @ts-expect-error: Функция обертка не допускает аргументов
    await wrappedB('a');

    await wrappedB();
  });
});
