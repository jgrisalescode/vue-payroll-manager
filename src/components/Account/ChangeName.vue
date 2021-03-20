<template>
  <div>
    <form class="ui form change-name" @submit.prevent="onChangeName">
      <input
        type="text"
        placeholder="Fullname"
        v-model="name"
        :class="{ error: formError }"
      />
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
import { auth } from "../../utils/firebase";

export default {
  name: "ChangeName",

  setup(props) {
    let name = ref("");
    let formError = ref(false);
    let loading = ref(false);

    const schemaForm = Yup.object().shape({
      name: Yup.string().min(6, true).required(true),
    });

    const onChangeName = async () => {
      formError.value = false;
      loading.value = true;

      try {
        await schemaForm.validate({ name: name.value }, { abortEarly: false });
        // Request to Firebase
        await auth.currentUser.updateProfile({
          displayName: name.value,
        });
        try {
        } catch (error) {
          console.log(error);
        }
      } catch (err) {
        err.inner.forEach((error) => {
          formError.value = error.message;
        });
      }
      loading.value = false;
    };

    return {
      name,
      onChangeName,
      formError,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.form.change-name {
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