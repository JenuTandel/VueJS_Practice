<template>
  <div class="d-flex flex-column align-items-center">
    <h2 class="text-center">Employee List</h2>
    <base-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of Joining</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in employeeData" :key="emp.id">
          <td>{{ emp.empName }}</td>
          <td>{{ emp.gender }}</td>
          <td>{{ emp.doj }}</td>
          <td>{{ emp.empsalary }}</td>
          <td>
            <button
              type="button"
              class="btn btn-success me-2"
              @click="$router.push(`employee-form/` + emp.id)"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger me-2"
              @click="deleteEmployee(emp.id)"
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-info"
              @click="
                $router.push({
                  path: `employee-details`,
                  query: {
                    name: emp.empName,
                    gender: emp.gender,
                    doj: emp.doj,
                    salary: emp.empsalary,
                  },
                })
              "
            >
              Details
            </button>
          </td>
        </tr>
      </tbody>
    </base-table>
    <!-- <base-card v-for="emp in employeeData" :key="emp.id">
      <li><span class="fw-bold me-2">Employee Name:</span>{{ emp.empName }}</li>
      <li><span class="fw-bold me-2">Gender:</span>{{ emp.gender }}</li>
      <li><span class="fw-bold me-2">Date Of Joining:</span>{{ emp.doj }}</li>
      <li>
        <span class="fw-bold me-2">Employee Salary:</span>{{ emp.empsalary }}
      </li>
    </base-card> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      employeeData: [],
    };
  },
  methods: {
    getEmployeeList() {
      axios.get("http://localhost:3000/employeeData").then((res) => {
        this.employeeData = res.data;
      });
    },
    deleteEmployee(empId) {
      axios
        .delete(`http://localhost:3000/employeeData/${empId}`)
        .then((res) => {
          console.log(res);
          this.getEmployeeList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getEmployeeList();
  },
};
</script>
<style scoped></style>
