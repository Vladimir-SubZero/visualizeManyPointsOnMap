export const getCanvasOrderIcon = (colorIcon: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D;

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