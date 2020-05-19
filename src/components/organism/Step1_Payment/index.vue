<template>
  <div class="o-step-payment">
    <div class="o-step-payment__header">
      <h1 class="text--header">Delivery details</h1>
      <Checkbox
        @input="(e) => inputCheckbox(e)"
        v-model="data.isDropshipper"
        label="Send as dropshipper"
        class="checkbox--header"
      />
    </div>
    <form class="o-step-payment__form">
      <div class="o-step-payment__form__left">
        <Input
          text="Name"
          v-model="data.name"
          :v="$v.data.name"
          class="input--form-payment"
          type="text"
        />
        <Input
          text="Phone Number"
          v-model="data.phone_number"
          :v="$v.data.phone_number"
          class="input--form-payment u-mt-10"
          type="text"
        />
        <TextArea
          text="Delivery Address"
          v-model="data.delivery_address"
          :v="$v.data.delivery_address"
          class="input--form-payment u-mt-10"
          rows="8"
          :max="120"
        />
      </div>
      <div class="o-step-payment__form__right">
        <Input
          text="Dropshipper name"
          v-model="data.dropshipper_name"
          :v="$v.data.dropshipper_name"
          class="input--form-payment"
          type="text"
          :disable="!data.isDropshipper"
        />
        <Input
          text="Dropshipper phone number"
          v-model="data.dropshipper_phone_number"
          :v="$v.data.dropshipper_phone_number"
          class="input--form-payment u-mt-10"
          type="text"
          :disable="!data.isDropshipper"
        />
      </div>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  requiredIf,
} from "vuelidate/lib/validators";
import { isPhoneNumber } from "@/util/Validator";
import Checkbox from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";

export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    Checkbox,
    Input,
    TextArea,
  },

  validations: {
    data: {
      name: { required },
      phone_number: {
        required,
        isPhoneNumber,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      delivery_address: {
        required,
        maxLength: maxLength(120),
      },
      dropshipper_name: {
        required: requiredIf("isDropshipper"),
      },
      dropshipper_phone_number: {
        required: requiredIf("isDropshipper"),
        isPhoneNumber: requiredIf("isDropshipper"),
      },
    },
  },

  methods: {
    inputCheckbox(e) {
      this.$emit("updateValueCheckbox", e);
    },
  },

  computed: {
    isDropshipper() {
      return !this.data.isDropshipper;
    },
  },
};
</script>
