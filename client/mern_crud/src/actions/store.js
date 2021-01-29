import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";

export const store = createStore(
  // we passe reducer, middlware(thunk in this case)
  reducers,
  compose(applyMiddleware(thunk))
);
