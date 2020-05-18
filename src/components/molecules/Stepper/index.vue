<template>
  <div class="m-stepper">
    <number-stepper
      v-for="step in dataStepper"
      :key="step.id"
      :number="step.id"
      :text="step.text"
      :isActive="isActive(step)"
      :isHasIcon="!isHasIcon(step)"
      class="m-stepper__number"
    ></number-stepper>
  </div>
</template>

<script>
import NumberStepper from "@/components/atoms/NumberStepper";
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

  components: {
    NumberStepper,
  },

  methods: {
    isActive(step) {
      return step.id === this.currentStep;
    },

    isHasIcon(step) {
      return step.id === this.dataStepper.length;
    },
  },
};
</script>
