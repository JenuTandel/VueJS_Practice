<template>
  <li>
    <h2>{{ name }}{{ isFavourite ? " (Favourite)" : "" }}</h2>
    <button @click="toggleFavourite">ToggleFavourite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>Phone:{{ phoneNumber }}</li>
      <li>Email: {{ emailAddress }}</li>
    </ul>
    <button type="button" @click="$emit('delete', id)">Delete</button>
  </li>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      //validation
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: ["toggle-favourite", "delete"],
  // emits: {
  //   "toggle-favourite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       return console.warn("Id is Missing!!!");
  //       // return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      //   friend: {
      //     id: "1",
      //     name: "Jinal",
      //     phone: "9033989099",
      //     email: "jinal@gmail.com",
      //   },
      // friendisFavourite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      // this.friendisFavourite = !this.friendisFavourite;
      this.$emit("toggle-favourite", this.id);
    },
    // deleteFriend() {
    //   this.$emit("delete");
    // },
  },
};
</script>
