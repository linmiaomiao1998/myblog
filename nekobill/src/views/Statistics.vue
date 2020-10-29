<template>
  <Layout>
    <Tabs classPrefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs classPrefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type:{{type}}
      <br/>
      inteval:{{interval}}
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";
  import Tabs from '../components/Tabs.vue';
  import intervalList from '@/constants/intervalList.ts';
  import recordTypeList from '@/constants/recordTypeList.ts';
  @Component({
    components: { Tabs },
  })
  export default class Statistics extends Vue {
    type = "-";
    interval='day'
    intervalList = intervalList;
    typeList=recordTypeList;
  }
</script>

<style scoped lang="scss">
  ::v-deep .type-tabs-item {
    background:#cf7421 ;
    color: #f2bc64;
    &.selected {
      background-color: #f2bc64;
      color: #cf7421;
      &::after {
        display: none;
      }
    }
  }
</style>
