<template>
  <div>
    <base-dialog :show="!!error" title="Error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section class="p-3 h-100 d-flex flex-column align-items-center">
      <base-card>
        <coach-filter @change-filter="setFilter"></coach-filter>
      </base-card>
      <div class="d-flex">
        <base-button class="outline me-2" @click="loadCoaches(true)"
          >Refresh</base-button
        >
        <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
          >Login to Register as a Coach</base-button
        >
        <base-button
          link
          to="/register"
          v-if="!isCoach && !isLoading && isLoggedIn"
          >Register</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
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
  </div>
</template>
<script>
import CoachItems from "../../components/coaches/CoachItems.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
export default {
  data() {
    return {
      error: null,
      isLoading: false,
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
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },

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
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilter(updateFilters) {
      this.activeFilters = updateFilters;
    },
    async loadCoaches(refresh) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
      } catch (err) {
        this.error = err.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>
<style></style>
