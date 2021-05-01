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
@import "./css/Reset.css";
  #app {
    font-family: "Noto Sans JP";
    font-size: 62.5%;
  }

</style>

