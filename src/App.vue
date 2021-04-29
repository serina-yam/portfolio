<template>
  <div id="app">
    <myheader></myheader>
    <router-view></router-view>
  </div>
</template>

<script>
import myheader from './components/myheader.vue'

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>


<style scoped >
  #app {
    text-align: center;
  }

</style>

