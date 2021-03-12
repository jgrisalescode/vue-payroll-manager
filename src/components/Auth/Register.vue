<template>
  <div class="register">
    <h1>Create account</h1>
    <form class="ui form" @submit.prevent="onRegister()">
      <div class="field">
        <input
          type="text"
          placeholder="Email"
          v-model="formData.email"
          :class="{ error: formError.email }"
        />
      </div>
      <div class="field">
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
          :class="{ error: formError.password }"
        />
      </div>
      <div class="field">
        <input
          type="password"
          placeholder="Repeat password"
          v-model="formData.repeatPassword"
          :class="{ error: formError.repeatPassword }"
        />
      </div>
      <button type="submit" class="ui button positive fluid">Register</button>
    </form>
    <p @click="changeForm">Login</p>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";

export default {
  name: "Register",

  props: {
    changeForm: Function,
  },

  setup(props) {
    let formData = {};
    let formError = ref({});

    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
      repeatPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("password")], true),
    });

    const onRegister = async () => {
      formError.value = {};

      try {
        await schemaForm.validate(formData, { abortEarly: false });
        console.log("Alles Gut");
      } catch (err) {
        err.inner.forEach((error) => {
          formError.value[error.path] = error.message;
        });
      }
    };

    return {
      formData,
      formError,
      onRegister,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  background-color: white;
  padding: 30px;
  box-shadow: 0px 0px 38px -5px rgba(0, 0, 0, 0.45);
  width: 400px;
  border-radius: 10px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  form {
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }

  p {
    text-align: center;
    margin-top: 30px;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}
</style>