<template>
  <div>
    <payment-template :dataStepper="dataStep" :currentStep="currentStepPayment">
      <template v-slot:back>
        <BackButton />
      </template>
      <template v-slot:payment>
        <h1 class="text--header">Delivery details</h1>
      </template>
      <template v-slot:summary>
        <h1 class="text--title">Summary</h1>
      </template>
    </payment-template>
  </div>
</template>

<script>
import PaymentTemplate from "@/components/templates/Payment";
import BackButton from "@/components/atoms/BackButton";
import { mapState } from "vuex";

export default {
  components: {
    PaymentTemplate,
    BackButton,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState("Payment", ["currentStepPayment"]),
  },
};
</script>
