<template>
  <div class="a-back-btn" @click="onClick">
    <img src="@/assets/arrow_back.svg" alt="back" class="a-back-btn__icon" />
    <p class="a-back-btn__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Dummy Text",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
