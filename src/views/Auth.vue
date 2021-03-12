<template>
  <div>
    <h2>We are in Auth</h2>
    <Login v-if="showLogin" :changeForm="changeForm"/>
    <Register v-if="!showLogin" :changeForm="changeForm"/>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Login from '../components/Auth/Login'
  import Register from '../components/Auth/Register'

  export default {
    name: "Auth",

    components: {
      Login,
      Register
    },

    setup(props) {
      let showLogin = ref(true)

      const changeForm = () => {
        showLogin.value = !showLogin.value
      }
      
      return {
        showLogin,
        changeForm
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>