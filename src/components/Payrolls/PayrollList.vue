<template>
  <div class="payroll-list">
    <p class="payroll-list__not-found" v-if="payrolls?.length === 0">
      There are not payrolls, upload the firstone
    </p>
    <div
      class="payroll-list__payroll"
      v-for="payroll in payrolls"
      :key="payroll.id"
    >
      <p>{{ formatDate(payroll.dateString) }}</p>
      <div class="action">
        <a :href="payroll.payrollUrl" class="ui button positive" target="_blank"
          >Download</a
        >
        <button class="ui button red" @click="deletePayroll(payroll.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
// import "moment/locale/de";
import { auth, db } from "../../utils/firebase";

export default {
  name: "PayrollList",

  props: {
    payrolls: Array,
    getPayrolls: Function,
  },

  setup(props) {
    const formatDate = (date) => {
      return moment(date).format("MMMM [of] YYYY");
    };

    const deletePayroll = async (id) => {
      try {
        await db.collection(auth.currentUser.uid).doc(id).delete();
        props.getPayrolls();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      formatDate,
      deletePayroll,
    };
  },
};
</script>

<style lang="scss" scoped>
.payroll-list {
  &__not-found {
    text-align: center;
    font-size: 20px;
  }

  &__payroll {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
  }

  p {
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>