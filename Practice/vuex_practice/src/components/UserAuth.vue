<template>
  <button type="button" @click="login" v-if="!userIsAuthenticated">
    Login
  </button>
  <button type="button" @click="logout" v-if="userIsAuthenticated">
    Logout
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  methods: {
    ...mapActions(["login", "logout"]),
  },
  computed: {
    ...mapGetters(["userIsAuthenticated"]),
  },
});
</script>
