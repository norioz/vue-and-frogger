<template>
  <div id="scene-container"></div>
</template>

<script>
import * as Three from 'three'
export default {
  name: 'glscene',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function () {
      let container = document.getElementById('scene-container')
      let aspectRatio = container.clientWidth / container.clientHeight
      this.camera = new Three.PerspectiveCamera(70, aspectRatio, 0.01, 10)
      this.camera.position.z = 1
      this.scene = new Three.Scene()
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()
      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)
      this.renderer = new Three.WebGLRenderer({antialias: true})
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    },
    setShape: function (newShape) {
      if (this.scene !== null) {
        this.scene.remove(this.mesh)
        this.mesh = null
      }
      if (newShape === 'sphere') {
        let geometry = new Three.SphereGeometry(0.2)
        let material = new Three.MeshNormalMaterial()
        this.mesh = new Three.Mesh(geometry, material)
        this.scene.add(this.mesh)
      }
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>

<style scoped>
  #scene-container {
    width: 500px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
