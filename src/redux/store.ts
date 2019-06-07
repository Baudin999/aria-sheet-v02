import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);
export const getState = store.getState;
export const dispatch = store.dispatch;
