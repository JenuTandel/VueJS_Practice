<template>
  <section class="p-3 d-flex flex-column align-items-center">
    <base-card>
      <h3>{{ fullname }}</h3>
      <p>${{ rate }}/hour</p>
    </base-card>
    <base-card>
      <h5 class="mb-3">Interested??? Reach out now!</h5>
      <base-button link :to="coachContactLink">Contact</base-button>
      <router-view></router-view>
    </base-card>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </base-card>
  </section>
</template>
<script>
export default {
  name: "CoachDetails",
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    coachContactLink() {
      return this.id + "/" + "contact";
    },
    fullname() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id == this.id
    );
  },
};
</script>
<style></style>
