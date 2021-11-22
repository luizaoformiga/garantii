export interface Post {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface Posts {
  [id: number]: Post;
}

export interface PostsState {
  items: Posts;
  loading: boolean;
  error: String | null;
}
