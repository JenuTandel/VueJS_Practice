<template>
  <div class="d-flex flex-column align-items-center">
    <h4>Coach Registration</h4>
    <form
      id="coachform"
      class="p-3 border rounded"
      @submit.prevent="submitForm"
    >
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your firstname"
          id="firstname"
          v-model.trim="firstName.val"
          @blur="clearValidity('firstName')"
        />
        <p v-if="!firstName.isValid" class="text-danger">
          Firstname must not be empty
        </p>
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your lastname"
          id="lastname"
          v-model.trim="lastName.val"
          @blur="clearValidity('lastName')"
        />
        <p v-if="!lastName.isValid" class="text-danger">
          Lastname must not be empty
        </p>
      </div>
      <div class="mb-3">
        <input
          type="number"
          class="form-control"
          placeholder="Enter your rate per hour"
          id="rate"
          v-model.number="rate.val"
          @blur="clearValidity('rate')"
        />
        <p v-if="!rate.isValid" class="text-danger">
          Rate should be greater than 0
        </p>
      </div>

      <div class="mb-3">
        <div class="form-control">
          <div>
            <input
              type="checkbox"
              id="frontend"
              value="frontend"
              v-model="areas.val"
              @blur="clearValidity('areas')"
            />
            <label for="frontend" class="ms-2">FrontEnd Development</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="backend"
              value="backend"
              v-model="areas.val"
              @blur="clearValidity('areas')"
            />
            <label for="backend" class="ms-2">BackEnd Development</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="database"
              value="database"
              v-model="areas.val"
              @blur="clearValidity('areas')"
            />
            <label for="database" class="ms-2">Database Management</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="security"
              value="security"
              v-model="areas.val"
              @blur="clearValidity('areas')"
            />
            <label for="security" class="ms-2">Security</label>
          </div>
        </div>
        <p v-if="!areas.isValid" class="text-danger">Choose atleast one area</p>
      </div>
      <base-button>Register</base-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CoachForm",
  emit: ["save-data"],
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit("save-data", formData);
      (this.firstName = ""),
        (this.lastName = ""),
        (this.rate = ""),
        (this.areas = []);
    },
  },
};
</script>
<style scoped>
#coachform {
  width: 400px;
}
</style>
