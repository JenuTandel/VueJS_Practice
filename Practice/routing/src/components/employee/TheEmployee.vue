<template>
  <div class="mt-3">
    <router-link to="employee-list" class="btn btn-primary me-3"
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
  // props: ["empid"],
  computed: {
    employeeForm() {
      return {
        name: "employee-form",
        // params: { empid: "1" },
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
