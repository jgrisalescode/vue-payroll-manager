<template>
  <BasicLayout>
    <div class="payrolls">
      <h1>My payrolls</h1>
      <UploadPayroll />
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";
import UploadPayroll from "../components/Payrolls/UploadPayroll";

export default {
  name: "Payrolls",
  components: {
    BasicLayout,
    UploadPayroll,
  },
};
</script>

<style lang="scss" scoped>
.payrolls {
  margin: 50px 0 0 0;
  text-align: center;
}
</style>