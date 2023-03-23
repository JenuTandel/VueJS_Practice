<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoals">SetGoal</button>

  <teleport to="body">
    <error-alert v-if="inputIsInValid">
      <h2>Input is Invalid!!!</h2>
      <p>Enter your goal</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInValid: false,
    };
  },
  methods: {
    setGoals() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        // alert("Hello");
        this.inputIsInValid = true;
      }
    },
    confirmError() {
      this.inputIsInValid = false;
    },
  },
};
</script>
