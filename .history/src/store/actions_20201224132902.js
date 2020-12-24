export const addComponentToList = ({ commit }, { component }) => {
  commit("ADD_TO_LIST", { component });
};

export const deleteComponentFromList = ({ commit }, component) => {
  commit("DELETE_FROM_LIST", component);
};

export const addBasicInfoOfTemplate = ({ commit }, { basicInfo }) => {
  commit("ADD_BASIC_INFO_FOR_TEMPLATE", basicInfo);
};
