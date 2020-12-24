export const ADD_TO_LIST = (state, { component }) => {
  state.listNewComponent.push({
    component,
  });
};

export const DELETE_FROM_LIST = (state, component) => {
  var index = -1;
  for (var i = 0; i < state.listNewComponent.length; i++) {
    if (state.listNewComponent[i].name === component.name) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    state.listNewComponent.splice(index, 1);
  }
};

export const ADD_BASIC_INFO_FOR_TEMPLATE = (state, basicInfo) => {
  state.basicInfo.push(basicInfo);
};

export const ADD_TEXT_COMPONENT_FOR_TEMPLATE = (state, textComponent) => {
  for (var i = 0; i < textComponent.length; i++) {
    state.textComponent.push({
      name: textComponent[i].name,
    });
  }
  console.log("text ", state.textComponent);
};

export const ADD_IMAGE_COMPONENT_FOR_TEMPLATE = (state, countImage) => {
  state.imageComponent = countImage;
  console.log("image ", state.imageComponent);
};

export const ADD_VIDEO_COMPONENT_FOR_TEMPLATE = (state, countVideo) => {
  state.videoComponent = countVideo;
  console.log("vid ", state.videoComponent);
};

export const ADD_COLOR_COMPONENT_FOR_TEMPLATE = (state, countColor) => {
  state.colorComponent = countColor;
  console.log("color ", state.colorComponent);
};

export const ADD_DATE_COMPONENT_FOR_TEMPLATE = (state, dateComponent) => {
  for (var i = 0; i < dateComponent.length; i++) {
    state.dateComponent.push({
      title: dateComponent[i],
    });
  }
  console.log("date ", state.dateComponent);
};
