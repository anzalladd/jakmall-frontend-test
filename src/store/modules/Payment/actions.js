import * as types from "./mutation-types";

export const incrementStep = ({ commit }) => {
  commit(types.INCREMENT_STEP);
};

export const decrementStep = ({ commit }) => {
  commit(types.DECREMENT_STEP);
};

export const goToPage = ({ commit }, value) => {
  commit(types.GO_TO_PAGE, value);
};

export default {
  incrementStep,
  decrementStep,
  goToPage,
};
