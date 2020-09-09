<template>
    <div>
        <h1 class="title">{{title}}</h1>
    </div>
</template>
<script>
export default {
    name:'TitleComponent',
    // data() {
    //     return {
    //         title:'Hello Alex'
    //     }
    // },
    //你要給我一個title 類型是string
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    h1.title{
        color:red;
    }
</style>