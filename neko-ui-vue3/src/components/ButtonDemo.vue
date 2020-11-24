<template>
   <div>Button页面</div>
   <Button @click="onClick"
   @focus="onClick"
   @mouseover="onClick"
   >hello</Button>
</template>

<script>
import Button from "../lib/Button.vue"
export default {
    components:{Button},
    setup(){
       const onClick = () =>{
          console.log('hi')
       }
       return {onClick}
    }
}
</script>

<style>

</style>