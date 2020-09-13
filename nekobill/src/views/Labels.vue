import Tags from '@/components/Money/Tags.vue';
<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right" />
      </li>
      <li>
        <span>食</span>
        <Icon name="right" />
      </li>
      <li>
        <span>住</span>
        <Icon name="right" />
      </li>
      <li>
        <span>行</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script>
  export default {
    name: "Labels",
  };
</script>

<style lang="scss" scoped>
  .tags {
    background: lighten(#f6ba72, 20%);
    font-size: 16px;
    padding-left: 16px;
    > li {
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

    &-wrapper{
      text-align: center;
      padding: 16px;
      margin-top:44-16px;
    }
  }
</style>
