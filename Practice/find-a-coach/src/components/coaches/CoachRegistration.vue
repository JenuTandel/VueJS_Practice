<template>
  <section class="h-100 p-3">
    <coach-form @save-data="saveData"></coach-form>
  </section>
</template>

<script>
import CoachForm from "./CoachForm.vue";
export default {
  name: "CoachRegistration",
  components: {
    CoachForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("coaches");
    },
  },
};
</script>
<style></style>
