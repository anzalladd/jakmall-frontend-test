<template>
  <div class="a-number-stepper">
    <p
      :class="isActive ? 'number--active' : 'number--not-active'"
      class="a-number-stepper__number"
    >
      {{ number }}
    </p>
    <p class="a-number-stepper__text">{{ text }}</p>
    <span class="a-number-stepper__icon" v-if="isHasIcon">
      <img :src="require('@/assets/arrow_right.svg')" alt="arrow" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      default: false,
      type: Boolean,
    },
    number: {
      default: 1,
      type: Number,
    },
    text: {
      default: "Test",
      type: String,
    },
    isHasIcon: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
