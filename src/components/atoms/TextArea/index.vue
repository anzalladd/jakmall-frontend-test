<template>
  <div class="a-text-area" :class="inputClasses">
    <label for="a-text-area__input" @click="setFocus">{{ text }}</label>
    <textarea
      v-bind="$attrs"
      class="a-text-area__input"
      :value="value"
      @input="updateValue($event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
      ref="textAreaCustom"
      :maxlength="max"
    ></textarea>
    <p class="a-text-area__counter">{{ counter }}/{{ max }}</p>
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
    max: {
      type: Number,
      default: 50,
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

    counter() {
      return this.value.length;
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

    setFocus() {
      this.$nextTick(() => this.$refs.textAreaCustom.focus());
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
    "v.$error"(value) {
      this.isHaveFilled = value;
    },
  },
};
</script>

<style></style>
