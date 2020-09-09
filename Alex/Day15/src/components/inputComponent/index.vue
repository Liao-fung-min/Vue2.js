<script>
export default {
  name: "input-Component",
  props:{
      text:{
          type:String,
          required:true,
        //   default:''
      }
  },
  computed: {
    inputText:{
      get(){
        return this.text
      },
      set(val){
        // console.log(val)
        this.$emit('Textchange',val)
      }
    }
  },
};
</script>

<template src="./template.html"></template>
<style src="./style.css"></style>
