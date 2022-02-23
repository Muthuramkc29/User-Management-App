import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";

export default configureStore({
  reducer: {
    user: userReducers,
  },
});
