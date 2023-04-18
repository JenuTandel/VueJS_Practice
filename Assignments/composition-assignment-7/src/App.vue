<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 v-if="isVisible">{{ goal }}</h3> -->
  <!-- <h3 v-if="isVisible">{{ goal }}</h3> -->
  <h3 v-if="courseData.isVisible">{{ courseData.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- <button @click="show">Toggle Goal</button> -->
  <button @click="show">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<!-- <script>
//Task 1,2 with 4
export default {
  data() {
    return {
      goal: "Learn Vue.js",
      isVisible: true,
    };
  },
  methods: {
    show() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script> -->
<!-- <script setup>
import { ref } from "vue";
const goal = "Learn Vue.js";
const isVisible = ref(true);

function show() {
  isVisible.value = !isVisible.value;
}
</script> -->
<script setup>
import { reactive } from "vue";
// const goal = ref("Learn Vue.js");
// const isVisible = ref(true);

// const courseData = ref({
//   goal: "Learn Vue.js",
//   isVisible: true,
// });

const courseData = reactive({
  goal: "Learn Vue.js",
  isVisible: true,
});

function show() {
  // isVisible.value = !isVisible.value;
  // courseData.value.isVisible = !courseData.value.isVisible;
  courseData.isVisible = !courseData.isVisible;
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
