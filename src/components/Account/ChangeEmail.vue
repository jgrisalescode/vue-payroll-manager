<template>
  <div>
    <form class="ui form change-email">
      <div class="two fields">
        <div class="field">
          <input class="field" type="email" placeholder="New email" />
        </div>
        <div class="field">
          <input type="password" placeholder="Current password" />
        </div>
      </div>
      <button type="submit" class="ui button primary">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CahngeEmail",
};
</script>

<style lang="scss" scoped>
.ui.form.change-email {
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