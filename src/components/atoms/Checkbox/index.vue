<template>
  <label class="a-checkbox">
    <input
      type="checkbox"
      :checked="!!value"
      @change="updateValue($event.target.checked)"
    />
    <div class="a-checkbox__checkmark">
      <img
        src="@/assets/check.svg"
        alt="check"
        class="icon--check"
        v-show="value"
      />
    </div>
    <p class="a-checkbox__label">{{ label }}</p>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Default Label",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
