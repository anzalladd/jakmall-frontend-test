<template>
  <div class="p-payment">
    <payment-template :dataStepper="dataStep" :currentStep="currentStepPayment">
      <template v-slot:back>
        <BackButton text="Back to cart" />
      </template>
      <template v-slot:payment>
        <Step1
          :data="form.details"
          @updateValueCheckbox="(e) => updateDropShipper(e)"
          ref="step1"
        />
      </template>
      <template v-slot:summary>
        <div class="p-payment__summary">
          <div class="p-payment__summary__item">
            <h1 class="text--title">Summary</h1>
            <p class="text--regular u-mt-10">
              {{ renderTextItems(form.details.items) }}
            </p>
          </div>
          <div class="p-payment__summary__cost">
            <div class="payment--wrapper">
              <p class="payment--wrapper__title">Cost of goods</p>
              <p class="payment--wrapper__value">
                {{ currencyFilter(form.details.cost) }}
              </p>
            </div>
            <div class="payment--wrapper">
              <p class="payment--wrapper__title">Dropshipping Fee</p>
              <p class="payment--wrapper__value">
                {{ currencyFilter(form.details.dropshipperFee) }}
              </p>
            </div>
            <div class="payment--wrapper">
              <p class="payment--wrapper__title big--title">Total</p>
              <p class="payment--wrapper__value big--title">
                {{ currencyFilter(totalCost) }}
              </p>
            </div>
            <Button
              text="Pay with e-Wallet"
              color="#FF8A00"
              isDark
              :onClick="() => submitForm()"
            />
          </div>
        </div>
      </template>
    </payment-template>
  </div>
</template>

<script>
import PaymentTemplate from "@/components/templates/Payment";
import BackButton from "@/components/atoms/BackButton";
import Step1 from "@/components/organism/Step1_Payment";
import Button from "@/components/atoms/Button";
import { mapState } from "vuex";

export default {
  components: {
    PaymentTemplate,
    BackButton,
    Step1,
    Button,
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
          isDropshipper: false,
          dropshipperFee: 0,
          items: 10,
          cost: 500000,
        },
        shipment: {
          selectedShipment: 0,
          payment: 0,
        },
      },
    };
  },

  computed: {
    ...mapState("Payment", ["currentStepPayment"]),

    totalCost() {
      return (
        this.form.details.dropshipperFee +
        this.form.details.cost +
        this.form.shipment.payment
      );
    },
  },

  methods: {
    renderTextItems(items) {
      if (items > 1) {
        return `${items} items purchased`;
      } else {
        return `${items} item purchased`;
      }
    },

    currencyFilter(value) {
      const formatter = new Intl.NumberFormat("id", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });

      const number = formatter.format(value);

      return number
        .replace(".", ",")
        .replace("Rp", "")
        .trim();
    },

    updateDropShipper(e) {
      if (!e) {
        this.form.details.dropshipperFee = 0;
        this.form.details.dropshipper_name = "";
        this.form.details.dropshipper_phone_number = "";
      } else {
        this.form.details.dropshipperFee = 5900;
      }
    },

    submitForm() {
      this.$refs.step1.$v.data.$touch();

      if (this.$refs.step1.$v.data.$pending || this.$refs.step1.$v.data.$error)
        return;

      console.log("wkwk");
    },
  },
};
</script>
