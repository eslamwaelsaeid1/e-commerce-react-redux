// const configureStore = require("@reduxjs/toolkit").configureStore;
// const categoryReducer = require("../redux/categorySlice");
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../redux/categorySlice";

export const store = configureStore({
  reducer: {
    categoryData: categoryReducer,
  },
  devTools: true,
});
module.exports = store;
//.............../
// import { createStore, applyMiddleware } from "redux";
// import { thunk as thunkMiddleware } from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
