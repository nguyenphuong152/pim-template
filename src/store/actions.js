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

export const addVideoComponentForTemplate = ({ commit }, { countVideo }) => {
  commit("ADD_VIDEO_COMPONENT_FOR_TEMPLATE", countVideo);
};

export const addColorComponentForTemplate = ({ commit }, { countColor }) => {
  commit("ADD_COLOR_COMPONENT_FOR_TEMPLATE", countColor);
};

export const addDateComponentForTemplate = ({ commit }, { dateComponent }) => {
  commit("ADD_DATE_COMPONENT_FOR_TEMPLATE", dateComponent);
};

export const addSelectComponentForTemplate = (
  { commit },
  { title, selections }
) => {
  commit("ADD_SELECT_COMPONENT_FOR_TEMPLATE", { title, selections });
};

export const rerenderComponent = ({ commit }) => {
  commit("RERENDER_COMPONENT");
};

export const generateImage = ({ commit }) => {
  commit("GENERATE_IMAGE");
};

export const deleteListTemplate = ({ commit }) => {
  commit("DELETE_LIST");
};

export const createTemplate = (
  { commit },
  {
    name,
    basicInfo,
    textComponent,
    imageComponent,
    videoComponent,
    colorComponent,
    dateComponent,
    selectComponent,
  }
) => {
  commit("CREATE_TEMPLATE", {
    name,
    basicInfo,
    textComponent,
    imageComponent,
    videoComponent,
    colorComponent,
    dateComponent,
    selectComponent,
  });
};
