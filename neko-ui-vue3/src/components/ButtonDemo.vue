<template>
  <div>Button页面</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
     <div>
      <Button size="big">大号按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小号按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">大号按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button size="small" theme="link">小号按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">大号按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button size="small" theme="text">小号按钮</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
   <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
   <h1>示例6</h1>
  <div>
    <Button other="gather">内发光</Button>
    <Button other="spread">外发光</Button>
    <Button other="roll">滚动</Button>
    <Button other="open">打开动作</Button>
  </div>
</template>

<script>
  import Button from "../lib/Button.vue";
  export default {
    components: { Button },
    setup() {
      const onClick = () => {
        console.log("hi");
      };
      return { onClick };
    },
  };
</script>

<style></style>
