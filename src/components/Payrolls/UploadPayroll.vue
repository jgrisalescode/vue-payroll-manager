<template>
  <div class="upload-payroll">
    <button class="ui button primary" @click="showCloseForm">
      New payroll
    </button>
    <form
      class="ui form upload-payroll__form"
      :class="{ open: showForm }"
      @submit.prevent="handleSubmit"
    >
      <div class="field">
        <!-- Custom a input file using a label id matches 😅-->
        <label for="file" class="ui icon button">
          <i class="file icon"></i>
          Select payroll
        </label>
        <input
          type="file"
          id="file"
          style="display: none"
          @change="uploadFile"
        />
      </div>
      <div class="field">
        <div class="ui calendar">
          <div class="ui input left icon">
            <input type="date" @change="changeDate" :value="date" />
          </div>
        </div>
      </div>
      <button class="ui button positive">Upload payroll</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "UploadPayroll",

  setup(props) {
    let showForm = ref(false);
    let file = ref(null);
    let date = ref(null);
    let loading = ref(false);
    let error = ref(null);

    const showCloseForm = () => {
      showForm.value = !showForm.value;
    };

    const uploadFile = (e) => {
      const fileTemp = e.target.files[0];
      if (fileTemp.type === "application/pdf") {
        file.value = fileTemp;
      }
    };

    const changeDate = (e) => {
      date.value = e.target.value;
    };

    const handleSubmit = () => {
      console.log("Uploading payroll");
      console.log("File -> ", file.value);
      console.log("Date ->", date.value);
    };

    return {
      showForm,
      showCloseForm,
      uploadFile,
      changeDate,
      handleSubmit,
      file,
      date,
      loading,
      error,
    };
  },
};
</script>

<style lang="scss" scoped>
.upload-payroll {
  > .ui.button.primary {
    margin-bottom: 30px;
  }
  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;

    &.open {
      height: 200px;
    }
  }
}
</style>