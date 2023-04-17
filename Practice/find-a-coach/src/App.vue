<template>
  <header>
    <the-header></the-header>
  </header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>
<script>
import TheHeader from "./components/layouts/ThHeader.vue";
export default {
  name: "App",
  components: { TheHeader },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  watch: {
    didAutoLogout(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$router.replace("/coaches");
      }
    },
  },
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
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
