<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/animation">Animation</router-link>|
    <router-link to="/list">List</router-link>
  </nav>
  <router-view v-slot="slotProps">
    <!-- <transition name="route" mode="out-in"> -->
    <transition name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.route-enter-from {
  opacity: 0;
}
.route-enter-to {
  opacity: 1;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-from {
  opacity: 1;
}
.route-enter-active {
  transition: opacity 0.5s ease-in;
}

.route-leave-active {
  transition: opacity 0.5s ease-in;
}
</style>
