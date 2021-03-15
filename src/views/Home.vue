<template>
  <div>
    <h1>We are in Payroll home</h1>
    <button class="ui button" @click="logout()">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { auth } from "../utils/firebase";

export default {
  name: "Home",

  setup(props) {
    const logout = () => {
      auth.signOut();
    };

    return {
      logout,
    };
  },
};
</script>
