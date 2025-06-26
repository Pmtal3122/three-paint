import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as THREE from "three";

export interface cameraInterface {
    name: string;
    cameraObject: THREE.PerspectiveCamera | null;
}

interface meshesInterface {
    name: string;
    meshObject: THREE.Mesh;
}

interface lightsInterface {
    name: string;
    lightObject: THREE.Light;
}

interface canvasSliceInterface {
    camera: cameraInterface | null;
    meshes: meshesInterface[];
    lights: lightsInterface[];
}

const initialState: canvasSliceInterface = {
    camera: null,
    meshes: [],
    lights: []
}

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setCamera: (state, action: PayloadAction<cameraInterface>) => {
            state.camera = action.payload;
        },
        addMesh: (state, action) => {
            const existingMesh = state.meshes.find(mesh => mesh.name === action.payload.name);
            if (!existingMesh) 
                state.meshes.push(action.payload);
        },
        removeMesh: (state, action) => {
            state.meshes = state.meshes.splice(state.meshes.indexOf(action.payload), 1);
        },
        addLight: (state, action) => {
            const existingLight = state.lights.find(light => light.name === action.payload.name);
            if (!existingLight)
            state.lights.push(action.payload);
        },
        removeLight: (state, action) => {
            state.lights = state.lights.splice(state.lights.indexOf(action.payload), 1);
        }
    }
})

export const { setCamera, addMesh, removeMesh, addLight, removeLight } = canvasSlice.actions;

export default canvasSlice.reducer;