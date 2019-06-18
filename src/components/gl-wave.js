import * as THREE from 'three'
import { radians } from '../utils/math'
import vs from '../shaders/wave.vs'
import fs from '../shaders/wave.fs'

export default class GLWave extends THREE.Object3D {
  constructor(context) {
    super(context)

    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      }
    }

    this.obj = this.createObj(vs, fs)
    this.obj.position.set(0, 0, 0)
    this.obj.rotation.set(radians(75), 0, 0)
    // this.obj.rotation.set(radians(0), 0, 0)

    this.add(this.obj)
  }

  createObj(vertexShader, fragmentShader) {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(1024, 1024, 32, 32),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        transparent: true,
        wireframe: true,
        vertexShader,
        fragmentShader
      })
    )
  }

  update(dt) {
    this.uniforms.time.value += dt * 1.1
  }
}
