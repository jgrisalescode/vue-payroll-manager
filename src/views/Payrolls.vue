<template>
  <BasicLayout>
    <div class="payrolls">
      <h1>My payrolls</h1>
      <UploadPayroll />
      <PayrollList :payrolls="payrolls" />
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth, db } from "../utils/firebase";
import BasicLayout from "../layouts/BasicLayout";
import UploadPayroll from "../components/Payrolls/UploadPayroll";
import PayrollList from "../components/Payrolls/PayrollList";

export default {
  name: "Payrolls",

  components: {
    BasicLayout,
    UploadPayroll,
    PayrollList,
  },

  setup(props) {
    let payrolls = ref(null);

    const getPyrolls = async () => {
      const response = await db
        .collection(auth.currentUser.uid)
        .orderBy("date", "desc")
        .get();

      const result = [];

      response.docs.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        result.push(data);
      });
      payrolls.value = result;
    };

    onMounted(() => {
      getPyrolls();
    });

    return {
      payrolls,
    };
  },
};
</script>

<style lang="scss" scoped>
.payrolls {
  margin: 50px 0 0 0;
  text-align: center;
}
</style>