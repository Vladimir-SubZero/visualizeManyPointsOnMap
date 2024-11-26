// import {Feature} from 'ol';
import WebGLPointsLayer, {Options} from 'ol/layer/WebGLPoints';
// import WebGLPointsLayerRenderer from 'ol/renderer/webgl/PointsLayer';
// import Geometry from 'ol/geom/Geometry'
import VectorSource from 'ol/source/Vector'

// import vertexShader from '../shaders/marker.vert?raw'
// import fragmentShader from '../shaders/marker.frag?raw'



export class WebGlOrdersLayer extends WebGLPointsLayer<VectorSource> {
    constructor(options: Options<VectorSource>, private texture: HTMLCanvasElement) {
        super(options);
    }

    // createRenderer(): WebGLPointsLayerRenderer {
    //     // (renderer['helper'] as WebGLHelper).getGL().BUFFER_SIZE = 128000;
    //     return new WebGLPointsLayerRenderer(this, {
    //         attributes: [
    //             {
    //                 name: 'size',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'size', Number(feature.get('size')))
    //                     return Number(feature.get('size'));
    //                 }
    //             },
    //             {
    //                 name: 'tex_type',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'tex_type', Number(feature.get('tex_type')))
    //                     return Number(feature.get('tex_type'));
    //                 }
    //             },
    //             {
    //                 name: 'tex_sel',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'tex_sel', Number(feature.get('tex_sel')))
    //                     if (
    //                         feature.get('features') &&
    //                         feature.get('features').find((f: Feature<Geometry>) => f.get('tex_sel') == '1')
    //                     ) {
    //                         return 1;
    //                     }
    //                     return Number(feature.get('tex_sel'));
    //                 }
    //             },
    //             {
    //                 name: 'tex_color_r',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'tex_color_r', Number(feature.get('tex_color_r')))
    //                     return Number(feature.get('tex_color_r'));
    //                 }
    //             },
    //             {
    //                 name: 'tex_color_g',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'tex_color_g', Number(feature.get('tex_color_g')))
    //                     return Number(feature.get('tex_color_g'));
    //                 }
    //             },
    //             {
    //                 name: 'tex_color_b',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'tex_color_b', Number(feature.get('tex_color_b')))
    //                     return Number(feature.get('tex_color_b'));
    //                 }
    //             },
    //             {
    //                 name: 'sequence',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'sequence', Number(feature.get('sequence')))
    //                     return Number(feature.get('sequence'));
    //                 }
    //             },
    //             {
    //                 name: 'row_cnt',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'row_cnt', Number(feature.get('row_cnt')))
    //                     return Number(feature.get('row_cnt'));
    //                 }
    //             },
    //             {
    //                 name: 'col_cnt',
    //                 callback: (feature: Feature<Geometry>): number => {
    //                     console.log( 'col_cnt', Number(feature.get('col_cnt')))
    //                     return Number(feature.get('col_cnt'));
    //                 }
    //             }
    //         ],
    //         uniforms: {
    //             u_texture: this.texture
    //         },
    //         hitDetectionEnabled: false,
    //         vertexShader,
    //         fragmentShader
    //     });
    // }
}
