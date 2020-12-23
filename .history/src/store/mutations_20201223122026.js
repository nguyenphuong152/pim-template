export const ADD_TO_LIST = (state, { component }) => {
  console.log(component);
  state.listNewComponent.push({
    component,
  });

  console.log(state.listNewComponent);
};

export const DELETE_FROM_LIST = (state, component) => {
  var index = -1;
  for (var i = 0; i < state.listNewComponent.length; i++) {
    if (state.listNewComponent[i].component.name === component.name) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    state.listNewComponent.splice(index, 1);
  }
};
