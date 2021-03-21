<template>
  <div>
    <form class="ui form change-password" @submit.prevent="onChangePassword">
      <div class="three fields">
        <div class="field">
          <input
            type="password"
            placeholder="Current password"
            v-model="formData.currentPassword"
            :class="{ error: formError.currentPassword }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="New password"
            v-model="formData.newPassword"
            :class="{ error: formError.newPassword }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Repeat new password"
            v-model="formData.repeatNewPassword"
            :class="{ error: formError.repeatNewPassword }"
          />
        </div>
      </div>
      <button class="ui button primary" type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";

export default {
  name: "ChangePassword",

  setup(props) {
    let formData = {};
    let formError = ref({});

    const schemaForm = Yup.object().shape({
      currentPassword: Yup.string().required(true),
      newPassword: Yup.string().required(true),
      repeatNewPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("newPassword")], true),
    });

    const onChangePassword = async () => {
      formError.value = {};
      try {
        await schemaForm.validate(formData, { abortEarly: false });
        console.log("Alles gut");
      } catch (err) {
        err.inner.forEach((error) => {
          formError.value[error.path] = error.message;
        });
      }
    };

    return {
      formData,
      formError,
      onChangePassword,
    };
  },
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