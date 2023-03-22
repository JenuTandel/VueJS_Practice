<template>
  <form id="userForm" @submit.prevent="AddUser">
    <div>
      <label>Name:</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age:</label>
      <input type="number" v-model="enteredAge" />
    </div>
    <div>
      <button type="submit">Add User</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    AddUser() {
      this.$emit("add-user", { name: this.enteredName, age: this.enteredAge });
      this.resetForm();
    },
    resetForm() {
      (this.enteredName = ""), (this.enteredAge = "");
      document.getElementById("userForm").reset();
    },
  },
};
</script>

<style></style>
