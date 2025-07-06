/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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

  const handleListItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.currentTarget;
    console.log('target', target);
    const activeListItem = document.querySelector(`.${styles.listItemActive}`);
    activeListItem?.classList.remove(styles.listItemActive);
    target.classList.add(styles.listItemActive);
  }

  // useEffect(() => {
  //   const listItems = document.querySelectorAll(`.${styles.listItem}`);
  //   listItems.forEach((item) => {
  //     item.addEventListener('click', () => {
  //       listItems.forEach((li) => li.classList.remove(styles.listItemActive));
  //       item.classList.add(styles.listItemActive);
  //     });
  //   });

  //   return () => {
  //     listItems.forEach((item) => {
  //       item.removeEventListener('click', () => {
  //         listItems.forEach((li) => li.classList.remove(styles.listItemActive));
  //         item.classList.add(styles.listItemActive);
  //       });
  //     });
  //   }
  // }, [])

  return (
    <>
      <div id={styles.editorLeft}>
        <h2>Camera</h2>
        <ul>
          <li className={`${styles.listItem} ${styles.cameraListItem}`} onClick={(e) => {setActiveObj(camera); setActiveObjType('camera'); handleListItemClick(e)}}>{camera !== null ? camera.name : null}</li>
        </ul>
        <h2>Meshes</h2>
        <ul>
          {
            meshes.map((mesh) => <li className={`${styles.listItem} ${styles.meshListItem}`} onClick={(e) => {setActiveObj(mesh); setActiveObjType('mesh'); handleListItemClick(e)}} key={mesh.meshObject['uuid']}>{mesh.name}</li>)
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
