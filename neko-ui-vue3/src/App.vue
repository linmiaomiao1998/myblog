<template>
  <div>导航栏|
  <router-link  to='/'>neko</router-link>|
  <router-link  to='/xxxx'>neko2</router-link>
  </div>
  <hr/>
 <router-view></router-view>
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
