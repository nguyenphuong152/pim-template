export const addComponentToList = ({ commit }, { component }) => {
  commit("ADD_TO_CART", { component });
};

export const deleteComponentFromList = ({ commit }, component) => {
  commit("DELETE_FROM_LIST", component);
};
