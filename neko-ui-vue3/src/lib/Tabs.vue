<template>
  <div>
    Tabs组件
    <div class="neko-tabs">
      <div class="neko-tabs-nav">
        <div
          class="neko-tabs-nav-item"
          v-for="(t, index) in titles"
          :key="index"
        >
          {{ t }}
        </div>
      </div>
      <div class="neko-tabs-content">
        <component
          class="neko-tabs-content-item"
          v-for="(c, index) in defaults"
          :is="c"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from "./Tab.vue";
  export default {
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error("Tab组件必须是tab");
        }
      });
      const titles = defaults.map((tag) => {
        return tag.props.title;
      });
      return {
        defaults,
        titles,
      };
    },
  };
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.neko-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>