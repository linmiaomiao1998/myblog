<template>
  <div>
    <Layout class-prefix="layout">
      <Numberpad @update:value="onUpdateAmount" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <div class="notes">
        <FormItem
          field-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
      <Tags />
      <button @click="$store.commit('increment')"></button>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Numberpad from "@/components/Money/Numberpad.vue";
  import Types from "@/components/Money/Types.vue";
  import FormItem from "@/components/Money/FormItem.vue";
  import Tags from "@/components/Money/Tags.vue";
  import { Component } from "vue-property-decorator";
  // import store from '@/store/index2.ts';

  ///import model from '@/views/model.js';
 

  type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; //数据类型
    createdAt?: Date; //类、构造函数
  };
  @Component({
    components: { Numberpad, Types, FormItem, Tags },
    computed: {
       recordList() {
        return this.$store.state.count;
      }
    }
      // count() {
      //   return store.count;
      // },
      // recordStore() {
      //   return store.recordList; //地址 recordList复制到recordList
      // },
  })
  export default class Money extends Vue {
    // add() {
    //   store.addCount();
    // }
    record: RecordItem = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0,
    };
    create(){
      this.$store.commit('fetchRecords')
    }
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
    onUpdateType(value: string) {
      this.record.type = value;
    }
    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
    saveRecord() {
      // store.createRecord(this.record);
      this.$store.commit('createRecord',this.record);
    }
  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;
  }
</style>
