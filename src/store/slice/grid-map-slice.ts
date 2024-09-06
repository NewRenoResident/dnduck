import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type dynamicElement = {
  id: number;
  position?: number;
};

const initialState: {
  columns: number;
  rows: number;
  gridDynamicElements: dynamicElement[];
  cellSize?: { width: number; height: number };
} = {
  columns: 25,
  rows: 25,
  gridDynamicElements: [{ id: 1 }],
};

export const gridMapSlice = createSlice({
  name: "gridMap",
  initialState,
  reducers: {
    setColumnSize: (state, action: PayloadAction<number>) => {
      state.columns = action.payload;
    },
    setCellSize: (
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) => {
      state.cellSize = action.payload;
    },
    setRowsSize: (state, action: PayloadAction<number>) => {
      state.rows = action.payload;
    },
    addElement: (state, action: PayloadAction<dynamicElement>) => {
      if (
        !state.gridDynamicElements.some(
          (element) => element.id === action.payload.id
        )
      ) {
        state.gridDynamicElements.push(action.payload);
      }
    },
    updateOrAddElement: (state, action: PayloadAction<dynamicElement>) => {
      const index = state.gridDynamicElements.findIndex(
        (element) => element.id === action.payload.id
      );
      if (index !== -1) {
        state.gridDynamicElements[index] = {
          ...state.gridDynamicElements[index],
          ...action.payload,
        };
      } else {
        state.gridDynamicElements.push(action.payload);
      }
    },
    changeElementPosition: (
      state,
      action: PayloadAction<{ id: number; position: number }>
    ) => {
      state.gridDynamicElements = state.gridDynamicElements.map((element) =>
        action.payload.id === element.id
          ? { ...element, position: action.payload.position }
          : element
      );
    },
  },
});

export const {
  setColumnSize,
  setRowsSize,
  addElement,
  changeElementPosition,
  setCellSize,
  updateOrAddElement,
} = gridMapSlice.actions;

export const selectGridMapColumnSize = (state: RootState) =>
  state.gridMap.columns;

export const selectGridMapRowsSize = (state: RootState) => state.gridMap.rows;

export const selectGridDynamicElements = (state: RootState) =>
  state.gridMap.gridDynamicElements;

export default gridMapSlice.reducer;
