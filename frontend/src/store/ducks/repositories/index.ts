import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes } from "./types";

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case RepositoriesTypes.USER_ADD:
      return { ...state, data: action.payload };
    case "product/remove":
      const index = state.data.findIndex((item) => item.id === action.payload);

      state.data.splice(index, 1);

      return { ...state, data: [...state.data] };
    case "product/erase":
      state.data.filter((item) => item === action.payload);
       
      //state.data.splice(response, 1);

      return { ...state, data: [...state.data] }
    default:
      return state;
  }
};

export default reducer;
