import { ACTION } from "./contadorActions";

// export const initialState = { count: 0, userInput: "", color: true}

export const contadorReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTION.CHANGE_COLOR:
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};
