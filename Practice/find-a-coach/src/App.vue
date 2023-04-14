<template>
  <header>
    <the-header></the-header>
  </header>
  <router-view></router-view>
</template>
<script>
import TheHeader from "./components/layouts/ThHeader.vue";
export default {
  name: "App",
  components: { TheHeader },
};
</script>
<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
}
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
a {
  all: unset;
}
</style>
