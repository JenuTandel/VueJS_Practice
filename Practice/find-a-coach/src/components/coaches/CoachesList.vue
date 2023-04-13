<template>
  <section class="p-3 h-100 d-flex flex-column align-items-center">
    <div class="d-flex">
      <base-button class="outline me-2">Refresh</base-button>
      <base-button link to="/register">Register</base-button>
    </div>
    <ul v-if="hasCoaches">
      <coach-items
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      ></coach-items>
    </ul>
    <h3 v-else class="text-danger">No coaches found.</h3>
  </section>
</template>
<script>
import CoachItems from "./CoachItems.vue";
export default {
  components: {
    CoachItems,
  },
  computed: {
    //get coaches
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    //data is found or not
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
<style></style>
