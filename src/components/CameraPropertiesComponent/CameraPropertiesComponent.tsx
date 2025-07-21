/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styles from './cameraProperties.module.css';
import { cameraInterface } from '../../slice/CanvasSlice';
import * as THREE from 'three';
import { resetToDefault } from '../../utils/ResetValueToDefault';

export default function CameraPropertiesComponent({ camera }: { camera: cameraInterface | null }) {

    useEffect(() => {
        const positionXInput = document.getElementById('positionX') as HTMLInputElement | null;
        const positionYInput = document.getElementById('positionY') as HTMLInputElement | null;
        const positionZInput = document.getElementById('positionZ') as HTMLInputElement | null;

        const rotationXInput = document.getElementById('rotationX') as HTMLInputElement | null;
        const rotationYInput = document.getElementById('rotationY') as HTMLInputElement | null;
        const rotationZInput = document.getElementById('rotationZ') as HTMLInputElement | null;
        
        if (camera && camera.cameraObject) {
            positionXInput!.value = camera.cameraObject.position.x.toString();
            positionYInput!.value = camera.cameraObject.position.y.toString();
            positionZInput!.value = camera.cameraObject.position.z.toString();

            rotationXInput!.value = THREE.MathUtils.radToDeg(camera.cameraObject.rotation.x).toString();
            rotationYInput!.value = THREE.MathUtils.radToDeg(camera.cameraObject.rotation.y).toString();
            rotationZInput!.value = THREE.MathUtils.radToDeg(camera.cameraObject.rotation.z).toString();
        }
    }, [])

    return (
        <div id={styles.cameraProperties}>
            {camera !== null ? <h1>{camera.name}</h1> : null}

            {camera !== null ?
                <div>
                    <h2>Position</h2>
                    <label htmlFor="positionX">X: </label>
                    <input onChange={(e) => {
                        if (camera.cameraObject !== null) camera.cameraObject.position.x = Number(e.target.value)
                    }} type="number" name="positionX" id="positionX" />
                    <button onClick={(e) => {if(camera.cameraObject) resetToDefault(camera.cameraObject.position, 'position', 'x', e.currentTarget.previousSibling)}}>Reset</button> <br />
                    <label htmlFor="positionY">Y: </label>
                    <input onChange={(e) => { if (camera.cameraObject !== null) camera.cameraObject.position.y = Number(e.target.value) }} type="number" name="positionY" id="positionY" />
                    <button onClick={(e) => {if(camera.cameraObject) resetToDefault(camera.cameraObject.position, 'position', 'y', e.currentTarget.previousSibling)}}>Reset</button> <br />
                    <label htmlFor="positionZ">Z: </label>
                    <input onChange={(e) => { if (camera.cameraObject !== null) camera.cameraObject.position.z = Number(e.target.value) }} type="number" name="positionZ" id="positionZ" />
                    <button onClick={(e) => {if(camera.cameraObject) resetToDefault(camera.cameraObject.position, 'position', 'z', e.currentTarget.previousSibling)}}>Reset</button>
                </div>
                : null}

            {
                camera &&
                <div>
                    <h2>Rotation</h2>
                    <label htmlFor="rotationX">X: </label>
                    <input onChange={(e) => { if (camera.cameraObject !== null) camera.cameraObject.rotation.x = THREE.MathUtils.degToRad(Number(e.target.value)) }} type="number" name="rotationX" id="rotationX" />
                    <button onClick={(e) => {if(camera.cameraObject) resetToDefault(camera.cameraObject.rotation, 'rotation', 'x', e.currentTarget.previousSibling)}}>Reset</button> <br />
                    <label htmlFor="rotationY">Y: </label>
                    <input onChange={(e) => { if (camera.cameraObject !== null) camera.cameraObject.rotation.y = THREE.MathUtils.degToRad(Number(e.target.value)) }} type="number" name="rotationY" id="rotationY" />
                    <button onClick={(e) => {if(camera.cameraObject) resetToDefault(camera.cameraObject.rotation, 'rotation', 'y', e.currentTarget.previousSibling)}}>Reset</button> <br />
                    <label htmlFor="rotationZ">Z: </label>
                    <input onChange={(e) => { if (camera.cameraObject !== null) camera.cameraObject.rotation.z = THREE.MathUtils.degToRad(Number(e.target.value)) }} type="number" name="rotationZ" id="rotationZ" />
                    <button onClick={(e) => {if(camera.cameraObject) resetToDefault(camera.cameraObject.rotation, 'rotation', 'z', e.currentTarget.previousSibling)}}>Reset</button>
                </div>
            }
        </div>
    )
}
