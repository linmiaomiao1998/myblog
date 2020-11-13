import Nav from '@/components/Nav.vue'; import { RouteConfig from 'vue-router';
<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      <div>记账</div></router-link
    >
    |
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />
      <div>标签</div></router-link
    >
    |
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      <div>统计</div></router-link
    >
  </nav>
</template>

<script lang="ts">
  export default {
    name: "Nav",
  };
</script>

<style lang="scss" scoped>
  div {
    
    height: 16px;
    width: 28px;
  }
  nav {
    display: flex;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;

    > .item {
      width: 33.3333333333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2px 0;
      color: #a06225;
      .icon {
        width: 32px;
        height: 32px;
      }
    }
    > .item.selected {
      // text-align: center;
      margin: 0;
      font-family: helvetica, sans-serif;
      font-weight: bold;
      color: #f2daa8;
      /*background-color: #F0CC82;
    
            /*text-shadow: 1px 1px white,-1px -1px #333;*/
      /*text-shadow: -1px -1px white,1px 1px #333;*/
      text-shadow: -1px 0 #a06225, 1px 0#A06225, 0 1px #a06225, 0 -1px #a06225;
      animation: selectedSlide 0.25s;
    }
  }
  @keyframes selectedSlide {
    0% {
      color: #a06225;
    }
    /*30%{ 
      color:wheat;
      /* text-shadow: -1px 0 wheat,1px 0 wheat,0 1px wheat,0 -1px wheat; } 
*/

    100% {
      color: #f2daa8;
    }
  }
</style>
