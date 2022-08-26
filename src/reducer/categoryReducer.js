const categoryReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORYTYPE":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
export { categoryReducer };
