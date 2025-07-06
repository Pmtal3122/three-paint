/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './editorLeft.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import EditorRightComponent from '../EditorRight/EditorRightComponent';

export default function EditorLeftComponent() {

  const camera = useSelector((state: RootState) => state.canvas.camera);
  const meshes = useSelector((state: RootState) => state.canvas.meshes);
  const lights = useSelector((state: RootState) => state.canvas.lights);

  const [activeObj, setActiveObj] = useState<any | null>(null);
  const [activeObjType, setActiveObjType] = useState<string>('');

  return (
    <>
      <div id={styles.editorLeft}>
        <h2>Camera</h2>
        <ul>
          <li onClick={() => {setActiveObj(camera); setActiveObjType('camera')}}>{camera !== null ? camera.name : null}</li>
        </ul>
        <h2>Meshes</h2>
        <ul>
          {
            meshes.map((mesh) => <li onClick={() => {setActiveObj(mesh); setActiveObjType('mesh')}} key={mesh.meshObject['uuid']}>{mesh.name}</li>)
          }
        </ul>
        <h2>Lights</h2>
        <ul>
          {
            lights.map((light) => <li key={light.lightObject['uuid']}>{light.name}</li>)
          }
        </ul>
      </div>
      {camera && <EditorRightComponent obj={activeObj} type={activeObjType} />}
      
    </>
  )
}
