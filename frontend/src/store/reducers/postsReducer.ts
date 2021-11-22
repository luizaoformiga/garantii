import _ from "lodash";
import { Reducer } from "redux";
import { PostsAction, PostsActionTypes } from "../actions/types";

import { PostsState } from "./types";

const initialState = {
  items: {},
  loading: false,
  error: null,
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POST:
    case PostsActionTypes.FETCH_POSTS:
    case PostsActionTypes.ADD_POST:
    case PostsActionTypes.FETCH_POST_FAIL:
    case PostsActionTypes.FETCH_POSTS_FAIL:
    case PostsActionTypes.ADD_POST_FAIL:
      return { ...state, loading: false };

    case PostsActionTypes.FETCH_POST_SUCCESS:
    case PostsActionTypes.ADD_POST_SUCCESS:
      const { id }: any = action.payload;
      return {
        ...state,
        items: { ...state.items, [id]: action.payload },
        loading: false,
      };

    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        items: { ...state.items, ..._.mapKeys(action.payload, "id") },
        loading: false,
      };
    default:
      return state;
  }
};
