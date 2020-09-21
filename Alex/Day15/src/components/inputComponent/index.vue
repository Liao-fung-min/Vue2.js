<script>
export default {
  name: "input-Component",
  props:{
      text:{
          type:String,
          required:true,
        //   default:''//如果沒有給的話你預設可以給
      }
  },
  computed: {
    inputText:{
      
      get(){//拿值
        return this.text
      },
      set(val){//給值
        // console.log(val)
        this.$emit('update:text',val)
      }
    }
  },
};
</script>

<template src="./template.html"></template>
<style src="./style.css"></style>
