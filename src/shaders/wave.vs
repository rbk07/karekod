#pragma glslify: snoise3 = require(glsl-noise/simplex/3d) 
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d)

precision mediump float;

attribute vec2 uv;
attribute vec3 normal, position;

uniform float time;
uniform mat4 modelViewMatrix, projectionMatrix;

varying vec2 vUv;
varying vec3 vNormal, vPosition;

vec2 TERRAIN_OFFSET_POSITION = vec2(10.0);
float LARGE_TERRAIN_HEIGHT = 0.3;
float LARGE_TERRAIN_SCALE = 2.0;
float SMALL_TERRAIN_HEIGHT = 0.05;
float SMALL_TERRAIN_SCALE = 7.0;
float SMALLEST_TERRAIN_HEIGHT = 0.02;
float SMALLEST_TERRAIN_SCALE = 13.0;
float TERRAIN_SPEED = 0.02;
float EPSILON = 0.01;

vec3 terrain(vec2 coordinate) {
    coordinate.y = pow(coordinate.y * 2.0, 2.0) - 3.0;
    coordinate.x = (coordinate.x - 0.5) * mix(0.5, 1.5, 1.0 - coordinate.y);
    float divet = 0.3 * clamp(-1.0, 0.0, -1.0 + length(4.0 * (coordinate + vec2(0.0, 0.1))));

    return vec3(0.0, divet, 0.0) + vec3(
        coordinate.x,
        LARGE_TERRAIN_HEIGHT
        * coordinate.x
        * snoise3(vec3(coordinate * LARGE_TERRAIN_SCALE + TERRAIN_OFFSET_POSITION, time * TERRAIN_SPEED)) +
        SMALL_TERRAIN_HEIGHT
        * coordinate.x
        * snoise3(vec3(coordinate * SMALL_TERRAIN_SCALE + TERRAIN_OFFSET_POSITION, time * TERRAIN_SPEED)) +
        SMALLEST_TERRAIN_HEIGHT
        * coordinate.x
        * snoise3(vec3(coordinate * SMALLEST_TERRAIN_SCALE + TERRAIN_OFFSET_POSITION, time * TERRAIN_SPEED)),
        coordinate.y
    );
}

vec3 calculateNormal(vec3 cartesian, vec2 coordinate) {
    vec3 tangent = normalize(terrain(vec2(coordinate.x, coordinate.y + EPSILON)) - cartesian);
    vec3 binormal = normalize(terrain(vec2(coordinate.x + EPSILON, coordinate.y)) - cartesian);

    return cross(tangent, binormal);
}


void main() {
    float sin1 = sin((position.x + position.y) * 0.2 + time * 0.5);
    float sin2 = sin((position.x - position.y) * 0.4 + time * 2.0);
    float sin3 = sin((position.x + position.y) * -0.6 + time);

    vUv = uv;
    
    vec2 coordinate = position.xz;
    vec3 cartesian = terrain(coordinate);

    vNormal = calculateNormal(cartesian, coordinate);
    vPosition = cartesian;
    
    // Add turbulence to the position vector
    vec3 updatePosition = vec3(position.x, position.y, position.z + sin1 * 50.0 + sin2 * 10.0 + sin3 * 8.0);

    vPosition = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(updatePosition, 1.0);

    // gl_Position = projectionMatrix * modelViewMatrix * vec4(cartesian, 1.0);
}
