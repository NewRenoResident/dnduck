import { configureStore } from "@reduxjs/toolkit";
import gridMapSlice from "./slice/grid-map-slice";

export const store = configureStore({
  reducer: {
    gridMap: gridMapSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
