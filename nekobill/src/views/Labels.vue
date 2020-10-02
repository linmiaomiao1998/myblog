import Tags from '@/components/Money/Tags.vue';
<template>
  <Layout>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component } from "vue-property-decorator";
  import Button from "@/components/Button.vue";

  @Component({
    components: { Button },
  })
  export default class Labels extends Vue {
    // tags = store.tagList;
    get tags() {
      return this.$store.state.tagList;
    }
    beforeCreate() {
      this.$store.commit("fetchTags");
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
      padding: 16px;
      padding-left: 16px;
    }
  }
</style>
