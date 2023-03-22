<template>
  <section>
    <!-- <knowledge-grid
      @selectTopic="$emit('select-topic', $event)"
    ></knowledge-grid> -->
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<script>
export default {
  // props: ["data"],
  // emit: ["select-topic"],
};
</script>
<style scoped>
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 5px;
}
</style>
