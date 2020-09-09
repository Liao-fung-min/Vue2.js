<template>
  <div id="app">
    this is app vue
    <TitleComponent :title="title" />
    <InputComponent :text="title" @Textchange="changeHalder" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TitleComponent from "./components/Title.vue";
import InputComponent from "./components/inputComponent/index.vue";

export default {
  name: "App",
  data() {
    return {
      title: "安安大家好這是我綁定的資料",
    };
  },
  components: {
    HelloWorld,
    TitleComponent,
    InputComponent,
  },
  methods: {
    changeHalder(val) {
      this.title = val;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
