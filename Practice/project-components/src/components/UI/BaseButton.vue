<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>
<style scoped>
button {
  border: 1px solid rgb(205, 98, 98);
  cursor: pointer;
  padding: 10px;
  /* border-radius: 10px; */
  color: white;
  background-color: rgb(136, 46, 46);
}

button:hover,
button:active {
  background-color: rgb(205, 98, 98);
  border-color: rgb(136, 46, 46);
}

.flat {
  background-color: white;
  color: black;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: rgb(136, 46, 46);
  color: white;
}
</style>
