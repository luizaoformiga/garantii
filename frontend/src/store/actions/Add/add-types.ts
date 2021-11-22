import { Post } from "../../reducers/types";
import { PostsActionTypes } from "../types";

// ADD POST
export interface AddPost {
  type: PostsActionTypes.ADD_POST;
}

export interface AddPostSuccess {
  type: PostsActionTypes.ADD_POST_SUCCESS;
  payload: Post;
}

export interface AddPostFail {
  type: PostsActionTypes.ADD_POST_FAIL;
}
