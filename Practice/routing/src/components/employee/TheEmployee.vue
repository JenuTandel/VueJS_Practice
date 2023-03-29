<template>
  <div class="mt-3">
    <router-link to="/employee/employee-list" class="btn btn-primary me-3"
      >Employee List</router-link
    >
    <!-- <router-link to="/employee/employee-form" class="btn btn-primary"
      >Add Employee</router-link
    > -->
    <router-link :to="employeeForm" class="btn btn-primary"
      >Add Employee</router-link
    >
  </div>
  <section>
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  computed: {
    employeeForm() {
      return {
        name: "/employee/employee-form",
        query: { sort: "asc" },
      };
    },
  },
};
</script>
<style scoped>
/* .btn.active {
  color: black;
} */
</style>
