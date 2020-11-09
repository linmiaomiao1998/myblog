<template>
  <Layout>
    <Tabs classPrefix="type" :data-source="typeList" :value.sync="type" />
    <Tabs
      classPrefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />

    <ol>
      <li v-for="(group, index) in groupedList" :key="index">
        <h3 class="title">
          {{ beautify(group.title) }} <span>￥{{ group.total }}</span>
        </h3>
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
  import createId from '../lib/createid';
  import dayjs from "dayjs";
import clone from '../lib/clone';
  @Component({
    components: { Tabs },
  })
  export default class Statistics extends Vue {
    beautify(string: string) {
      const day = dayjs(string);
      const now = dayjs();
      if (day.isSame(now, "day")) {
        return "今天";
      } else if (day.isSame(now.subtract(1, "day"), "day")) {
        console.log("hi");
        return "昨天";
      } else if (day.isSame(now.subtract(2, "day"), "day")) {
        return "前天";
      } else if (day.isSame(now, "year")) {
        return day.format("M月D日");
      } else {
        return day.format("YYYY年M月D日");
      }
    }
    tagString(tags: Tag[]) {
      return tags.length === 0 ? "无" : tags.join(",");
    }
    get recordList() {
      return (this.$store.state as RootState).recordList;
    }
    get groupedList() {
      const { recordList } = this;
      if(recordList.length===0){return [];}
      const newList = clone(recordList).sort((a,b)=>dayjs(b.createdAt).valueOf()-dayjs(a.createdAt).valueOf());
      const result=[{title:dayjs(recordList[0].createdAt).format('YYYY-MM-DD'),items:recordList[0]}];
      for(let i=1;i<newList.length;i++){
        const current =newList[i];
        const last=result[result.length-1];
         if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          [last.items].push(current);
        } else {
          result.push({title:dayjs(current.createdAt).format('YYYY-MM-DD'),items:[current]});
        }
      }
      return result;
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
    background: lighten(#f6ba72, 20%);
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
  }
</style>
