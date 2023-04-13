<template>
  <base-card>
    <li>
      <h5 class="mb-2">{{ fullname }}</h5>
      <p class="mb-2">${{ rate }}/hour</p>
      <div>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        >
        </base-badge>
      </div>
      <div class="mt-3">
        <base-button class="outline me-2" link :to="coachDetailLink"
          >Details</base-button
        >
        <base-button link :to="coachContactLink">Contact</base-button>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  name: "CoachItems",
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullname() {
      return this.firstName + " " + this.lastName;
    },
    coachDetailLink() {
      return this.$route.path + "/" + this.id;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/" + "contact";
    },
  },
};
</script>
