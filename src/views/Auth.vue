<template>
  <div class="auth">
    <div class="ui message">
      <div class="header">Yo can test the app with</div>
      <ul class="list">
        <li class="text-primary">User: user@example.com</li>
        <li>Password: 123456</li>
      </ul>
    </div>
    <Login v-if="showLogin" :changeForm="changeForm" />
    <Register v-if="!showLogin" :changeForm="changeForm" />
  </div>
</template>

<script>
import { ref } from "vue";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

export default {
  name: "Auth",

  components: {
    Login,
    Register,
  },

  setup(props) {
    let showLogin = ref(true);

    const changeForm = () => {
      showLogin.value = !showLogin.value;
    };

    return {
      showLogin,
      changeForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(4, 78, 177);
  background: linear-gradient(
    0deg,
    rbga(4, 78, 157, 1) 0%,
    rgba(0, 174, 255, 1) 100%
  );
}
</style>