import { api } from "../../../services/axios";
import { Dispatch } from "redux";
import { AxiosResponse } from "axios";
import {
  FetchPosts,
  FetchPostsFail,
  FetchPostsSuccess,
  ThunkResult,
  FetchPost,
  FetchPostFail,
  FetchPostSuccess,
} from "../Fetch/type-fecth";
import { PostsActionTypes } from "../types";
import { Post, Posts } from "../../reducers/types";

export const fetchPosts = (): ThunkResult<void> => async (dispatch) => {
  handleFetchPosts(dispatch);
  try {
    const response: AxiosResponse<Post[]> = await api.get("/posts");
    handleFetchPostsSuccess(dispatch, response.data);
  } catch (e) {
    handleFetchPostsFail(dispatch);
  }
};

export const handleFetchPosts = (dispatch: Dispatch<FetchPosts>) => {
  dispatch({ type: PostsActionTypes.FETCH_POSTS });
};

export const handleFetchPostsSuccess = (
  dispatch: Dispatch<FetchPostsSuccess>,
  response: Posts
) => {
  dispatch({
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload: response,
  });
};

export const handleFetchPostsFail = (dispatch: Dispatch<FetchPostsFail>) => {
  dispatch({
    type: PostsActionTypes.FETCH_POSTS_FAIL,
  });
};

export const fetchPost =
  (id: number): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    handleFetchPost(dispatch);
    try {
      const response: AxiosResponse<Post> = await api.get(`/posts/${id}`);
      handleFetchPostSuccess(dispatch, response.data);
    } catch (e) {
      handleFetchPostFail(dispatch);
    }
  };

export const handleFetchPost = (dispatch: Dispatch<FetchPost>) => {
  dispatch({ type: PostsActionTypes.FETCH_POST });
};

const handleFetchPostSuccess = (
  dispatch: Dispatch<FetchPostSuccess>,
  response: Post
) => {
  dispatch({
    type: PostsActionTypes.FETCH_POST_SUCCESS,
    payload: response,
  });
};

const handleFetchPostFail = (dispatch: Dispatch<FetchPostFail>) => {
  dispatch({
    type: PostsActionTypes.FETCH_POST_FAIL,
  });
};
