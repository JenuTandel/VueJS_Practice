<template>
  <section class="p-3 h-100 d-flex flex-column align-items-center">
    <base-card>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </base-card>
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
import CoachFilter from "./CoachFilter.vue";
export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        database: true,
        security: true,
      },
    };
  },
  components: {
    CoachItems,
    CoachFilter,
  },
  computed: {
    //get coaches
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.database && coach.areas.includes("database")) {
          return true;
        }
        if (this.activeFilters.security && coach.areas.includes("security")) {
          return true;
        }
        return false;
      });
    },
    //data is found or not
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilter(updateFilters) {
      this.activeFilters = updateFilters;
    },
  },
};
</script>
<style></style>
