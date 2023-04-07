<template>
  <!-- <h3>{{ counter }}</h3> -->
  <h3>{{ finalCounter }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
export default defineComponent({
  data() {
    return {
      $store: useStore(),
    };
  },
  computed: {
    //     counter(): any {
    //       //   return this.$store.getters.finalCounter;
    //     //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters("numbers", ["finalCounter"]),
  },
});
</script>
