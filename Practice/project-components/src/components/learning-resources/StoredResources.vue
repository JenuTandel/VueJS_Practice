<template>
  <ul>
    <learning-resource-list
      v-for="item in resources"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :link="item.link"
    ></learning-resource-list>
  </ul>
</template>
<script>
import LearningResourceList from "./LearningResourceList.vue";
export default {
  components: {
    LearningResourceList,
  },
  // props: ["resources"],
  inject: ["resources"],
};
</script>

<style scoped>
ul {
  all: unset;
}
</style>
