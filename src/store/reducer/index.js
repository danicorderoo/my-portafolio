import { CHANGE_IDIOM, CHANGE_THEME } from "../actions";

const initialState = {
  theme: false,
  idiom: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case CHANGE_IDIOM: {
      return {
        ...state,
        idiom: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
