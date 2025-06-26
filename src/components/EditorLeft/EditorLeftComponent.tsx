import React from 'react';
import styles from './editorLeft.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import EditorRightComponent from '../EditorRight/EditorRightComponent';

export default function EditorLeftComponent() {

  const camera = useSelector((state: RootState) => state.canvas.camera);
  const meshes = useSelector((state: RootState) => state.canvas.meshes);
  const lights = useSelector((state: RootState) => state.canvas.lights);

  return (
    <>
      <div id={styles.editorLeft}>
        <h2>Camera</h2>
        <ul>
          <li>{camera !== null ? camera.name : null}</li>
        </ul>
        <h2>Meshes</h2>
        <ul>
          {
            meshes.map((mesh) => <li key={mesh.meshObject['uuid']}>{mesh.name}</li>)
          }
        </ul>
        <h2>Lights</h2>
        <ul>
          {
            lights.map((light) => <li key={light.lightObject['uuid']}>{light.name}</li>)
          }
        </ul>
      </div>
      {camera && <EditorRightComponent camera={camera} />}
      
    </>
  )
}
