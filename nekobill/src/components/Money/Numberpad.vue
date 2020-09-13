<template>
  <div>
    <div class="numberPad">
      <div class="output">{{ output }}</div>
      <div class="buttons clearfix">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button>+</button>
        <button @click="remove">删除</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button>-</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button>×</button>
        <button @click="ok" class="ok">ok</button>
        <button @click="inputContent">0</button>
        <button @click="inputContent">.</button>
        <button>%</button>
        <button>÷</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Prop } from "vue-property-decorator";
  @Component
  export default class Types extends Vue {
    output: string = "";
    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      if(this.output.length===16){return;}
      if(this.output ==='0'){
        if('0123456789'.indexOf(input)>=0)
        {
          this.output=input;
        }else{
        this.output+=input;
      }  
      return;
      }
       if(this.output.indexOf('.')>=0 && input==='.'){
         this.output='0'+'.';
         this.output=this.output.slice(0,-1);
       }
        this.output+=input;
     }
     remove(){
       if(this.output.length===1){
         this.output='0';
       }else{
         this.output=this.output.slice(0,-1);
       }
     }
     clear(){
       this.output='0'
     }
     ok(){
       this.$emit('update:value',this.output)
       this.$emit('submit',this.output)
       this.output='0'
     }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .numberPad {
    .output {
      height: 72px;
      @extend %clearfix;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
      box-shadow: inset 0 -5px 6px -5px fade-out(#d47926, 0.6),
        inset 0 5px 6px -5px fade-out(#d47926, 0.6);
      background-color: white;
    }
    .buttons {
      @extend %clearfix;
      > button {
        width: 20%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;
        &.ok {
          height: 64 * 2px;
          float: right;
        }
        $bg: #f6ba72;
        &:nth-child(15),
        &:nth-child(19) {
          background: $bg;
        }
        &:nth-child(18),
        &:nth-child(14),
        &:nth-child(10) {
          background: lighten($bg, 4%);
        }
        &:nth-child(5),
        &:nth-child(9),
        &:nth-child(13),
        &:nth-child(17) {
          background: lighten($bg, 4% * 2);
        }
        &:nth-child(4),
        &:nth-child(8),
        &:nth-child(12),
        &:nth-child(16) {
          background: lighten($bg, 4% * 3);
        }
        &:nth-child(3),
        &:nth-child(7),
        &:nth-child(11) {
          background: lighten($bg, 4% * 4);
        }
        &:nth-child(2),
        &:nth-child(6) {
          background: lighten($bg, 4% * 5);
        }
        &:nth-child(1) {
          background: lighten($bg, 4% * 6);
        }
      }
    }
  }
</style>
