import Tags from '@/components/Money/Tags.vue';
<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";
  import tagListmodel  from "@/models/tagListModel";
  import Button from '@/components/Button.vue';
  tagListmodel.fetch();
  @Component({
    components:{Button}
  })
  export default class Labels extends Vue {
    tags = tagListmodel.data;
    createTag() {
      const name = window.prompt("请输入标签");
      if (name) {
        const message=tagListmodel.create(name);
          if(message==='duplicated'){
            window.alert('标签名重复');
          }else if(message==='success'){
            window.alert('添加成功');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    background: lighten(#f6ba72, 20%);
    font-size: 16px;
    padding-left: 16px;
    > .tag {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 44px;
      border-bottom: 1px solid #999999;
      svg {
        margin-right: 8px;
        width: 20px;
        height: 20px;
      }
    }
  }
  .createTag {
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
