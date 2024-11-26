precision mediump float;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
uniform sampler2D u_texture;
varying vec2 v_texCoord;
varying vec2 v_texCoord2;
varying vec2 v_quadCoord;
varying vec4 v_texColor;
varying float v_tex_sel;
varying float v_sequence;
// varying vec2 v_time_h;
// varying vec2 v_texTimeCoord;


void main(void) {
    vec4 texColor = texture2D(u_texture, v_texCoord);
    // if texture is transparent in this texel, discard
//    if (texColor.a < 0.5) {discard;}
    gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);

//    if (v_sequence != 0.0) {
//        vec4 texTitleColor = texture2D(u_texture, v_texCoord2);
//        if (texTitleColor.a > 0.0) {
//            if (v_tex_sel == 0.0) {
//                gl_FragColor.rgb = gl_FragColor.rgb  + texTitleColor.rgb * (texTitleColor.a - 0.2);
//            } else {
//                gl_FragColor.rgb = gl_FragColor.rgb - texTitleColor.rgb * (texTitleColor.a - 0.2);
//            }
//        }
//    }
}
