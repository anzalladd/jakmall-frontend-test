<template>
  <button
    :class="['a-button', { dark: isDark }]"
    :style="{ backgroundColor: color }"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Default Text",
    },
    color: {
      type: String,
      default: "#ccc",
    },
    isDark: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
