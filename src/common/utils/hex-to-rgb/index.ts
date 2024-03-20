import { isNotEmptyString } from '@/common/utils/parse-utils/parse-utils';

export const defaultRGBColor = '0, 0, 0';

export const hexToRgb = (hex: string): string => {
  if (!isNotEmptyString(hex)) return defaultRGBColor;

  const hexParts = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m: string, r: number, g: number, b: number) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g);

  if (!hexParts || hexParts.length !== 3) return defaultRGBColor;

  return hexParts.map((x) => parseInt(x, 16)).join(', ');
};
