import { INCREMENT_STEP, DECREMENT_STEP, GO_TO_PAGE } from "./mutation-types";

export default {
  [INCREMENT_STEP](state) {
    state.currentStepPayment = state.currentStepPayment + 1;
  },
  [DECREMENT_STEP](state) {
    state.currentStepPayment = state.currentStepPayment - 1;
  },
  [GO_TO_PAGE](state, value) {
    state.currentStepPayment = value;
  },
};
