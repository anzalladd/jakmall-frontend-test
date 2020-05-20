<template>
  <div class="o-step-payment-3">
    <div class="o-step-payment-3__order">
      <h1 class="text--header">Thank you</h1>
      <p class="text--regular u-mt-26">Order ID : {{ randomString }}</p>
      <p class="text--regular-opacity u-mt-10">
        Your order will be delivered
        {{ dataShipment[selectedShipment].estimate }} with
        {{ dataShipment[selectedShipment].title }}
      </p>
      <BackButton
        class="u-mt-60"
        text="Go to homepage"
        :onClick="onClickHomePage"
      />
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/atoms/BackButton";
export default {
  props: {
    onClickHomePage: {
      type: Function,
      default: () => {},
    },
    selectedShipment: {
      type: Number,
      required: true,
    },
  },
  components: {
    BackButton,
  },
};
</script>
