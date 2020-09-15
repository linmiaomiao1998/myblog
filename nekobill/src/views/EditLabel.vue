<template>
  <Layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <FormItem field-name="标签名" placeholder="请输入标签" />
    <Button>删除标签</Button>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import FormItem from "@/components/Money/FormItem.vue";
  import { Component } from "vue-property-decorator";
  import { tagListmodel } from "@/models/tagListModel";
  import Button from "../components/Button.vue";

  @Component({
    components: { Button,FormItem },
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
