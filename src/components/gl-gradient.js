import * as THREE from 'three'
import GLUtils from '../utils/gl'

export default class Gradient {
  constructor() {
    this.group = new THREE.Group()

    GLUtils.loadShader('Gradient').then(obj => {
      this.geom = new THREE.IcosahedronGeometry(100, 4)
      this.mat = this.getShader(obj.vs, obj.fs)
      this.mesh = new THREE.Mesh(this.geom, this.mat)

      this.group.add(this.mesh)
    })
  }

  getShader(vs, fs) {
    let uniforms = {
      time: { type: 'f', value: 0 },
      sat: { type: 'f', value: 0 },
      color: { type: 'c', value: new THREE.Color(0x49beaa) }
    }

    let shader = new THREE.ShaderMaterial({
      vertexShader: vs,
      fragmentShader: fs,
      uniforms
    })

    shader.side = THREE.BackSide

    return shader
  }

  update() {
    if (this.mat) {
      this.mat.uniforms.time.value = performance.now() * 0.000025
    }
  }
}
