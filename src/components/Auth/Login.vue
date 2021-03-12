<template>
  <div>
    <h2>Login</h2>
    <button @click="changeForm">Create new account</button>
  </div>
</template>

<script>
  export default {
    name: "Login",

    props: {
      changeForm: Function
    }
  }
</script>

<style lang="scss" scoped>

</style>