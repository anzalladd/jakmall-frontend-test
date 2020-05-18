<template>
  <div class="t-wrapper">
    <div class="t-wrapper__main">
      <div class="t-wrapper__main__stepper">
        <Stepper :dataStepper="dataStepper" :currentStep="currentStep" />
      </div>
      <div class="t-wrapper__main__back">
        <slot name="back"></slot>
      </div>
      <div class="t-wrapper__main__wrapper">
        <div class="t-wrapper__main__wrapper__payment">
          <slot name="payment"></slot>
        </div>
        <div class="t-wrapper__main__wrapper__summary">
          <slot name="summary"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "@/components/molecules/Stepper";

export default {
  props: {
    dataStepper: {
      default: () => [],
      type: Array,
    },
    currentStep: {
      default: 1,
      type: Number,
    },
  },

  components: { Stepper },
};
</script>
