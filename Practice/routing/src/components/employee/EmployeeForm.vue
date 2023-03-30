<template>
  <div class="d-flex justify-content-center">
    <form class="employee-form p-3 border rounded" @submit.prevent="onSave">
      <h2>{{ title }} Employee</h2>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your Name"
        class="form-control mb-3"
        v-model="enteredName"
      />
      <div class="form-control mb-3">
        <label for="gender">Gender: </label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          class="mx-2"
          v-model="selectedGender"
        /><label for="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          class="mx-2"
          v-model="selectedGender"
        /><label for="female">Female</label>
      </div>
      <input
        type="date"
        name="doj"
        id="doj"
        class="form-control mb-3"
        v-model="selectedDate"
      />
      <input
        type="number"
        name="salary"
        id="salary"
        placeholder="Enter your Salary"
        class="form-control mb-3"
        v-model="enteredSalary"
      />
      <button type="submit" class="btn btn-success me-3">Save</button>
      <button type="reset" class="btn btn-light">Reset</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    // console.log(this.$route.query);
    // console.log(this.$route.params);
    this.empId = this.$route.params.empid;
    if (this.empId) {
      this.title = "Edit";
      this.getEmployeeById();
    } else {
      this.title = "Add";
    }
  },
  // watch: {
  //   empId() {
  //     this.empId = ;
  //   },
  // },
  data() {
    return {
      enteredName: "",
      selectedGender: "",
      selectedDate: "",
      enteredSalary: "",
      title: "",
      empId: null,
    };
  },
  methods: {
    onSave() {
      if (this.empId) {
        console.log(this.empId);
        this.updateEmployeeData();
      } else {
        axios
          .post("http://localhost:3000/employeeData", {
            empName: this.enteredName,
            gender: this.selectedGender,
            doj: this.selectedDate,
            empsalary: this.enteredSalary,
          })
          .then((res) => {
            console.log(res);
            (this.enteredName = ""),
              (this.selectedGender = ""),
              (this.selectedDate = ""),
              (this.enteredSalary = "");
            this.$router.push("employee-list");
          })
          .catch((err) => console.log(err));
      }
    },
    getEmployeeById() {
      axios
        .get(`http://localhost:3000/employeeData/${this.empId}`)
        .then((res) => {
          return res.data;
        })
        .then((res) => {
          (this.enteredName = res.empName),
            (this.selectedGender = res.gender),
            (this.selectedDate = res.doj),
            (this.enteredSalary = res.empsalary);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateEmployeeData() {
      axios
        .patch(`http://localhost:3000/employeeData/${this.empId}`, {
          empName: this.enteredName,
          gender: this.selectedGender,
          doj: this.selectedDate,
          empsalary: this.enteredSalary,
        })
        .then((res) => {
          console.log(res);
          (this.enteredName = ""),
            (this.selectedGender = ""),
            (this.selectedDate = ""),
            (this.enteredSalary = "");
          this.$router.push("../employee-list");
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>
<style scoped>
.employee-form {
  width: 400px;
}
</style>
