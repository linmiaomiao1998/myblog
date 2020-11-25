<template>
  <div>Dialog页面</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :OnClickOverlay="false">
    <template v-slot:content>
      <div>hi</div>
    </template>
    <template v-slot:title>
    <div>标题</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import Dialog from "../lib/Dialog.vue";
  import { ref } from "vue";
  import Button from "../lib/Button.vue";

  export default {
    components: {
      Dialog,
      Button,
    },
    setup() {
      const x = ref(false);
      const toggle = () => {
        x.value = !x.value;
      };
      return { x, toggle };
    },
  };
</script>

<style></style>
