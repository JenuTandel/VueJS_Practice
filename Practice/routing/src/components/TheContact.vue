<template>
  Contact Us
  <button @click="saveChanges">Save Changes</button>
</template>
<script>
export default {
  data() {
    return {
      changedSaved: false,
    };
  },
  methods: {
    saveChanges() {
      this.changedSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("Component");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Before Router Leave");
    console.log(to, from);

    if (this.changedSaved) {
      next();
    } else {
      const leave = confirm("Want to leave with unsaved changes?");
      next(leave);
    }
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<style scoped></style>
