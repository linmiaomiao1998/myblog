<template>
  <div>
    <Layout class-prefix="layout">
      <Numberpad @update:value="onUpdateAmount" @submit="saveRecord" />
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
      <div class="notes">
        <FormItem
          field-name="备注"
          placeholder="在这里输入备注"
          :value="record.notes"
          @update:value="onUpdateNotes"
        />
      </div>
      <Tags @update:value="record.tags = $event" />
      <button @click="$store.commit('increment')"></button>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Numberpad from "@/components/Money/Numberpad.vue";
  import FormItem from "@/components/Money/FormItem.vue";
  import Tags from "@/components/Money/Tags.vue";
  import { Component } from "vue-property-decorator";
  import Tabs from "@/components/Tabs.vue";
  import recordTypeList from "@/constants/recordTypeList.ts";
  import store from "../store/index";

  // type RecordItem = {
  //   tags: string[];
  //   notes: string;
  //   type: string;
  //   amount: number; //数据类型
  //   createdAt?: Date; //类、构造函数
  // };
  @Component({
    components: { Tabs, Numberpad, FormItem, Tags },
    computed: {
      recordList() {
        return this.$store.state.count;
      },
    },
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
    get recordList() {
      return this.$store.state.recordList;
    }

    recordTypeList = recordTypeList;
    record: RecordItem = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0,
    };
    created() {
      this.$store.commit("fetchRecords");
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
      if (!this.record.tags.length || this.record.tags.length === 0) {
        return window.alert("请至少选择一个标签");
      }
      // store.createRecord(this.record);
      this.$store.commit("createRecord", this.record);
      if (this.$store.state.createRecordError === null) window.alert("已保存");
      this.record.notes = "";
    }
  }
</script>
<style lang="scss" scoped>
  ::v-deep .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;
  }
</style>
