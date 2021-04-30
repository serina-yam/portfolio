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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
  #app {
    text-align: center;
    font-family: "Noto Sans JP";
    font-size: 62.5%;
  }

</style>

