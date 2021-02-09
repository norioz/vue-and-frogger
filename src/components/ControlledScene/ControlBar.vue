<template>
  <div id="scene-controls">
    <control-bar-button v-on:click="$emit('change-shape', 'sphere')">sphere</control-bar-button>
  </div>
</template>

<script>
import ControlBarButton from './ControlBarButton.vue'
export default {
  components: {
    ControlBarButton
  }
}
</script>

<style>
</style>
