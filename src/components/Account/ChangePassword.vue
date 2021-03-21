<template>
  <div>
    <form class="ui form change-password">
      <div class="three fields">
        <div class="field">
          <input type="password" placeholder="Current password" />
        </div>
        <div class="field">
          <input type="password" placeholder="New password" />
        </div>
        <div class="field">
          <input type="password" placeholder="Repeat new password" />
        </div>
      </div>
      <button class="ui button primary" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
};
</script>

<style lang="scss" scoped>
.ui.form.change-password {
  text-align: center;

  input.error {
    border-color: #faa;
    background-color: #ffeded;
  }

  .ui.button {
    margin: 20px 0 0 0;
  }
}
</style>