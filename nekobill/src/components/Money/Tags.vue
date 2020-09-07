<template>
  <div class="tags">
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul div class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column-reverse;
  background-color:lighten(#E2CC92,23%);
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  > .current {
    flex-wrap: wrap;
    display: flex;
    > li {
      background: #ffe787;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 10px;
      margin-top: 4px;
    }
  }
  > .new {
    padding-top: 16px;
    > button {
      background: transparent;
      border: none;
      color: #999;
      padding: 0 4px;
      border-bottom: 1px solid;
    }
  }
}
</style>