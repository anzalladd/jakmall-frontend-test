import * as types from "./mutation-types";

export const incrementStep = ({ commit }) => {
  commit(types.INCREMENT_STEP);
};

export const decrementStep = ({ commit }) => {
  commit(types.DECREMENT_STEP);
};

export default {
  incrementStep,
  decrementStep,
};
