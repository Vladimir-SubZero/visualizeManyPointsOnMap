import { ordersSource } from '@/3_widgets/map_6/ol/source/orders.ts'
import { WebGlOrdersLayer } from '@/3_widgets/map_6/ol/layers/webglLayer.ts'
import { WebGLTextureIcons } from '@/3_widgets/map_6/utils/webGLTextureIcons.ts'


export const ordersLayerModule = (function () {
  const textureInstance = new WebGLTextureIcons()
  const ordersLayer = new WebGlOrdersLayer(
    {
      source: ordersSource,
      style: {
        "shape-points": 4,
        "shape-radius": 15,
        // "shape-fill-color": "#08B621FF",
        "shape-fill-color": [
          "color",
          ["get", "tex_color_r"],
          ["get", "tex_color_g"],
          ["get", "tex_color_b"]
        ],
        "shape-stroke-color": '#fff',
        "shape-stroke-width": 1,
        "shape-rotation": 3.93,
        "shape-rotate-with-view": false,
      },
      zIndex: 10,
    },
    textureInstance.texture
  );
  ordersLayer.setProperties({ title: 'ordersLayer' }, true);
  return {
    getOrdersLayer() {
      return ordersLayer;
    },
  };
})();




