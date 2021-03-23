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
          <span v-if="file">({{ file.name }})</span>
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
      <button class="ui button positive" :class="{ loading }">
        Upload payroll
      </button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { auth, storage, db } from "../../utils/firebase";

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
      error.value = null;

      if (fileTemp.type === "application/pdf") {
        file.value = fileTemp;
      } else {
        error.value = "File not valid.";
      }
    };

    const changeDate = (e) => {
      date.value = e.target.value;
    };

    const handleSubmit = async () => {
      if (file.value && date.value) {
        loading.value = true;
        try {
          const fileName = uuidv4();
          await storage
            .ref(auth.currentUser.uid)
            .child(`${fileName}.pdf`)
            .put(file.value);

          const payrollUrl = await storage
            .ref(`${auth.currentUser.uid}/${fileName}.pdf`)
            .getDownloadURL();

          await db.collection(auth.currentUser.uid).add({
            payrollUrl,
            date: new Date(date.value),
            dateString: date.value,
          });
        } catch (error) {
          console.log(error);
        }

        // Cleaning after
        loading.value = false;
        file.value = null;
        date.value = null;
        showForm.value = false;
        error.value = null;
        document.getElementById("file").value = "";
      } else {
        error.value = "Upload a payrroll and asign a date for it.";
      }
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