<template>
 <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import neko from './components/neko.vue';


export default {
  name: 'App',
  components: {
    neko
  }
}

</script>
