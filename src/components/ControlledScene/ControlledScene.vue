<template>
  <div>
    <GLScene ref="glscene"/>
    <control-bar v-on:change-shape="changeShape"/>
  </div>
</template>

<script>
import ControlBar from './ControlBar.vue'
import GLScene from './GLScene.vue'
export default {
  components: {
    GLScene,
    ControlBar
  },
  methods: {
    changeShape (newShape) {
      this.$refs.glscene.setShape(newShape)
    }
  }
}
</script>

<style>
</style>
