<template>
  <!-- start: user form -->
  <user-form :updatedUser="updatedUser"></user-form>
  <!-- end: user form -->
  <h3 class="mb-3 text-center mt-3" v-if="users.length !== 0">User List</h3>
  <!-- start: user list data -->
  <user-list
    v-for="user in users"
    :key="user.id"
    :id="user.id"
    :firstname="user.firstname"
    :lastname="user.lastname"
    :gender="user.gender"
    :skill="user.skill"
    @deleteUser="deleteUser"
    @updateUser="getDataById"
  ></user-list>
  <!-- end: user list data -->
</template>
<script>
import UserForm from "./UserForm.vue";
import UserList from "./UserList.vue";
import axios from "axios";
export default {
  components: { UserForm, UserList },
  data() {
    return {
      users: [],
      updatedUser: {},
    };
  },
  watch: {},
  /**
   * @description 'provide method to child (UserForm.vue)'
   */
  provide() {
    return {
      getUserData: this.getData,
    };
  },
  methods: {
    /**
     * @description 'get data from database'
     */
    getData() {
      axios
        .get(
          "https://vue-http-requests-9c690-default-rtdb.firebaseio.com/user.json"
        )
        .then((res) => {
          return res.data;
        })
        .then((response) => {
          const users = [];
          this.users = [];
          for (const id in response) {
            users.push({
              id: id,
              firstname: response[id].firstname,
              lastname: response[id].lastname,
              gender: response[id].gender,
              skill: response[id].skill,
            });
            this.users = users;
            console.log(this.users);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @description 'delete user'
     * @param userId
     */
    deleteUser(userId) {
      axios
        .delete(
          `https://vue-http-requests-9c690-default-rtdb.firebaseio.com/user/${userId}.json`
        )
        .then((response) => {
          if (response) {
            this.getData();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @description 'get particular user details'
     * @param userId
     */
    getDataById(userId) {
      axios
        .get(
          `https://vue-http-requests-9c690-default-rtdb.firebaseio.com/user/${userId}.json`
        )
        .then((res) => {
          const data = res.data;
          this.updatedUser = { userId, data };
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
