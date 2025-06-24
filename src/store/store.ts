import { configureStore } from "@reduxjs/toolkit";
import { canvasSlice } from "../slice/CanvasSlice";

export const store = configureStore({
    reducer: {
        canvas: canvasSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;