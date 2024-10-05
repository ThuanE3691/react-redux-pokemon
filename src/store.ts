import {
	legacy_createStore as createStore,
	applyMiddleware,
	Action,
} from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";

import rootReducer from "./reducer";

const middleWare = applyMiddleware(thunk);

const store = createStore(rootReducer, undefined, middleWare);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, Action>;
