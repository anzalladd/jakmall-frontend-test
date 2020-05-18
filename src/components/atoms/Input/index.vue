<template>
  <div class="a-input" :class="inputClasses">
    <label for="a-input__input">{{ text }}</label>
    <input
      type="text"
      v-bind="$attrs"
      id="a-input__input"
      :value="value"
      @input="updateValue($event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <img :src="icon" alt="icon" v-if="isHaveFilled" class="input--icon" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Default Label",
    },
    value: {
      type: String,
      default: "",
    },
    v: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isFocus: false,
      isHaveFilled: false,
    };
  },

  computed: {
    icon() {
      if (this.v.$error) {
        return require("@/assets/clear.svg");
      } else {
        return require("@/assets/check.svg");
      }
    },

    inputClasses() {
      let classes = {};
      if (this.isHaveFilled) {
        classes = { success: !this.v.$error, error: this.v.$error };
      }
      return [{ active: this.isFocus }, { hasError: this.v.$error }, classes];
    },
  },

  methods: {
    updateValue(value) {
      this.v.$touch();
      this.$emit("input", value);
    },

    onFocus() {
      this.isFocus = true;
    },

    onBlur() {
      if (!this.value.length) {
        this.isFocus = false;
      }
    },

    checkValue() {
      if (this.value) {
        this.isFocus = true;
      } else {
        this.isFocus = false;
      }
    },
  },

  created() {
    this.checkValue();
  },

  watch: {
    value() {
      this.isHaveFilled = true;
      this.checkValue();
    },
  },
};
</script>

<style></style>
