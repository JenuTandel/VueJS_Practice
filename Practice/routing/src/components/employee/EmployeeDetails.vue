<template>
  <h2>Employee Details</h2>
  <base-card>
    <li>{{ queryParamsData.name }}</li>
    <li>{{ queryParamsData.gender }}</li>
    <li>{{ queryParamsData.doj }}</li>
    <li>{{ queryParamsData.salary }}</li>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      queryParamsData: null,
    };
  },
  created() {
    this.queryParamsData = this.$route.query;
    console.log(this.queryParamsData);
  },
};
</script>
<style scoped></style>
