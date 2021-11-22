import { RootState, RootActions } from "../..";
import { ThunkAction } from "redux-thunk";
import { Post, Posts } from "../../reducers/types";
import { PostsActionTypes } from "../types";

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

// FETCH POSTS
export interface FetchPosts {
  type: PostsActionTypes.FETCH_POSTS;
}

export interface FetchPostsSuccess {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: Posts;
}

export interface FetchPostsFail {
  type: PostsActionTypes.FETCH_POSTS_FAIL;
}

// FETCH POST
export interface FetchPost {
  type: PostsActionTypes.FETCH_POST;
}

export interface FetchPostSuccess {
  type: PostsActionTypes.FETCH_POST_SUCCESS;
  payload: Post;
}

export interface FetchPostFail {
  type: PostsActionTypes.FETCH_POST_FAIL;
}
