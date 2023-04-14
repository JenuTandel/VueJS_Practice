<template>
  <header>
    <h3>Requests</h3>
  </header>
  <base-card>
    <ul v-if="hasRequests">
      <request-item
        v-for="req in receivedRequests"
        :key="req.id"
        :email="req.userEmail"
        :message="req.message"
      ></request-item>
    </ul>
    <h4 v-else class="text-danger">No requests</h4>
  </base-card>
</template>
<script>
import RequestItem from "./RequestItem.vue";
export default {
  name: "RequestReceived",
  components: { RequestItem },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>
<style></style>
