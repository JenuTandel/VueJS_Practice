<template>
  <h2 class="text-primary text-center">Registration</h2>
  <div class="d-flex justify-content-center">
    <Form
      id="userform"
      class="border rounded p-3"
      @submit="onSubmit"
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
          type="text"
          name="email"
          id="email"
          class="form-control"
          placeholder="Enter your emailID"
        />
        <ErrorMessage name="email" :class="{ 'text-danger': errors.email }" />
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
      <div class="mb-3">
        <Field name="dob" type="date" id="dob" class="form-control" />
        <ErrorMessage name="dob" :class="{ 'text-danger': errors.dob }" />
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import { DefineComponent, defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      schema: yup.object({
        username: yup
          .string()
          .matches(/^[a-zA-Z]+$/, "Required Alphabets Only")
          .required(),
        email: yup.string().required().email(),
        password: yup
          .string()
          .min(6, "Password should have min 6 character")
          .matches(/^\S*$/, "No space required")
          .required(),
        dob: yup.date().required(),
      }),
    };
  },
  methods: {
    onSubmit(val: any) {
      this.$router.push("login");
    },
  },
});
</script>

<style scoped></style>
