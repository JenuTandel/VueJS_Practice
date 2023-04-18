<template>
  <form @submit.prevent="submitForm" class="mt-3">
    <div class="mb-3">
      <input
        type="email"
        placeholder="Enter your emailId"
        id="email"
        class="form-control"
        v-model="email.val"
        @blur="clearValidity('email')"
      />
      <p class="text-danger" v-if="!email.isValid">
        Should be enter an emailId
      </p>
    </div>
    <div class="mb-3">
      <textarea
        rows="4"
        id="message"
        class="form-control"
        placeholder="write your query or message"
        v-model="message.val"
        @blur="clearValidity('message')"
      ></textarea>
      <p class="text-danger" v-if="!message.isValid">Write any message</p>
    </div>
    <div>
      <base-button>Send</base-button>
    </div>
  </form>
</template>
<script>
export default {
  name: "CoachContact",
  data() {
    return {
      email: {
        val: "",
        isValid: true,
      },
      message: {
        val: "",
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
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === "") {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      this.$store.dispatch("requests/contactCoach", {
        email: this.email.val,
        message: this.message.val,
        coachId: this.$route.params.id,
      });
      this.$router.replace("/requests");
    },
  },
};
</script>
<style></style>
