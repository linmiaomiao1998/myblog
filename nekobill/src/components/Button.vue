<template>
  <button class="button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator";
  import Vue from "vue";

  @Component
  export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
  .button {
    background: darken(#ffe787, 10%);
    color: whitesmoke;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;

    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>
