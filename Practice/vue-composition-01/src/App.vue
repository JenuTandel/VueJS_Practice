<template>
  <h2>{{ uname }}</h2>
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
  <h3>{{ number }}</h3>
  <input type="text" placeholder="Enter your Lastname" @input="setLastname" />
  <button type="button" @click="setAge">Add Age</button>
  <button type="button" @click="setNumber">Add</button>
</template>

<script setup>
import { reactive, ref, computed, watch } from "vue";
// const uname = ref("Jinal");
const number = ref(1);
const user = reactive({
  firstname: "Jinal",
  lastname: "Tandel",
  age: 26,
});
function setAge() {
  user.age = 27;
}
function setNumber() {
  number.value++;
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
// function setFirstname(event) {
//   user.firstname = event.target.value;
// }
function setLastname(event) {
  user.lastname = event.target.value;
}
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
