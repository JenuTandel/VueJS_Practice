<template>
  <div class="d-flex justify-content-center mt-3">
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-dialog :show="!!error" title="Error" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <form
      id="login-form"
      class="border rounded p-3"
      @submit.prevent="submitForm"
    >
      <h2>Login/ SignUp</h2>
      <div class="mb-3">
        <input
          type="text"
          placeholder="Enter your EmailID"
          id="email"
          class="form-control"
          v-model.trim="email.val"
          @blur="clearValidity('email')"
        />
        <p v-if="!email.isValid" class="text-danger">Enter the valid emailID</p>
      </div>
      <div class="mb-3">
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          class="form-control"
          autocomplete
          v-model.trim="password.val"
          @blur="clearValidity('password')"
        />
        <p v-if="!password.isValid" class="text-danger">
          password must be above six chanracter length
        </p>
      </div>
      <div>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserAuth",
  data() {
    return {
      isLoading: false,
      error: null,
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      mode: "login",
      formIsValid: true,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "SignUp";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "SignUp instead";
      } else {
        return "Login instead";
      }
    },
  },
  methods: {
    handleError() {
      this.error = null;
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.formIsValid = false;
        this.email.isValid = false;
      }
      if (this.password.val === "" || this.password.val.length < 6) {
        this.formIsValid = false;
        this.password.isValid = false;
      }
    },
    async submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", {
            email: this.email.val,
            password: this.password.val,
          });
          const redirectUrl = "/" + (this.$route.query.redirect || "coaches");
          this.$router.replace(redirectUrl);
        } else {
          await this.$store.dispatch("signUp", {
            email: this.email.val,
            password: this.password.val,
          });
        }
      } catch (err) {
        this.error =
          err.message || "Failed to authenticate!!! check your login data";
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "SignUp";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style scoped>
#login-form {
  width: 400px;
}
</style>
