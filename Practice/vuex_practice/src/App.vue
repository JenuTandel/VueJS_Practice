<template>
  <h1>Vuex</h1>
  <div class="data-container" v-if="userIsAuthenticated">
    <base-container></base-container>
    <!-- | <button type="button" @click="addNumber">Add 2</button> -->
    | <button type="button" @click="increase({ value: 2 })">Add 2</button>
    <favourite-counter></favourite-counter>
  </div>
  <div class="auth">
    <user-auth></user-auth>
  </div>
</template>

<script lang="ts">
import BaseContainer from "./components/BaseContainer.vue";
import FavouriteCounter from "./components/FavouriteCounter.vue";
import UserAuth from "./components/UserAuth.vue";
import { useStore, mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BaseContainer, FavouriteCounter, UserAuth },
  data() {
    return {
      $store: useStore(),
    };
  },
  methods: {
    // addNumber() {
    //   // this.$store.state.counter += 2;
    //   // this.$store.commit("increment");
    //   // this.$store.commit("increase", { value: 2 });
    //   // this.$store.commit({
    //   //   type: "increase",
    //   //   value: 2,
    //   // });
    //   this.$store.dispatch({
    //     type: "increase",
    //     value: 2,
    //   });
    // },
    ...mapActions("numbers", ["increase"]),
  },
  computed: {
    ...mapGetters(["userIsAuthenticated"]),
  },
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.auth {
  padding: 50px;
  border: 1px solid black;
  width: 400px;
  margin: auto;
  margin-top: 20px;
}
.data-container {
  padding: 10px;
  border: 1px solid black;
  width: 400px;
  margin: auto;
}
</style>
