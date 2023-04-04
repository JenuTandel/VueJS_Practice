<template>
  <h2 class="text-primary text-center">Login</h2>
  <div class="d-flex justify-content-center">
    <Form
      id="loginform"
      class="border rounded p-3"
      @submit="onLogin"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div class="mb-3">
        <Field
          type="text"
          name="username"
          id="username"
          class="form-control"
          placeholder="Enter your name"
        />
        <ErrorMessage
          name="username"
          :class="['text-start', { 'text-danger': errors.username }]"
        />
      </div>
      <div class="mb-3">
        <Field
          type="password"
          name="password"
          id="password"
          class="form-control"
          placeholder="Enter your password"
        />
        <ErrorMessage
          name="password"
          :class="{ 'text-danger': errors.password }"
        />
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      temp: "asas",
      schema: yup.object({
        username: yup
          .string()
          .matches(/^[a-zA-Z]+$/, "It contains alphabets only")
          .required(),
        password: yup
          .string()
          .min(6, "Password should have min 6 characters")
          .required(),
      }),
    };
  },
  methods: {
    onLogin() {
      this.$router.push("../home");
    },
  },
});
</script>
