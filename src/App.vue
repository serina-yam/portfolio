<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <button class="btn btn-primary">test</button>
  </div>
</template>

<script>
import myheader from './router/views/myheader.vue'

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>

</style>
