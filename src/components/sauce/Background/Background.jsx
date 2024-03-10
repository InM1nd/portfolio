import React , { useRef, useState, useEffect } from "react"
import { OrbitControls, RenderTexture, Text, PerspectiveCamera, ContactShadows, SpotLight, Torus, Sphere, Capsule } from "@react-three/drei"
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { MeshStandardMaterial, TextureLoader } from 'three';
import { PointLight } from "three";

import Font from '../../../components/Utils/fonts/Bebas_Neue_Regular.json';
import gradientTexture from '../../../img/other/DayEnvironmentHDRI035_1K-TONEMAPPED.jpg';


import styles from "./Background.module.scss"

const Scene = ({   }) => {

  const pointLight = useRef();
  const donutsRef = useRef([]);
  const pointLightOrbitRadius = 5;
  const fontLoader = new FontLoader();
  const font = fontLoader.parse(Font);

  // const material = new THREE.MeshNormalMaterial()

  // DONUT
  
  const generateDonuts = (count) => {
    const donuts = [];

    for (let i = 0; i < count; i++) {
      const position = [
        (Math.random() - 0.5) * 15, 
        (Math.random() - 0.5) * 5, 
        (Math.random() ) ,
      ];

      const [isHovered, setHover] = useState(false);

      const donut = (
        
        <Sphere
          key={i}
          args={[1, 64, 32]}
          position={position}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
        >
            <meshPhysicalMaterial
             onPointerOver={() => setHover(true)}
             onPointerOut={() => setHover(false)}
              attach="material"
              color={'#171516'}
              roughness={10}
              metalness={0}
            />
            </Sphere>     
      );

      donuts.push(donut);
    }
    return donuts;
  };


  
  
  useFrame(() => {
    for (let i = 0; i < donutsRef.current.length; i++) {
      const donut = donutsRef.current[i];
      donut.rotation.x += 0.5; 
      donut.rotation.y += 0.5; 
      donut.rotation.z += 0.5; 
    }

    // Move point light in orbit
    const time = performance.now() * 0.0003;
    const pointLightX = Math.cos(time) * pointLightOrbitRadius;
    const pointLightY = Math.sin(time) * pointLightOrbitRadius;
    const pointLightZ = -4; // Adjust Z position as needed
    pointLight.current.position.set(pointLightX, pointLightY, pointLightZ);
    
  });

  const donuts = generateDonuts(70);
  // Generate all stuff

  return (
    <>
        <directionalLight color={0xffffff}  position={[0, 0, 10]} intensity={1} castShadow  />
        <directionalLight color={0xffffff}  position={[-10, 0, 10]} intensity={1} castShadow  />

        <pointLight ref={pointLight}  color={0x9C0312}  position={[-5, 0,  -4]} intensity={1000}/>
        <pointLight ref={pointLight}  color={0x9C0312}  position={[5, 0,  -4]} intensity={1000} />

        {/* <pointLight ref={pointLight} color={0x00b7ff} position={[0, 1, 1]} intensity={1000} /> */}
        {/* <pointLight ref={pointLight} color={0x00b7ff} position={[0, -1, -1]} intensity={100} /> */}

        {/* <mesh ref={textRef} geometry={textGeometry} material={chromeText}  position={[ 0, 0, 3]} /> */}
        <group ref={(group) => (donutsRef.current = group.children)} position={[ 0, 0, -1]}>
          {donuts}
        </group> 
    </>
  );
};




const Background = () => {
  const scene = new THREE.Scene();

  return (
    <section className={styles.main}>
    <div className={styles.main_services}>
      <Canvas style={{ width: '100%', height: '100%' }}  camera={{ position: [0, 0, 5], fov: 60}}>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true} // Отключает вращение
        enableDamping={true}
        dampingFactor={0.25}
        rotateSpeed={0.1}
        maxPolarAngle={Math.PI / 2.1}
        screenSpacePanning={true}
        minPolarAngle={0} 
            />
        <Scene scene={scene} />
      </Canvas>
    </div>
    </section>
  );
};

export default Background;