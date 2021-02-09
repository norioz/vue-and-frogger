<template>
  <div id="frogger-scene">
    <frogger-row v-for="(row, idx) in this.gameState" :key="idx" :row-data="row"></frogger-row>
  </div>
</template>

<script>
import FroggerRow from './FroggerRow'
export default {
  data () {
    return {
      gameState: [],
      frogMove: '',
      frogRow: 4,
      frogCol: 6
    }
  },
  components: {
    FroggerRow
  },
  methods: {
    init: function () {
      // starting row
      this.gameState.push([])
      // car rows
      for (var i = 0; i < 3; i++) {
        let row = []
        for (var j = 0; j < 11; j++) {
          row.push(' ')
        }
        this.gameState.push(row)
      }
      // goal row
      this.gameState.push([])
      // set the frog
      this.gameState[this.frogRow][this.frogCol] = 'F'
    },
    handleKeyup: function (event) {
      console.log('handleKeyup ' + event.which)
      switch (event.which) {
        case 38: // up
          this.frogMove = 'U'
          break
        case 40: // down
          this.frogMove = 'D'
          break
        case 37: // left
          this.frogMove = 'L'
          break
        case 39: // right
          this.frogMove = 'R'
          break
      }
      console.log(this.frogMove)
    },
    update: function () {
      // move the cars
      for (var i = 1; i < 4; i++) {
        let row = this.gameState[i]
        row.pop()
        let rand = Math.floor(Math.random() * 100)
        if (rand >= 70) {
          row.unshift('X')
        } else {
          row.unshift(' ')
        }
      }
      // move the frog
      this.gameState[this.frogRow][this.frogCol] = ' '
      if (this.frogMove !== '') {
        switch (this.frogMove) {
          case 'U':
            console.log('U')
            if (this.frogRow > 0) {
              this.frogRow += 1
            }
            break
          case 'D':
            if (this.frogRow > 0) {
              this.frogRow -= 1
            }
            break
          case 'L':
            if (this.frogCol < 4) {
              this.frogCol -= 1
            }
            break
          case 'R':
            if (this.frogCol < 12) {
              this.frogCol += 1
            }
            break
        }
      }
      this.gameState[this.frogRow][this.frogCol] = 'F'
      this.frogMove = ''
    },
    run: function () {
      setInterval(this.update, 1500)
    }
  },
  mounted () {
    this.init()
    this.run()
    window.addEventListener('keyup', this.handleKeyup)
  }
}
</script>

<style>
#frogger-scene {
  border: 1px solid;
}
</style>
