import { degreesToRadians } from '@/6_shared/utils/degreesToRadians/degreesToRadians.ts'

export const getCanvasOrderIcon = (colorIcon: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext(
    '2d', { willReadFrequently: true }) as CanvasRenderingContext2D;

  const padding = 12; // паддинг необходим для создания тени фигуры
  const lineWidth = 4;
  const startPosition = { x: padding / 2 + lineWidth / 2, y: padding / 2 + lineWidth / 2 - 1 };

  const width = 26; // ширина
  const height = 26; // и длина иконки

  const widthIco = width + startPosition.x - lineWidth; // ширина
  const heightIco = height + startPosition.y - lineWidth; // и длина прямоугольника (квадрата)
  const radiusCorner = 3;

  canvas.width = width + padding;
  canvas.height = height + padding;

  ctx.shadowColor = 'rgba(0,0,0, 0.25)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowOffsetX = 0;
  ctx.beginPath();
  ctx.moveTo(startPosition.x + radiusCorner, startPosition.y);
  ctx.lineTo(widthIco - radiusCorner, startPosition.y);
  ctx.arcTo(widthIco, startPosition.y, widthIco, startPosition.y + radiusCorner, radiusCorner);
  ctx.lineTo(widthIco, heightIco - radiusCorner);
  ctx.arcTo(widthIco, heightIco, widthIco - radiusCorner, heightIco, radiusCorner);
  ctx.lineTo(startPosition.x + radiusCorner, heightIco);
  ctx.arcTo(startPosition.x, heightIco, startPosition.x, heightIco - radiusCorner, radiusCorner);
  ctx.lineTo(startPosition.x, startPosition.y + radiusCorner);
  ctx.arcTo(startPosition.x, startPosition.y, startPosition.x + radiusCorner, startPosition.y, radiusCorner);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = '#FFF';
  ctx.stroke();
  ctx.fillStyle = colorIcon;
  ctx.fill();
  ctx.closePath();
  return canvas;
};

export const getCanvasOrdersClusterIcon = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext(
    '2d', { willReadFrequently: true }) as CanvasRenderingContext2D;

  const padding = 12;
  const widthIco = 56;
  const heightIco = 56;

  const borderWidth = 3;
  const outerCircleRadius = widthIco / 2;
  const innerCircleRadius = widthIco / 2 - borderWidth;

  const startPosition = { x: widthIco / 2 + padding / 2, y: heightIco / 2 + padding / 2 };

  canvas.width = widthIco + padding;
  canvas.height = heightIco + padding;

  ctx.shadowColor = 'rgba(0,0,0, 0.25)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowOffsetX = 0;

  ctx.beginPath();
  ctx.arc(startPosition.x, startPosition.y, outerCircleRadius, degreesToRadians(0), degreesToRadians(360), false);
  ctx.fillStyle = '#FFF';
  ctx.fill();
  ctx.closePath();

  ctx.shadowColor = 'null';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowOffsetX = 0;
  ctx.beginPath();
  ctx.arc(startPosition.x, startPosition.y, innerCircleRadius, degreesToRadians(0), degreesToRadians(360), false);
  ctx.fillStyle = '#0061ff';
  ctx.fill();
  ctx.closePath();
  return canvas;
};