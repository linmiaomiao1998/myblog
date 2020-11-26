<template>
   <div>Tabs页面</div>
   <Tabs>
   <Tab title="1">内容1</Tab>
   <Tab title="2">内容2</Tab>
   </Tab>
</template>

<script>
import Tab from "../lib/Tab.vue"
import Tabs from "../lib/Tabs.vue"
export default {
 components:{
    Tabs,Tab
 }
}
</script>

<style>

</style>