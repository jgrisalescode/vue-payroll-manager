<template>
  <div class="login">
    <h1>Login</h1>
    <form class="ui form">
      <div class="field">
        <input type="text" placeholder="Email" />
      </div>
      <div class="field">
        <input type="password" placeholder="Password" />
      </div>
      <button type="submit" class="ui button positive fluid">Sign in</button>
    </form>
    <p @click="changeForm()">Create new account</p>
  </div>
</template>

<script>
export default {
  name: "Login",

  props: {
    changeForm: Function,
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