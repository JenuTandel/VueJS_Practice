<template>
  <!-- <template #default> -->
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="AddResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="StoredResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <!-- </template> -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to Google...",
          link: "https://google.com",
        },
      ],
    };
  },
  computed: {
    StoredResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    AddResButtonMode() {
      return this.selectedTab === "add-resources" ? null : "flat";
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addNewResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(cmp) {
      this.selectedTab = cmp;
    },
    addResource(title, description, link) {
      const myid = this.storedResources.length + 1;
      const newResource = {
        id: myid,
        title: title,
        description: description,
        link: link,
      };
      console.log(newResource);
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(resId) {
      const indexNum = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(indexNum, 1);
    },
  },
};
</script>
