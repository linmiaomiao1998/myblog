import Nav from '@/components/Nav.vue';
import { RouteConfig from 'vue-router';
<template>
      <nav>
      <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
      </router-link>
      |
      <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签</router-link>
      |
      <router-link to="/statistics" class="item" active-class="selected">
         <Icon name="statistics"/>
      统计</router-link>
      </nav>
</template>

<script lang="ts">

export default {
  name:'Nav'
}
</script>


<style lang="scss" scoped>
  nav {
    display: flex;
    box-shadow:0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;
  > .item {
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2px 0;
    color: #A06225;
    .icon{
      width: 32px;
      height: 32px;
      
    }
   }
   > .item.selected{
     text-align: center;
            padding: 2px;
            margin: 0;
            font-family: helvetica, arial, sans-serif;
            font-size: 4px;
            font-weight: bold;
            color:#F2DAA8;
            /*background-color: #F0CC82;
    
            /*text-shadow: 1px 1px white,-1px -1px #333;*/
            /*text-shadow: -1px -1px white,1px 1px #333;*/
           text-shadow: -1px 0 #A06225,1px 0#A06225,0 1px #A06225,0 -1px #A06225;
           animation:selectedSlide 0.75s;
   } 
    } 
@keyframes selectedSlide{
  0%{
    color:#A06225;
    }
    30%{ 
      color:wheat;
      /* text-shadow: -1px 0 wheat,1px 0 wheat,0 1px wheat,0 -1px wheat;*/
    }
  100%{
   color:#F2DAA8;
  }
}
</style>