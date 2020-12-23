export const ADD_TO_LIST = (state, { component }) => {
  state.cart.push({
    component,
  });
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
