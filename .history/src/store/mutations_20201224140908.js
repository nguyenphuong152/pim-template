export const ADD_TO_LIST = (state, { component }) => {
  state.listNewComponent.push({
    component,
  });

  console.log(state.listNewComponent);
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
