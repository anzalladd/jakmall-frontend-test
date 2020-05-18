<template>
  <div class="o-step-1-payment">
    <div class="o-step-1-payment__header">
      <h1 class="text--header">Delivery details</h1>
      <Checkbox />
    </div>
    <div class="o-step-1-payment__form">
      <div class="o-step-1-payment__form__left">
        <Input
          text="Name"
          v-model="data.details.name"
          :v="$v.data.details.name"
          class="input--form-payment"
        />
        <Input
          text="Phone Number"
          v-model="data.details.phone_number"
          :v="$v.data.details.phone_number"
          class="input--form-payment u-mt-10"
        />
      </div>
      <div class="o-step-1-payment__form__right"></div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Checkbox from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";

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
  },

  validations: {
    data: {
      details: {
        name: { required },
        phone_number: { required },
      },
    },
  },
};
</script>
