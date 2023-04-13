<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link :to="to" v-else :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  background-color: #0d73f8;
  border: 1px solid #0d73f8;
  padding: 8px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}
.flat {
  background-color: transparent;
  color: #0d73f8;
  border: none;
}

.outline {
  background-color: white;
  border-color: #0d73f8;
  color: #0d73f8;
}
</style>
