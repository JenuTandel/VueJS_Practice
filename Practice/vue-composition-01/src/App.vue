<template>
  <!-- <h2>{{ uname }}</h2>
  <h3>{{ number }}</h3> -->
  <user-data
    v-if="number == 1"
    :firstname="user.firstname"
    :lastname="user.lastname"
    :number="number"
    @city="setCity"
  ></user-data>
  <h2>{{ user.age }}</h2>
  <h3>
    {{ user.firstname
    }}<span>
      {{ user.lastname }}
    </span>
  </h3>
  <!-- <input type="text" placeholder="Enter your Firstname" @input="setFirstname" /> -->
  <input
    type="text"
    placeholder="Enter your Firstname"
    v-model="user.firstname"
  />
  <!-- <input type="text" placeholder="Enter your Lastname" @input="setLastname" /> -->
  <input type="text" placeholder="Enter your Lastname" ref="lastnameInput" />
  <button type="button" @click="setLastname">set Lastname</button>
  <button type="button" @click="setAge">Add Age</button>
  <button type="button" @click="setNumber">Add</button>
  <h2>{{ city }}</h2>
</template>

<script setup>
import { reactive, ref, computed, watch, provide } from "vue";
import UserData from "./components/UserData.vue";
// const uname = ref("Jinal");
const lastnameInput = ref(null);
const number = ref(1);
const city = ref(null);
const user = reactive({
  firstname: "",
  lastname: "",
  age: 26,
});
function setCity(z) {
  city.value = z;
}
function setAge() {
  user.age = 27;
}
function setNumber() {
  number.value++;
}
function setLastname() {
  user.lastname = lastnameInput.value.value;
}
setTimeout(() => {
  uname.value = "Jenu";
  user.firstname = "Jenu";
  user.lastname = "Sweet";
}, 3000);

const uname = computed(function () {
  return user.firstname + " " + user.lastname;
});
watch([number, uname], function (newVal, oldVal) {
  console.log(newVal);
  console.log(oldVal);
});
provide("userAge", user.age);
// function setFirstname(event) {
//   user.firstname = event.target.value;
// }
// function setLastname(event) {
//   user.lastname = event.target.value;
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
