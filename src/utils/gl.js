import * as THREE from 'three'
var glsl = require('glslify')

export default class GLUtils {
  static loadShader(name) {
    return new Promise((resolve, reject) => {
      Promise.all([
        fetch(`../shaders/${name}.vs`),
        fetch(`../shaders/${name}.fs`)
      ]).then(data => {
        let vs, fs

        data.forEach(response => {
          if (response.url.indexOf('vs') > -1) vs = response.text()
          else fs = response.text()
        })

        Promise.all([vs, fs]).then(data => {
          vs = data[0]
          fs = data[1]

          // vs = glsl.file('../shaders/${name}.vs')
          // fs = glsl.file('../shaders/${name}.fs')

          resolve({ vs, fs })
        })
      })
    })
  }

  static loadGeometry(name) {
    return new Promise((resolve, reject) => {
      fetch(`geometry/${name}.json`).then(response => {
        response.text().then(text => {
          let loader = new THREE.BufferGeometryLoader()
          let geom = loader.parse(JSON.parse(text))
          resolve(geom)
        })
      })
    })
  }

  static range(oldValue, oldMin, oldMax, newMin, newMax, clamped) {
    let oldRange = oldMax - oldMin
    let newRange = newMax - newMin
    let newValue = (oldValue - oldMin) * newRange / oldRange + newMin
    if (clamped)
      return _this.clamp(
        newValue,
        Math.min(newMin, newMax),
        Math.max(newMin, newMax)
      )
    return newValue
  }
}
