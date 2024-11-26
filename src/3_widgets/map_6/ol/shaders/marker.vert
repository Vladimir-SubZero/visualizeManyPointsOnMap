precision mediump float;
uniform mat4 u_projectionMatrix;
uniform mat4 u_offsetScaleMatrix;
uniform mat4 u_offsetRotateMatrix;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
uniform sampler2D u_texture;
attribute vec2 a_position;
attribute float a_index;
attribute float a_size;
attribute float a_sequence;
attribute float a_tex_type;
attribute float a_tex_sel;
attribute float a_row_cnt;
attribute float a_col_cnt;
attribute float a_tex_color_r;
attribute float a_tex_color_g;
attribute float a_tex_color_b;
// attribute float a_time_h;
// attribute float a_time_m;
varying vec2 v_texCoord;
varying vec2 v_quadCoord;
varying vec2 v_texCoord2;
varying vec4 v_texColor;
varying float v_tex_sel;
varying float v_sequence;
// varying vec2 v_texTimeCoord;

vec4 getOffsets() {
    mat4 offsetMatrix = u_offsetScaleMatrix;
    vec2 halfSize = a_sequence == 0.0? vec2(a_size): vec2(a_size);
    if (a_tex_type == 2.0) {
        halfSize = vec2(a_size);
    }
    vec2 offset = vec2(0.0, 0.0);
    float angle = 0.0;
    float offsetX;
    float offsetY;
    if (a_index == 0.0) {
        offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);
        offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);
    } else if (a_index == 1.0) {
        offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);
        offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);
    } else if (a_index == 2.0) {
        offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);
        offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);
    } else {
        offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);
        offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);
    }
    return offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);
}

vec2 getTextureCoord(float row, float col, float rowCnt, float colCnt) {
    float dx = 1.0 / colCnt;
    float dy = 1.0 / rowCnt;
    vec4 texCoord = vec4(col * dx, row * dy, (col + 1.0) * dx, (row + 1.0) * dy);
    float u = a_index == 0.0 || a_index == 3.0 ? texCoord.x : texCoord.z;
    float v = a_index == 2.0 || a_index == 3.0 ? texCoord.y : texCoord.w;
    return vec2(u, v);
}

// vec4 getColor(float color) {
//     return vec4((float((int(color) & 16711680) >> 16)) / 255.0, (float((int(color) & 65280) >> 8)) / 255.0, float((int(color) & 255)) / 255.0, 1.0);
// }
// [(a & 16711680) >> 16,
// (a & 65280) >> 8,
// (a & 255)]

void main(void) {
    gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + getOffsets();
    v_texColor = vec4(a_tex_color_r / 255.0, a_tex_color_g / 255.0, a_tex_color_b / 255.0, 1.0);

    float col = 0.0;
    if ( a_tex_type == 0.0 ) {
        // сбор
        col = a_tex_sel == 1.0 ? 3.0 : 2.0;
    } else if ( a_tex_type == 1.0 ) {
        // доставка
        col = a_tex_sel == 1.0 ? 1.0 : 0.0;
    } else {
        // кластер
        col = a_tex_sel == 1.0 ? 5.0 : 4.0;
    }
//    if (a_tex_sel == 1.0) {
//        col += 1.0;
//    }
    v_texCoord = getTextureCoord(0.0, col, a_row_cnt, a_col_cnt);
    v_texCoord2 = getTextureCoord(1.0, a_sequence, a_row_cnt, a_col_cnt);
    v_tex_sel = a_tex_sel;
    v_sequence = a_sequence;

    // v_texTimeCoord = getTextureCoord(1.0, a_time_h);
    // v_time_m = getTextureCoord(1.0, a_time_m);
    v_quadCoord = vec2(a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0, a_index == 2.0 || a_index == 3.0 ? 0.0 : 1.0);
}
