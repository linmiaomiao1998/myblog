<template>
  <Layout>
    <Tabs classPrefix="type" :data-source="typeList" :value.sync="type" />
    <Tabs
      classPrefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
    <div>
      type:{{ type }}
      <br />
      inteval:{{ interval }}
      <br />
    </div>
    <ol>
      <li v-for="(group, index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
      <li v-for="(group, index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";
  import Tabs from "../components/Tabs.vue";
  import intervalList from "@/constants/intervalList.ts";
  import recordTypeList from "@/constants/recordTypeList.ts";
  import createId from "../lib/createid";
  @Component({
    components: { Tabs },
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? "无" : tags.join(",");
    }
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }
    get result() {
      const { recordList } = this;
      type HashTableValue = { title: string; items: RecordItem[] };
      const hashTable: { [key: string]: HashTableValue } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createdAt!.split("T");
        hashTable[date] = hashTable[date] || { title: date, items: [] };
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;
    }
    beforeCreate() {
      this.$store.commit("fetchRecords");
    }
    type = "-";
    interval = "day";
    intervalList = intervalList;
    typeList = recordTypeList;
  }
</script>

<style scoped lang="scss">
  ::v-deep {
    .type-tabs-item {
      background: #cf7421;
      color: #f2bc64;
      &.selected {
        background-color: #f2bc64;
        color: #cf7421;
        &::after {
          display: none;
        }
      }
    }
    .interval-tabs-item {
      height: 48px;
    }
  }
   %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %item;
  }
  .record {
    background:lighten(#f6ba72, 20%);
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    }
</style>
