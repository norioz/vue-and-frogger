<template>
  <div class="frogger-row">
    <div v-for="(val, idx) in rowData" :key=idx :class="{isCar: rowData[idx] === 'X', isFrog: rowData[idx] === 'F'}" :style="{left: (idx * 10) + 'px'}" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      styleObject: {
      }
    }
  },
  methods: {
    addCarOrNot: function () {
      let rand = Math.floor(Math.random() * 100)
      if (rand >= 50) {
      }
    }
  },
  props: {
    rowData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.frogger-row {
  position: relative;
  height: 10px;
  width: 100%;
  overflow: hidden;
}
.frogger-row > div {
  position: absolute;
  width: 10px;
  height: 10px;
}
.frogger-row .isCar {
  background: red;
}
.frogger-row .isFrog {
  background: green;
}

</style>
