<template>
  <div class="upload-payroll">
    <button class="ui button primary">New payroll</button>
    <form class="ui form upload-payroll__form" @submit.prevent="">
      <div class="field">
        <!-- Custom a input file using a label id matches 😅-->
        <label for="file" class="ui icon button">
          <i class="file icon"></i>
          Select payroll
        </label>
        <input type="file" id="file" style="display: none" />
      </div>
      <div class="field">
        <div class="ui calendar">
          <div class="ui input left icon">
            <input type="date" />
          </div>
        </div>
      </div>
      <button class="ui button positive">Upload payroll</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UploadPayroll",
};
</script>

<style lang="scss" scoped>
.upload-payroll__form {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>