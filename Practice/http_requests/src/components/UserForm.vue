<template>
  <div class="d-flex justify-content-center">
    <form @submit.prevent="onSubmit" class="userform p-4 border mt-3">
      <h3 class="text-center mb-3">User Form</h3>
      <input
        type="text"
        placeholder="Enter Your Firstname"
        id="firstname"
        name="firstname"
        class="form-control mb-3"
        v-model="enteredFirstName"
      />
      <input
        type="text"
        placeholder="Enter Your LastName"
        id="firstname"
        name="firstname"
        class="form-control mb-3"
        v-model="enteredLastName"
      />
      <div class="d-flex mb-3">
        <label for="gender" class="me-3">Gender: </label>
        <div class="me-2">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            v-model="selectedGender"
          />
          <label for="male">male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            v-model="selectedGender"
          />
          <label for="female">female</label>
        </div>
      </div>
      <div class="mb-3">
        <label for="skill" class="me-3">Choose your Skill: </label>
        <input
          type="checkbox"
          value="coding"
          class="px-2"
          id="coding"
          v-model="selectedSkill"
        />
        <label for="coding" class="mx-2">Coding</label>
        <input
          type="checkbox"
          value="art"
          id="art"
          v-model="selectedSkill"
        /><label for="art" class="mx-2">Art</label>
        <input
          type="checkbox"
          value="sports"
          id="sports"
          v-model="selectedSkill"
        /><label for="sports" class="mx-2">Sports</label>
      </div>
      <button type="submit" class="btn btn-primary">
        <span v-if="isLoading">Sending...</span>
        <span v-else>Add User</span>
      </button>
      <p class="text-danger mt-3">{{ error }}</p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  inject: ["getUserData"],
  props: ["updatedUser"],
  watch: {
    updatedUser() {
      this.userid = this.updatedUser.userId;
      this.enteredFirstName = this.updatedUser.data.firstname;
      this.enteredLastName = this.updatedUser.data.lastname;
      this.selectedGender = this.updatedUser.data.gender;
      this.selectedSkill = this.updatedUser.data.skill;
    },
  },
  data() {
    return {
      userid: null,
      enteredFirstName: "",
      enteredLastName: "",
      selectedGender: "",
      selectedSkill: [],
      isLoading: false,
      error: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.userid);
      if (this.userid) {
        axios
          .patch(
            `https://vue-http-requests-9c690-default-rtdb.firebaseio.com/user/${this.userid}.json`,
            {
              firstname: this.enteredFirstName,
              lastname: this.enteredLastName,
              gender: this.selectedGender,
              skill: this.selectedSkill,
            }
          )
          .then((response) => {
            console.log(response);
            this.isLoading = false;
            (this.enteredFirstName = ""),
              (this.enteredLastName = ""),
              (this.selectedGender = ""),
              (this.selectedSkill = []);
            this.error = "";
            this.userid = null;
            this.getUserData();
          })
          .catch((error) => {
            this.isLoading = false;
            this.error = error.message;
          });
      } else {
        this.isLoading = true;
        if (
          this.enteredFirstName !== "" &&
          this.enteredLastName !== "" &&
          this.selectedGender !== "" &&
          this.selectedSkill !== ""
        ) {
          axios
            .post(
              "https://vue-http-requests-9c690-default-rtdb.firebaseio.com/user.json",
              {
                firstname: this.enteredFirstName,
                lastname: this.enteredLastName,
                gender: this.selectedGender,
                skill: this.selectedSkill,
              }
            )
            .then((response) => {
              console.log(response);
              this.isLoading = false;
              (this.enteredFirstName = ""),
                (this.enteredLastName = ""),
                (this.selectedGender = ""),
                (this.selectedSkill = []);
              this.error = "";
              this.getUserData();
            })
            .catch((error) => {
              this.isLoading = false;
              this.error = error.message;
            });
        } else {
          this.isLoading = false;
          this.error = "Fill out all the Fields";
          setTimeout(() => {
            this.error = "";
          }, 3000);
        }
      }
    },
  },
};
</script>
<style scoped>
.userform {
  width: 400px;
}
</style>
