<template>
  <section>
    <h3>Find your coach!!!</h3>
    <span class="me-2">
      <input type="checkbox" id="frontend" checked @change="setFilters" />
      <label for="frontend" class="ms-1">FrontEnd</label>
    </span>
    <span class="me-2">
      <input type="checkbox" id="backend" checked @change="setFilters" />
      <label for="backend" class="ms-1">BackEnd</label>
    </span>
    <span class="me-2">
      <input type="checkbox" id="database" checked @change="setFilters" />
      <label for="database" class="ms-1">Database</label>
    </span>
    <span class="me-2">
      <input type="checkbox" id="security" checked @change="setFilters" />
      <label for="security" class="ms-1">Security</label>
    </span>
  </section>
</template>

<script>
export default {
  name: "CoachFilter",
  emit: ["change-filter"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        database: true,
        security: true,
      },
    };
  },
  methods: {
    setFilters(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updateFilters = { ...this.filters, [inputId]: isActive };
      this.filters = updateFilters;
      this.$emit("change-filter", updateFilters);
    },
  },
};
</script>
