<template>
  <div>
    <Layout>
      <div class="tags">
        <ul div class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>×</button>
          <button class="ok">ok</button>
          <button>0</button>
          <button>.</button>
          <button>%</button>
          <button>÷</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  .output{
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons{
    flex-wrap: wrap;
    > button{
      width: 20%;
      height:64px;
      float: left;
      &.ok{
        height: 64*2px;
        float: right;
      }
    }
  }
}
.types {
  background: #fcc869;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #BA9344;
    }
  }
}
.notes {
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
.tags {
  font-size: 14px;
  padding: 16px;
  > .current {
    display: flex;
    > li {
      background: #FAEC8B;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 10px;
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
