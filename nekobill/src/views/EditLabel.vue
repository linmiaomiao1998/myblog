<template>
  <Layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <Notes field-name="标签名" placeholder="请输入标签"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import Notes from "@/components/Money/Notes.vue";
  import { Component } from "vue-property-decorator";
  import { tagListmodel } from "@/models/tagListModel";
  @Component
  ({
    components: { Notes},
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      tagListmodel.fetch();
      const tags = tagListmodel.data;
      const tag = tags.filter((t) => t.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace("/404");
      }
    }
  }
</script>

<style></style>
