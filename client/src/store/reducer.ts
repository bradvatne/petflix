import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
// Extract the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Use the typeof store.dispatch as the AppDispatch type
export type AppDispatch = typeof store.dispatch;
