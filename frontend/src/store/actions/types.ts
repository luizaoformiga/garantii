import { AddPost, AddPostFail, AddPostSuccess } from "./Add/add-types";
import {
  FetchPost,
  FetchPostFail,
  FetchPosts,
  FetchPostsFail,
  FetchPostsSuccess,
  FetchPostSuccess,
} from "./Fetch/type-fecth";

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL",
  FETCH_POST = "FETCH_POST",
  FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
  FETCH_POST_FAIL = "FETCH_POST_FAIL",
  ADD_POST = "ADD_POST",
  ADD_POST_SUCCESS = "ADD_POST_SUCCESS",
  ADD_POST_FAIL = "ADD_POST_FAIL",
}

export type PostsAction =
  | FetchPosts
  | FetchPostsSuccess
  | FetchPostsFail
  | FetchPost
  | FetchPostSuccess
  | FetchPostFail
  | AddPost
  | AddPostSuccess
  | AddPostFail;
