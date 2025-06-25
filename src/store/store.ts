import { configureStore } from "@reduxjs/toolkit";
import { canvasSlice } from "../slice/CanvasSlice";

export const store = configureStore({
    reducer: {
        canvas: canvasSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // Disable serializable check for THREE.js objects
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;