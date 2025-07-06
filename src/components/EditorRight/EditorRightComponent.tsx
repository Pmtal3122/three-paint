// import React, { useEffect } from 'react';
import styles from './editorRightStyles.module.css';
import { cameraInterface, lightsInterface, meshesInterface } from '../../slice/CanvasSlice';
import CameraPropertiesComponent from '../CameraPropertiesComponent/CameraPropertiesComponent';
import { JSX } from 'react';
import MeshPropertiesComponent from '../MeshPropertiesComponent/MeshPropertiesComponent';

export default function EditorRightComponent({ obj, type }: { obj: cameraInterface | meshesInterface | lightsInterface | null; type: string }) {

  const renderTypes: { [key: string]: JSX.Element | null } = {
    'camera': <CameraPropertiesComponent camera={obj as cameraInterface} />,
    'mesh': <MeshPropertiesComponent mesh={obj as meshesInterface} />
  }

  return (
    <div id={styles.editorRight}>
      {
        obj && renderTypes[type]
      }
    </div>
  )
}
