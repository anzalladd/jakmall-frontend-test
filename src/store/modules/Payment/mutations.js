import { INCREMENT_STEP, DECREMENT_STEP } from "./mutation-types";

export default {
  [INCREMENT_STEP](state) {
    state.currentStepPayment = state.currentStepPayment + 1;
  },
  [DECREMENT_STEP](state) {
    state.currentStepPayment = state.currentStepPayment - 1;
  },
};
