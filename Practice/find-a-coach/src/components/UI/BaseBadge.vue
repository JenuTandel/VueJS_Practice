<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>
<script>
export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title;
    },
  },
};
</script>

<style scoped>
.badge {
  border-radius: 10px;
  background-color: rgb(245, 183, 83);
  color: black;
  padding: 12px;
  margin-right: 12px;
}

.frontend {
  background-color: #d4e157;
}
.backend {
  background-color: #e6ee9c;
}
.database {
  background-color: #c5e1a5;
}
.security {
  background-color: #81c784;
}
</style>
