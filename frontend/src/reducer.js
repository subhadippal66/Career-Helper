export const initialState = {
  prefrence: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_prefrence":
      return {
        ...state,
        prefrence: [...state.prefrence, action.item],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
