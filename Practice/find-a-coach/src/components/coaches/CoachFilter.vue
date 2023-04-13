<template>
  <section>
    <base-card>
      <h3>Find your coach!!!</h3>
      <span class="me-2">
        <input type="checkbox" id="frontend" checked @change="setFilters" />
        <label for="frontend">FrontEnd</label>
      </span>
      <span class="me-2">
        <input type="checkbox" id="backend" checked @change="setFilters" />
        <label for="backend">BackEnd</label>
      </span>
      <span class="me-2">
        <input type="checkbox" id="database" checked @change="setFilters" />
        <label for="database">Database</label>
      </span>
      <span class="me-2">
        <input type="checkbox" id="security" checked @change="setFilters" />
        <label for="security">Security</label>
      </span>
    </base-card>
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
