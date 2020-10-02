<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
        :value="tag.name"
        @update:value="updateTag"
        field-name="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import FormItem from "@/components/Money/FormItem.vue";
  import { Component } from "vue-property-decorator";
  import Button from "@/components/Button.vue";
import store from '../store/index';
  

  @Component({
    components: { Button, FormItem },
  })
  export default class EditLabel extends Vue {
        get tag() {
      return this.$store.state.currentTag;
    }
    created() {
      // this.tag = store.findTag(this.$route.params.id);
       const id = this.$route.params.id;
       this.$store.commit('fetchTags');
      this.$store.commit('setCurrentTag', id);
      if (!this.tag) {
        this.$router.replace("/404");
      }
    }
    updateTag(name: string) {
      if (this.tag) {
        this.$store.commit('updateTag',{id:this.tag.id,name})
          // tagList=store.fetchTags();
      }
    }
    remove() {
      if (this.tag) {
        this.$store.commit('removeTag',this.tag.id)
      //   if (store.removeTag(this.tag.id)) {
      //     this.$router.back();
      //   } else {
      //     window.alert("删除失败");
      //   }
       }
    }
    goBack() {
      console.log("back");
      this.$router.back();
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: lighten(#f6ba72, 23%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper {
    background: lighten(#e2cc92, 23%);
    margin-top: 8px;
  }
  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>
