<template>
  <div class="p-payment">
    <payment-template :dataStepper="dataStep" :currentStep="currentStepPayment">
      <template v-slot:back>
        <BackButton text="Back to cart" v-if="currentStepPayment == 1" />
        <BackButton
          text="Back to Delivery"
          v-if="currentStepPayment == 2"
          :onClick="() => backToDelivery()"
        />
      </template>
      <template v-slot:payment>
        <Step1
          :data="form.details"
          @updateValueCheckbox="(e) => updateDropShipper(e)"
          ref="step1"
          v-if="currentStepPayment === 1"
        />
        <Step2
          :data="form.shipment"
          v-if="currentStepPayment === 2"
          :itemsShipment="dataShipment"
          :selectedShipment="form.shipment.selectedShipment"
          :onChangeShipment="(id) => onChangeShipment(id)"
          :itemsPayment="dataPayment"
          :selectedPayment="form.shipment.selectedPayment"
          :onChangePayment="(id) => onChangePayment(id)"
        />
        <Step3
          v-if="currentStepPayment === 3"
          :selectedShipment="form.shipment.selectedShipment"
          :onClickHomePage="() => onClickHomePage()"
        />
      </template>
      <template v-slot:summary>
        <div class="p-payment__summary">
          <div class="p-payment__summary__item">
            <h1 class="text--title">Summary</h1>
            <p class="text--regular u-mt-10">
              {{ renderTextItems(form.details.items) }}
            </p>
            <div
              class="p-payment__summary__item__shipment"
              v-if="currentStepPayment > 1"
            >
              <p class="text--regular">Delivery estimation</p>
              <p class="text--16-success-medium u-mt-6">
                {{ dataShipment[form.shipment.selectedShipment].estimate }} by
                {{ dataShipment[form.shipment.selectedShipment].title }}
              </p>
            </div>
            <div
              class="p-payment__summary__item__shipment"
              v-if="currentStepPayment > 1"
            >
              <p class="text--regular">Payment method</p>
              <p class="text--16-success-medium u-mt-6">
                {{ dataPayment[form.shipment.selectedPayment].title }}
              </p>
            </div>
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
            <div class="payment--wrapper" v-if="currentStepPayment > 1">
              <p class="payment--wrapper__title">
                <b> {{ dataShipment[form.shipment.selectedShipment].title }}</b>
                shipment
              </p>
              <p class="payment--wrapper__value">
                {{
                  currencyFilter(
                    dataShipment[form.shipment.selectedShipment].price
                  )
                }}
              </p>
            </div>
            <div class="payment--wrapper">
              <p class="payment--wrapper__title big--title">Total</p>
              <p class="payment--wrapper__value big--title">
                {{ currencyFilter(totalCost) }}
              </p>
            </div>
            <Button
              text="Continue to Payment"
              color="#FF8A00"
              isDark
              :onClick="() => submitForm()"
              v-if="currentStepPayment != 3"
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
import Step2 from "@/components/organism/Step2_Payment";
import Step3 from "@/components/organism/Step3_Payment";
import Button from "@/components/atoms/Button";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    PaymentTemplate,
    BackButton,
    Step1,
    Step2,
    Step3,
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
          selectedPayment: 0,
        },
      },
    };
  },

  computed: {
    ...mapState("Payment", ["currentStepPayment"]),

    totalCost() {
      let shipmentCost = 0;
      if (this.currentStepPayment > 1) {
        shipmentCost = this.dataShipment[this.form.shipment.selectedShipment]
          .price;
      }
      return (
        this.form.details.dropshipperFee + this.form.details.cost + shipmentCost
      );
    },
  },

  created() {
    let form = JSON.parse(localStorage.getItem("form"));
    let currentStep = parseInt(localStorage.getItem("currentStepPayment"));
    if (form) {
      this.form = form;
    }
    if (currentStep) {
      this.goToPage(currentStep);
    }
  },

  watch: {
    form: {
      handler(value) {
        localStorage.setItem("form", JSON.stringify(value));
      },
      deep: true,
    },
    currentStepPayment(value) {
      localStorage.setItem("currentStepPayment", value);
    },
  },

  methods: {
    ...mapActions("Payment", ["incrementStep", "decrementStep", "goToPage"]),

    renderTextItems(items) {
      if (items > 1) {
        return `${items} items purchased`;
      } else {
        return `${items} item purchased`;
      }
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
      if (this.currentStepPayment === 1) {
        this.$refs.step1.$v.data.$touch();
        if (
          this.$refs.step1.$v.data.$pending ||
          this.$refs.step1.$v.data.$error
        )
          return;
      }

      this.incrementStep();
    },

    backToDelivery() {
      this.decrementStep();
    },

    onChangeShipment(id) {
      this.form.shipment.selectedShipment = id;
    },

    onChangePayment(id) {
      this.form.shipment.selectedPayment = id;
    },

    onClickHomePage() {
      localStorage.removeItem("form");
      this.form = {
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
          selectedPayment: 0,
        },
      };
      this.goToPage(1);
    },
  },
};
</script>
