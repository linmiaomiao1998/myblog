<template>
  <Topnav/>
    <div class="banner">
      <h1>neko UI</h1>
      <h2>一个随意的UI框架</h2>
      <p class="action">
      <a href=" ">Github</a>
      <router-link to="/doc">开始</router-link>
      </p>
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue"

  export default {
    components:{Topnav}
  };
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions{
    padding: 8px 0;
  }
   a{
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
</style>
