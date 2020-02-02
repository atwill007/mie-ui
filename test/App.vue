<template>
  <div id="app">
    <MiButton type="info"
              icon="el-icon-check"
              @click="onClick">btn</MiButton>
  </div>
</template>

<script>
import MiButton from '../packages/components/MiButton'

export default {
  name: 'app',
  components: {
    MiButton
  },
  methods: {
    onClick (...args) {
      // console.log('>>>args: ', args)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
