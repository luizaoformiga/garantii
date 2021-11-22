import { Dispatch } from "redux";
import { AxiosResponse } from "axios";

import { api } from "../../../services/axios";
import history from "../../../routes/history";
import { ThunkResult } from "../Fetch/type-fecth";
import { Post } from "../../reducers/types";
import { AddPost, AddPostFail, AddPostSuccess } from "./add-types";
import { PostsActionTypes } from "../types";

export const addPost =
  (post: Post): ThunkResult<void> =>
  async (dispatch: Dispatch) => {
    handleAddPost(dispatch);
    try {
      const response: AxiosResponse<Post, any> = await api.post(`/posts`, post);
      handleAddPostSuccess(dispatch, response.data);
    } catch (e) {
      handleAddPostFail(dispatch);
    }
  };

const handleAddPost = (dispatch: Dispatch<AddPost>) => {
  dispatch({ type: PostsActionTypes.ADD_POST });
};

const handleAddPostSuccess = (
  dispatch: Dispatch<AddPostSuccess>,
  response: Post
) => {
  dispatch({ type: PostsActionTypes.ADD_POST_SUCCESS, payload: response });
  history.push("/");
};

const handleAddPostFail = (dispatch: Dispatch<AddPostFail>) => {
  dispatch({ type: PostsActionTypes.ADD_POST_FAIL });
};
