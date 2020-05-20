<template>
  <div class="o-step-payment">
    <div class="o-step-payment__header">
      <h1 class="text--header">Shipment</h1>
    </div>
    <form class="o-step-payment__form">
      <div class="o-step-payment__form__step-2">
        <ListItems
          :items="itemsShipment"
          @onChange="onChangeShipment"
          :selected="selectedShipment"
        />
      </div>
    </form>
    <div class="o-step-payment__header u-mt-60">
      <h1 class="text--header">Payment</h1>
    </div>
    <form class="o-step-payment__form">
      <div class="o-step-payment__form__step-2">
        <ListItems
          :items="itemsPayment"
          @onChange="onChangePayment"
          :selected="selectedPayment"
        />
      </div>
    </form>
  </div>
</template>

<script>
import ListItems from "@/components/atoms/ListItems";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    itemsShipment: {
      type: Array,
      default: () => [],
    },
    onChangeShipment: {
      type: Function,
      default: () => {},
    },
    selectedShipment: {
      type: Number,
      default: 0,
    },
    itemsPayment: {
      type: Array,
      default: () => [],
    },
    onChangePayment: {
      type: Function,
      default: () => {},
    },
    selectedPayment: {
      type: Number,
      default: 0,
    },
  },

  components: {
    ListItems,
  },
};
</script>
