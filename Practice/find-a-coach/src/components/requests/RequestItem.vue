<template>
  <li>
    <div>
      <a :href="emailLink" class="text-primary">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  name: "RequestItem",
  props: ["email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>
<style scoped>
a {
  cursor: pointer;
}
</style>
