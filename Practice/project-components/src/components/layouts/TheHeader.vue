<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
h1 {
  color: rgb(5, 42, 64);
  text-align: center;
}
</style>
