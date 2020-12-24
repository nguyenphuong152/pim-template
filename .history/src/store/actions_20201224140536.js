export const addComponentToList = ({ commit }, { component }) => {
  commit("ADD_TO_LIST", { component });
};

export const deleteComponentFromList = ({ commit }, component) => {
  commit("DELETE_FROM_LIST", component);
};

export const addBasicInfoForTemplate = ({ commit }, { basicInfo }) => {
  commit("ADD_BASIC_INFO_FOR_TEMPLATE", basicInfo);
};

export const addTextComponentForTemplate = ({ commit }, { textComponent }) => {
  commit("ADD_TEXT_COMPONENT_FOR_TEMPLATE", textComponent);
};

export const addImageComponentForTemplate = ({ commit }, { countImage }) => {
  commit("ADD_IMAGE_COMPONENT_FOR_TEMPLATE", countImage);
};
