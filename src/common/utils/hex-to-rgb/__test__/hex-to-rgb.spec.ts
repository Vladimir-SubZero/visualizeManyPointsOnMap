import { defaultRGBColor, hexToRgb } from '@/common/utils/hex-to-rgb';

describe('Тесты для hex-to-rgb-utils', () => {
  it('правильно преобразует hex-цвета', () => {
    expect(hexToRgb('#0034AF')).toBe('0, 52, 175');
    expect(hexToRgb('#0033ff')).toBe('0, 51, 255');
    expect(hexToRgb('#0033FF')).toBe('0, 51, 255');
    expect(hexToRgb('#03f')).toBe('0, 51, 255');
  });

  it('правильно обрабатывает некорректные hex-цвета, возвращает дефолтный цвет', () => {
    expect(hexToRgb(null as unknown as string)).toBe(defaultRGBColor);
    expect(hexToRgb(123 as unknown as string)).toBe(defaultRGBColor);
    expect(hexToRgb('#0033FF33AA')).toBe(defaultRGBColor);
    expect(hexToRgb('#00FF')).toBe(defaultRGBColor);
    expect(hexToRgb('#')).toBe(defaultRGBColor);
    expect(hexToRgb('0033FF')).toBe(defaultRGBColor);
  });
});
