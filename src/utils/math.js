export function degrees(radian) {
  return radian / Math.PI * 180
}

export function radians(degree) {
  return degree * Math.PI / 180
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export function mix(x1, x2, a) {
  return x1 * (1 - a) + x2 * a
}

export function polar(radian1, radian2, radius) {
  return [
    Math.cos(radian1) * Math.cos(radian2) * radius,
    Math.sin(radian1) * radius,
    Math.cos(radian1) * Math.sin(radian2) * radius
  ]
}

export function randomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
