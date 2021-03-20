<template>
  <div>
    <form class="ui form change-email" @submit.prevent="onChangeEmail">
      <div class="two fields">
        <div class="field">
          <input
            class="field"
            type="email"
            placeholder="New email"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Current password"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>
      </div>
      <p v-if="messageError">{{ messageError }}</p>
      <button
        type="submit"
        class="ui button primary"
        :class="{ loading: loading }"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
import { reauthenticate } from "../../utils/firebaseFunctions";

export default {
  name: "CahngeEmail",

  setup(props) {
    let formData = {};
    let formError = ref({});
    let messageError = ref("");
    let loading = ref(false);

    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    });

    const onChangeEmail = async () => {
      formError.value = {};
      messageError.value = "";
      try {
        await schemaForm.validate(formData, { abortEarly: false });
        // Reques to Firebase
        try {
          const { email, password } = formData;
          await reauthenticate(password);
          console.log("Reauth OK");
        } catch (error) {
          console.log(error);
          messageError.value = error.message;
        }
      } catch (err) {
        err.inner.forEach((error) => {
          formError.value[error.path] = error.message;
        });
      }
    };

    return {
      formData,
      formError,
      messageError,
      onChangeEmail,
      loading,
    };
  },
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