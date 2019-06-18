precision mediump float;

uniform float time;

varying vec3 vNormal, vPosition;

const float duration = 8.0;
const float delay = 4.0;

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
    float now = clamp((time - delay) / duration, 0.0, 1.0);
    float opacity = (1.0 - length(vPosition.xy / vec2(550.0)));

    vec3 v = normalize(vPosition);
    vec3 rgb = hsv2rgb(vec3(220.5, 0.5, 0.9));

    // gl_FragColor = vec4(rgb, opacity);
    gl_FragColor = vec4(vec3(220.5, 0.5, 0.9), opacity);
}
