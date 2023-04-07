<template>
  <!-- <p>{{ $store.state.counter }}</p> -->
  <p>{{ $store.state.counter }}</p>
  <!-- <button type="button" @click="addNumber">Add 1</button> -->
  <button type="button" @click="inc">Add 1</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore, mapActions } from "vuex";
export default defineComponent({
  data() {
    return {
      $store: useStore(),
    };
  },
  methods: {
    // addNumber() {
    //   // this.$store.state.counter++;
    //   // this.$store.commit("increment");
    //   // this.$store.dispatch("numbers/increment");
    // },
    ...mapActions("numbers", { inc: "increment" }),
  },
});
</script>
