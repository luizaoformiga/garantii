export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCCES = "@repositories/LOAD_SUCCCES",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
  USER_ADD = "@repositories/USER_ADD",
}

export interface Repository {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
