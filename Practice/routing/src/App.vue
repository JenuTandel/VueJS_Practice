<template>
  <header>
    <the-header></the-header>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  width: 100%;
}
a.active {
  color: black;
  background-color: pink;
}
/* a:hover,
a:active,
 a.router-link-active {
  color: black;
  border-color: blue;
  background-color: pink;
} */
</style>
