<template>
  <HelloWorld :topics="topic" />
  
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Formexamp from './components/Formexamp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  //  Formexamp
  },
  data() {
    return {
    topic: "demo of vue"    
    }
  },
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 0;
}
</style>
