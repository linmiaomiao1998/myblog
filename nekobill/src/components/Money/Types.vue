import Types from '@/components/Money/Types.vue';
<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
   type ='-'//'-'表示支出，'+'表示收入
   @Prop(Number) xxx:number|undefined
      selectType(type:string) {
      ///type只能是‘-’或者“+”
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknow");
      }
      this.type = type;
      }
      mounted(){
        if(this.xxx === undefined){
          console.log('no xxx')
        }else{
          console.log(this.xxx.toString());
          
        }
      }
}
// export default{
//   name: "Types",
//   props: ["xxx"],
//   data() {
//     return {
//       type: "-", //'-'表示支出，'+'表示收入
//     };
//   },
//   mounted() {
//     console.log(this.xxx);
//   },
//   methods: {
//     selectType(type) {
//       ///type只能是‘-’或者“+”
//       if (type !== "-" && type !== "+") {
//         throw new Error("type is unknow");
//       }
//       this.type = type;
//       },
//   }
// }
</script>

<style lang="scss" scoped>
.types {
  background: #f2bc64;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #cf7421;
    }
  }
}
</style>
