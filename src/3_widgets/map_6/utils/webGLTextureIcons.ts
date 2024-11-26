
export class WebGLTextureIcons {
    public width = 20;
    public height = 20;
    public texture  = document.createElement('canvas');

    public static rows = 2;
    public static cols = 6;

    constructor() {
        this.generateTextures();
    }

    public static hexToRgb(hex: string): number[] {
        const res: string[] = hex.match(/[a-f0-9]{2}/gi) ?? [];
        return res && res.length === 3
            ? res.map((v: string) => {
                return parseInt(v, 16);
            })
            : [];
    }

    // генерация текстуры точки на карте для обычной (не кластерной точки)
    public generateTextures(): void {
        const ctx = this.texture.getContext('2d');
        const padding = 12; // паддинг необходим для создания тени фигуры
        const lineWidth = 4;
        const startPosition = { x: padding / 2 + lineWidth / 2, y: padding / 2 + lineWidth / 2 - 1 };
        this.texture.height = (this.height + padding) * WebGLTextureIcons.rows;
        this.texture.width = (this.width + padding) * WebGLTextureIcons.cols;


        const width = 26; // ширина
        const height = 26; // и длина иконки

        const widthIco = width + startPosition.x - lineWidth; // ширина
        const heightIco = height + startPosition.y - lineWidth; // и длина прямоугольника (квадрата)
        const radiusCorner = 3;

        if (!ctx) return
        ctx.globalAlpha = 1.0;
        ctx.shadowColor = 'rgba(0,0,0, 0.25)';
        ctx.shadowBlur = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowOffsetX = 0;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.save()
            // блок 0 текстуры для маркера доставки
        ctx.fillStyle = 'rgb(140,4,4)';
        ctx.fillRect(0, 0, this.texture.width, this.texture.height)

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
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fill();
        ctx.closePath();
        ctx.translate(this.width + padding, 0)

            // блок 1 текстуры для выделенного маркера доставки
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
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fill();
        ctx.closePath();
        ctx.translate(this.width + padding, 0)

            // блок 4 текстуры для кластерного маркера
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
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fill();
        ctx.closePath();
        ctx.translate(this.width + padding, 0)

        ctx.restore();

    }
}
