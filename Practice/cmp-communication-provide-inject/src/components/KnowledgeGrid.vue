<template>
  <ul>
    <knowledge-element
      v-for="data in topics"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :description="data.description"
    ></knowledge-element>
    <!-- @select-topic="$emit('select-topic', $event)" -->
  </ul>
</template>

<script>
export default {
  // props: ["finalData"],
  inject: ["topics"],
  // emit: ["select-topic"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
</style>
