<template>
  <div class="tags">
        <div class="new">
          <button @click="creat">新增标签</button>
        </div>
        <ul div class="current">
        <li v-for="tag in dataSource" :key="tag"
        :class="{selected:selectedTags.indexOf(tag)>=0}"
        @click="toggle(tag)">{{tag}}

        </li>
        </ul>
      </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

  @Component
  export default class Tags extends Vue {
    @Prop( ) dataSource:string[]|undefined;
    selectedTags: string[]=[];
    toggle(tag:string){
      const index =this.selectedTags.indexOf(tag)
      if(index>=0){
        this.selectedTags.splice(index,1);
      }else{
      this.selectedTags.push(tag);
      }
    }
    creat(){
      const name=window.prompt('请输入标签名');
      if(name===''){
        window.alert('标签名不能为空')
      }else if(this.dataSource){
        this.$emit('update:dataSourse',[...this.dataSource,name])
        }
     }

}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column-reverse;
  background-color:lighten(#E2CC92,23%);
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  > .current {
    flex-wrap: wrap;
    display: flex;
    > li {
      background: #ffe787;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 10px;
      margin-top: 4px;
      &.selected{
        background: darken(#ffe787, 20%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    > button {
      background: transparent;
      border: none;
      color: #999;
      padding: 0 4px;
      border-bottom: 1px solid;
    }
  }
}
</style>