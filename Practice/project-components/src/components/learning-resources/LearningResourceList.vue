<template>
  <li>
    <base-card>
      <template #header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="deleteResource(id)">Delete</base-button>
      </template>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>
<script>
export default {
  props: ["id","title", "description", "link"],
  inject:['deleteResource']
};
</script>

<style scoped>
h3 {
  margin: 0;
  color: white;
}
li {
  all: unset;
}
</style>
