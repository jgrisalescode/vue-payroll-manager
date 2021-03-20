<template>
  <div>
    <form class="ui form change-name" @submit.prevent="onChangeName">
      <input
        type="text"
        placeholder="Fullname"
        v-model="name"
        :class="{ error: formError }"
      />
      <button type="submit" class="ui button primary">Update</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";

export default {
  name: "ChangeName",

  setup(props) {
    let name = ref("");
    let formError = ref(false);

    const schemaForm = Yup.object().shape({
      name: Yup.string().min(6, true).required(true),
    });

    const onChangeName = async () => {
      formError.value = false;
      console.log("Changing name...");
      console.log("New name: " + name.value);

      try {
        await schemaForm.validate({ name: name.value }, { abortEarly: false });
        console.log("Data OK!!!✔");
      } catch (err) {
        console.log("Data ERROR !!!❌");
        err.inner.forEach((error) => {
          formError.value = error.message;
        });
      }
    };

    return {
      name,
      onChangeName,
      formError,
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