import { createStore, applyMiddleware, AnyAction, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/root-reducer";
import { rootSaga } from "./ducks/root-saga";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState, AnyAction> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
