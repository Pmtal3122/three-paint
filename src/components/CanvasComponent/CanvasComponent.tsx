import React, { RefObject, useEffect, useRef } from 'react';
import styles from './canvasStyles.module.css';
import * as THREE from 'three';
import { useDispatch } from 'react-redux';
import { addMesh, setCamera } from '../../slice/CanvasSlice';

export default function CanvasComponent() {

    const containerRef: RefObject<HTMLDivElement | null> = useRef(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    // const meshesRef = useRef<THREE.Mesh[]>([]);
    // const lightsRef = useRef<THREE.Light[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    dispatch(setCamera({ name: 'MainCamera', cameraObject: cameraRef.current }));
    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Append the renderer to the container
    document.getElementById(styles.canvasContainer)?.appendChild(renderer.domElement);

    // Create a geometry and a material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    // Create a mesh
    const cube = new THREE.Mesh(geometry, material);
    // meshesRef.current.push(cube);
    dispatch(addMesh({ name: 'Cube1', meshObject: cube }));
    // Add the mesh to the scene
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      // Render the scene
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup function to remove the renderer and scene
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
    
    })

  return (
    <div ref={containerRef} id={styles.canvasContainer}>
    </div>
  )
}
