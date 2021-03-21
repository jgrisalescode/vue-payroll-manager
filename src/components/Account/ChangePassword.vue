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
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <button class="ui button primary" type="submit" :class="{ loading }">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../../utils/firebase";
import { reauthenticate } from "../../utils/firebaseFunctions";
import * as Yup from "yup";

export default {
  name: "ChangePassword",

  setup(props) {
    let formData = {};
    let formError = ref({});
    let loading = ref(false);
    let errorMessage = ref("");

    const schemaForm = Yup.object().shape({
      currentPassword: Yup.string().required(true),
      newPassword: Yup.string().required(true),
      repeatNewPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("newPassword")], true),
    });

    const onChangePassword = async () => {
      loading.value = true;
      formError.value = {};
      errorMessage.value = "";
      try {
        await schemaForm.validate(formData, { abortEarly: false });
        // Request to Firebase
        try {
          const { currentPassword, newPassword } = formData;
          await reauthenticate(currentPassword);
          await auth.currentUser.updatePassword(newPassword);
          await auth.signOut();
        } catch (error) {
          console.log(error);
          errorMessage.value = error.message;
        }
      } catch (err) {
        err.inner.forEach((error) => {
          formError.value[error.path] = error.message;
        });
      }
      loading.value = false;
    };

    return {
      formData,
      formError,
      onChangePassword,
      loading,
      errorMessage,
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