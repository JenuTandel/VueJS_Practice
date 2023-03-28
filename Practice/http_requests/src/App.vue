<template>
  <http-base></http-base>
</template>

<script>
import HttpBase from "./components/HttpBase.vue";
export default {
  name: "App",
  components: { HttpBase },
  provide() {
    return {
      users: "Hello",
    };
  },
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
ul,
li {
  list-style: none;
  margin: 0;
}
figure {
  margin: 0;
}
</style>
