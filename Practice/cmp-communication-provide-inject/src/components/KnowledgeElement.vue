<template>
  <li>
    <h2>{{ title }}</h2>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ["selectTopic"],
  props: ["id", "title"],
  emit: ["select-topic"],
};
</script>

<style scoped>
li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>
