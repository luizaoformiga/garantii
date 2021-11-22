import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { postsReducer } from "./reducers/postsReducer";
import { PostsState } from "./reducers/types";
import { PostsAction } from "./actions/types";

export interface RootState {
  readonly posts: PostsState;
}

const rootReducer = combineReducers<RootState>({
  posts: postsReducer,
});

export type RootActions = PostsAction; // | CommentsAction | etc.

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
  )
);
