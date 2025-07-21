/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import styles from './meshPropertiesStyles.module.css';
import { meshesInterface } from '../../slice/CanvasSlice'
import * as THREE from 'three';
import { resetToDefault } from '../../utils/ResetValueToDefault';

export default function MeshPropertiesComponent({ mesh }: { mesh: meshesInterface | null }) {

    const scaleCheckedRef = useRef<HTMLDivElement>(null);
    const scaleUncheckedRef = useRef<HTMLDivElement>(null);

    const handleLockScaleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const scaleXInput = document.getElementById('scaleX') as HTMLInputElement | null;
        const scaleYInput = document.getElementById('scaleY') as HTMLInputElement | null;
        const scaleZInput = document.getElementById('scaleZ') as HTMLInputElement | null;
        const scaleInput = document.getElementById('scale') as HTMLInputElement | null;
        if (e.currentTarget.checked) {
            scaleCheckedRef.current?.classList.add(styles.scaleVisible);
            scaleUncheckedRef.current?.classList.remove(styles.scaleVisible);
            if (mesh && mesh.meshObject) {
                if (scaleInput) scaleInput.value = mesh.meshObject.scale.x.toString();
                mesh.meshObject.scale.set(mesh.meshObject.scale.x, mesh.meshObject.scale.x, mesh.meshObject.scale.x);
            }
        }
        else {
            scaleCheckedRef.current?.classList.remove(styles.scaleVisible);
            scaleUncheckedRef.current?.classList.add(styles.scaleVisible);
            if (mesh && mesh.meshObject) {
                if (scaleXInput) scaleXInput.value = mesh.meshObject.scale.x.toString();
                if (scaleYInput) scaleYInput.value = mesh.meshObject.scale.y.toString();
                if (scaleZInput) scaleZInput.value = mesh.meshObject.scale.z.toString();

                //if(mesh.meshObject.material instanceof THREE.MeshBasicMaterial) mesh.meshObject.material.wireframe = !mesh.meshObject.material.wireframe;
                // Don't use this line of code anywhere, it is just an example of using the instanceof operator to check the type of the material and toggle the wireframe property.
                // In TypeScript (and JavaScript), instanceof is used to check at runtime whether an object was created using a specific class.
            }
        }
    }

    useEffect(() => {
        const positionXInput = document.getElementById('positionX') as HTMLInputElement | null;
        const positionYInput = document.getElementById('positionY') as HTMLInputElement | null;
        const positionZInput = document.getElementById('positionZ') as HTMLInputElement | null;

        const rotationXInput = document.getElementById('rotationX') as HTMLInputElement | null;
        const rotationYInput = document.getElementById('rotationY') as HTMLInputElement | null;
        const rotationZInput = document.getElementById('rotationZ') as HTMLInputElement | null;

        const scaleXInput = document.getElementById('scaleX') as HTMLInputElement | null;
        const scaleYInput = document.getElementById('scaleY') as HTMLInputElement | null;
        const scaleZInput = document.getElementById('scaleZ') as HTMLInputElement | null;

        if (mesh && mesh.meshObject) {
            positionXInput!.value = mesh.meshObject.position.x.toString();
            positionYInput!.value = mesh.meshObject.position.y.toString();
            positionZInput!.value = mesh.meshObject.position.z.toString();

            rotationXInput!.value = THREE.MathUtils.radToDeg(mesh.meshObject.rotation.x).toString();
            rotationYInput!.value = THREE.MathUtils.radToDeg(mesh.meshObject.rotation.y).toString();
            rotationZInput!.value = THREE.MathUtils.radToDeg(mesh.meshObject.rotation.z).toString();

            scaleXInput!.value = mesh.meshObject.scale.x.toString();
            scaleYInput!.value = mesh.meshObject.scale.y.toString();
            scaleZInput!.value = mesh.meshObject.scale.z.toString();
        }
    }, [])

    return (
        <div id={styles.meshProperties}>
            <h1>{mesh?.name}</h1>

            {
                mesh &&
                <div>
                    <h2>Position</h2>
                    <label htmlFor="positionX">X: </label>
                    <input type="number" id="positionX" onChange={(e) => { if (mesh) mesh.meshObject.position.x = Number(e.target.value) }} />
                    <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.position, 'position', 'x', e.currentTarget.previousSibling)}}>Reset</button> <br />
                    <label htmlFor="positionY">Y: </label>
                    <input type="number" id="positionY" onChange={(e) => { if (mesh) mesh.meshObject.position.y = Number(e.target.value) }} />
                    <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.position, 'position', 'y', e.currentTarget.previousSibling)}}>Reset</button> <br />
                    <label htmlFor="positionZ">Z: </label>
                    <input type="number" id="positionZ" onChange={(e) => { if (mesh) mesh.meshObject.position.z = Number(e.target.value) }} />
                    <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.position, 'position', 'z', e.currentTarget.previousSibling)}}>Reset</button>
                </div>
            }

            {
                mesh && (
                    <div>
                        <h2>Rotation</h2>
                        <label htmlFor="rotationX">X: </label>
                        <input type="number" id="rotationX" onChange={(e) => { if (mesh) mesh.meshObject.rotation.x = THREE.MathUtils.degToRad(Number(e.target.value)) }} />
                        <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.rotation, 'rotation', 'x', e.currentTarget.previousSibling)}}>Reset</button> <br />
                        <label htmlFor="rotationY">Y: </label>
                        <input type="number" id="rotationY" onChange={(e) => { if (mesh) mesh.meshObject.rotation.y = THREE.MathUtils.degToRad(Number(e.target.value)) }} />
                        <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.rotation, 'rotation', 'y', e.currentTarget.previousSibling)}}>Reset</button> <br />
                        <label htmlFor="rotationZ">Z: </label>
                        <input type="number" id="rotationZ" onChange={(e) => { if (mesh) mesh.meshObject.rotation.z = THREE.MathUtils.degToRad(Number(e.target.value)) }} />
                        <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.rotation, 'rotation', 'z', e.currentTarget.previousSibling)}}>Reset</button>
                    </div>
                )
            }

            {
                mesh &&
                <div>
                    <h2>Scale</h2>
                    <label htmlFor="scaleLock">Lock Scale: </label>
                    <input type="checkbox" name="scaleLock" id="scaleLock" onClick={(e) => handleLockScaleChange(e)} /> <br />

                    <div ref={scaleCheckedRef} id={styles.scaleChecked} className={styles.scaleInputs}>
                        <label htmlFor="scale">Scale: </label>
                        <input type="number" id="scale" onChange={(e) => {
                            if (mesh) {
                                const scaleValue = Number(e.target.value);
                                mesh.meshObject.scale.set(scaleValue, scaleValue, scaleValue);
                            }
                        }} />
                        {/* <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.scale, 'scale', 'x', e.currentTarget.previousSibling)}}>Reset</button> */}
                    </div>

                    <div ref={scaleUncheckedRef} id={styles.scaleUnchecked} className={`${styles.scaleInputs} ${styles.scaleVisible}`}>
                        <label htmlFor="scaleX">ScaleX: </label>
                        <input type="number" id="scaleX" onChange={(e) => { if (mesh) mesh.meshObject.scale.x = Number(e.target.value) }} />
                        <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.scale, 'scale', 'x', e.currentTarget.previousSibling)}}>Reset</button> <br />
                        <label htmlFor="scaleY">ScaleY: </label>
                        <input type="number" id="scaleY" onChange={(e) => { if (mesh) mesh.meshObject.scale.y = Number(e.target.value) }} />
                        <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.scale, 'scale', 'y', e.currentTarget.previousSibling)}}>Reset</button> <br />
                        <label htmlFor="scaleZ">ScaleZ: </label>
                        <input type="number" id="scaleZ" onChange={(e) => { if (mesh) mesh.meshObject.scale.z = Number(e.target.value) }} />
                        <button onClick={(e) => {if(mesh) resetToDefault(mesh.meshObject.scale, 'scale', 'z', e.currentTarget.previousSibling)}}>Reset</button>
                    </div>
                </div>
            }
        </div>
    )
}
