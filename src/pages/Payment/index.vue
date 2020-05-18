<template>
  <div>
    <payment-template :dataStepper="dataStep" :currentStep="currentStepPayment">
      <template v-slot:back>
        <BackButton text="Back to cart" />
      </template>
      <template v-slot:payment>
        <Step1 :data="form" />
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
import Step1 from "@/components/organism/Step1_Payment";
import { mapState } from "vuex";

export default {
  components: {
    PaymentTemplate,
    BackButton,
    Step1,
  },

  data() {
    return {
      form: {
        details: {
          name: "",
          phone_number: "",
          delivery_address: "",
          dropshipper_name: "",
          dropshipper_phone_number: "",
          isDropshipper: "",
        },
        shipment: {},
      },
    };
  },

  computed: {
    ...mapState("Payment", ["currentStepPayment"]),
  },
};
</script>
