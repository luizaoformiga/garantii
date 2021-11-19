import { all, takeLatest, AllEffect, ForkEffect } from "redux-saga/effects";

import { RepositoriesTypes } from "./repositories/types";
import { load } from "./repositories/sagas";

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>> | AllEffect<AllEffect<ForkEffect<never>>>,
  void,
  unknown
> {
  yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
  //yield all([cart]);
}
