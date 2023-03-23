<template>
  <ul>
    <learning-resource-list
      v-for="item in resources"
      :key="item.id"
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
  props: ["resources"],
};
</script>
