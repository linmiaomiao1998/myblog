<template>
  <div>
    <Layout class-prefix="layout">
      <Numberpad />
      <Types :xxx="34562"/>
      <Notes />
      <Tags />
    </Layout>
  </div>
</template>

<script lang="ts">
import Numberpad from "@/components/Money/Numberpad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
export default {
  name: "Money",
  components: { Numberpad, Types, Notes, Tags},
};
</script>
<style lang="scss">
.layout-content {
  border: 3px solid blue;
  display: flex;
  flex-direction: column-reverse;
}
</style>

