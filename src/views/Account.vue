<template>
  <div class="account">
    <BasicLayout>
      <h1>Account</h1>
      <div class="account__section">
        <p class="title">Change name (name....)</p>
        <div>FORM</div>
      </div>
    </BasicLayout>
  </div>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";

export default {
  name: "Account",

  components: {
    BasicLayout,
  },
};
</script>

<style lang="scss" scoped>
.account {
  h1 {
    margin: 50px 0px;
    text-align: center;
  }

  &__section {
    position: relative;
    padding: 10px;
    border: 1px solid #16212b;
    padding-top: 25px;
    margin-top: 40px;

    .title {
      position: absolute;
      top: -12px;
      background-color: #16212b;
      color: white;
      padding: 2px 10px;
    }
  }
}
</style>