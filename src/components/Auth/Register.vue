<template>
  <div>
    <h2>Register</h2>
    <button @click="changeForm">Login</button>
  </div>
</template>

<script>
  export default {
    name: 'Register',

    props: {
      changeForm: Function
    }
  }
</script>

<style lang="scss" scoped>

</style>