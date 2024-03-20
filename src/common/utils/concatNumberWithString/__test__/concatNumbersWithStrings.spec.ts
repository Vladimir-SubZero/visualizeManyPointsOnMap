import { concatNumberAndString } from '@/common/utils/concatNumberWithString/concatNumbersWithString';

describe('concatNumberAndString()', () => {
  it('корректно добавляет значение к переданному числовому аргументу', () => {
    expect(concatNumberAndString(5)).toBe('5px');
    expect(concatNumberAndString(0)).toBe('0px');
    expect(concatNumberAndString(5, 'fr')).toBe('5fr');
  });

  it('корректно обрабатывает нечисловой аргумент', () => {
    expect(concatNumberAndString(null as unknown as number)).toBe('0px');
    expect(concatNumberAndString([1] as unknown as number)).toBe('0px');
    expect(concatNumberAndString('1' as unknown as number)).toBe('0px');
  });
});
