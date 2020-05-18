import actions from "./actions";
import mutations from "./mutations";
import state from "./state";

const payment = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default payment;
