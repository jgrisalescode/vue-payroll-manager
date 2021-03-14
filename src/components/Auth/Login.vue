<template>
  <div class="login">
    <h1>Login</h1>
    <form class="ui form" @submit.prevent="onLogin()">
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
      <button type="submit" class="ui button positive fluid">Sign in</button>
    </form>
    <p @click="changeForm()">Create new account</p>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";

export default {
  name: "Login",

  props: {
    changeForm: Function,
  },

  setup(props) {
    let formData = {};
    let formError = ref({});

    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    });

    const onLogin = async () => {
      formError.value = {};
      try {
        await schemaForm.validate(formData, { abortEarly: false });
        console.log("All Ok");
      } catch (err) {
        err.inner.forEach(
          (error) => (formError.value[error.path] = error.message)
        );
      }
    };

    return {
      formData,
      onLogin,
      formError,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  background-color: white;
  padding: 30px;
  box-shadow: 0px 0px 38px -5px rgba($color: #000000, $alpha: 0.45);
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