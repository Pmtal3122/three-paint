import { createSlice } from "@reduxjs/toolkit";

interface canvasSlice {
    camera: Object;
    meshes: Object[];
    lights: Object[];
}

const initialState : canvasSlice = {
    camera: {},
    meshes: [],
    lights: []
}

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setCamera: (state, action) => {
            state.camera = action.payload;
        },
        addMesh: (state, action) => {
            state.meshes.push(action.payload);
        },
        removeMesh: (state, action) => {
            state.meshes = state.meshes.splice(state.meshes.indexOf(action.payload), 1);
        },
        addLight: (state, action) => {
            state.lights.push(action.payload);
        },
        removeLight: (state, action) => {
            state.lights = state.lights.splice(state.lights.indexOf(action.payload), 1);
        }
    }
})

export const { setCamera, addMesh, removeMesh, addLight, removeLight } = canvasSlice.actions;

export default canvasSlice.reducer;