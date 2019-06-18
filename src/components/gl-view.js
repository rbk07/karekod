import React, { Component } from 'react'
import * as THREE from 'three'
import GLGradient from './gl-gradient'
import GLWave from './gl-wave'

export default class GLView extends Component {
  constructor(props) {
    super(props)

    this.wave = new GLWave()
    this.clock = new THREE.Clock()
  }

  componentDidMount = () => {
    this.setupCamera()
    this.setupRenderer()
    this.setupScene()
    this.setupLights()
    this.animate()
  }

  setupCamera = () => {
    let { innerWidth: width, innerHeight: height } = window

    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      10,
      10000
    )
  }

  setupRenderer = () => {
    let { innerWidth: width, innerHeight: height } = window

    this.renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      canvas: document.querySelector('canvas'),
      clearAlpha: 0.25,
      preserveDrawingBuffer: false,
      failIfMajorPerformanceCaveat: true
    })

    this.renderer.setClearColor(0xebebeb)
    this.renderer.setPixelRatio(Math.min(1.25, window.devicePixelRatio))
    this.renderer.setSize(width, height)

    window.addEventListener('resize', () => this._resize())
    window.addEventListener('orientationchange', () => this._resize())
  }

  setupScene = () => {
    this.scene = new THREE.Scene()
    this.scene.add(this.wave)
  }

  setupLights = () => {
    let aLight = new THREE.AmbientLight(0xebebeb)
    let dLight = new THREE.DirectionalLight(0x6695f7, 1, 100)
    dLight.position.set(0, 0, 100)

    this.scene.add(aLight)
    this.scene.add(dLight)
  }

  animate = () => {
    let dt = this.clock.getDelta()

    this.wave.update(dt)

    requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div id="gl-wrapper">
        <canvas id="gl-view" className="slow-fade" />
      </div>
    )
  }

  _resize() {
    let { innerWidth: width, innerHeight: height } = window

    this.renderer.setPixelRatio(Math.min(1.25, window.devicePixelRatio))
    this.renderer.setSize(width, height)

    this.camera.updateProjectionMatrix()
  }
}
