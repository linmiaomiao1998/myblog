<template>
  <div>
    <Layout class-prefix="layout">
      <Numberpad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <Notes field-name="备注" placeholder="在这里输入备注"
      @update:value="onUpdateNotes" />
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Numberpad from "@/components/Money/Numberpad.vue";
  import Types from "@/components/Money/Types.vue";
  import Notes from "@/components/Money/Notes.vue";
  import Tags from "@/components/Money/Tags.vue";
  import { Component, Watch } from "vue-property-decorator";
  import {recordListmodel} from '@/models/recordList';
  import {tagListmodel} from '@/models/tagListModel';

///import model from '@/views/model.js';
 const recordList=recordListmodel.fetch()
 const tagList=tagListmodel.fetch()


  type RecordItem= {
    tags: string[];
    notes: string;
    type: string;
    amount: number;//数据类型
    createdAt?:Date;//类、构造函数
  };
  @Component({
    components: { Numberpad, Types, Notes, Tags },
  })
  export default class Money extends Vue {
    tags = tagList;
    recordList:RecordItem[]=JSON.parse(window.localStorage.getItem('recordList')||'[]');
    record: RecordItem = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0,
    };
    onUpdateTags(value: string[]) {
      this.record.tags = value;
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
    saveRecord(){
      const record2:RecordItem=recordListmodel.clone(this.record);
      record2.createdAt=new Date();
      this.recordList.push(record2)
    }
    @Watch('recordList')
    onRecordListChange(){
    recordListmodel.save(this.recordList);
    }
  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
