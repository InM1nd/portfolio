import React , { useRef, useState, useEffect } from "react"
import { OrbitControls, RenderTexture, Text, PerspectiveCamera, ContactShadows, SpotLight, Torus, Sphere, Capsule } from "@react-three/drei"
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { MeshStandardMaterial, TextureLoader } from 'three';
import { PointLight } from "three";

import Font from '../../../components/Utils/fonts/Bebas_Neue_Regular.json';
// import gradientTexture from '../../../img/other/DayEnvironmentHDRI035_1K-TONEMAPPED.jpg';
import gradientTexture from '../../../img/other/Foil003_1K-JPG_Metalness.jpg';

import styles from "./Background.module.scss"

const Scene = ({   }) => {

  const textRef = useRef();
  const donutsRef = useRef([]);

  const fontLoader = new FontLoader();
  const font = fontLoader.parse(Font);

  // const material = new THREE.MeshNormalMaterial()

  const chromeText = new MeshStandardMaterial({
    color: "##121212", // Базовый цвет (можете оставить белый, так как текстура будет покрывать его)
    // metalness: 0.3,     // Металличность на максимуме для эффекта хрома
    roughness: 0.1,     // Шероховатость на минимуме
    // wireframe: true,
    map: new THREE.TextureLoader().load(gradientTexture)
  });

  const chromeDonut = new MeshStandardMaterial({
    color: "#121212", // Базовый цвет (можете оставить белый, так как текстура будет покрывать его)
    metalness: 0,     // Металличность на максимуме для эффекта хрома
    roughness: 1,     // Шероховатость на минимуме
    // wireframe: true,
    
  });

 

  // Text

    const createTextGeometry = (font) => {
    const textGeometry = new TextGeometry('Oleksandr Zabolotnyi', {
      font: font,
      size: 1.2,
      height: 0.4,
      curveSegments: 115,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 10,
    });

    textGeometry.center();
    return textGeometry;
    
  };

  const textGeometry = createTextGeometry(font);

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
          // scale={[
          //   Math.random() / 2, // Adjusted to ensure a more spherical shape
          //   Math.random() / 2,
          //   Math.random() / 1.1,
          // ]}
            >
            <meshPhysicalMaterial
             onPointerOver={() => setHover(true)}
             onPointerOut={() => setHover(false)}
              attach="material"
              color={'#121212'}
              // transparent
              // opacity={0.9}
              roughness={10}
            //   metalness={1}
              // clearcoat={0}
              // clearcoatRoughness={0.9}
            />
            </Sphere>     
      );

      donuts.push(donut);
    }
    return donuts;
  };

  
//   useFrame(() => {
//     for (let i = 0; i < donutsRef.current.length; i++) {
//       const donut = donutsRef.current[i];
//       donut.rotation.x += 0.0003; 
//       donut.rotation.y += 0.0003; 
//       donut.rotation.z += 0.0003; 
  
//       donut.position.x += 0.1; 
//     }
//   });

  const donuts = generateDonuts(70);
  // Generate all stuff



  return (
    <>
        <directionalLight color={0xffffff}  position={[0, 0, 10]} intensity={4} castShadow  />
        <directionalLight color={0xffffff}  position={[-10, 0, 10]} intensity={1} castShadow  />
        {/* <directionalLight color={0xffffff}  position={[10, 0, 10]} intensity={1} castShadow  /> */}
        {/* <directionalLight color={0xffffff}  position={[0, 0, -10]} intensity={1} castShadow  /> */}
        {/* <directionalLight color={0x0099ff}  position={[-5, 0, 10]} intensity={10} castShadow  /> */}
        {/* <directionalLight color={0x00F0FF}  position={[5, 0, 10]} intensity={10} castShadow  /> */}
        {/* <directionalLight color={0x00F0FF}  position={[0, 0, 10]} intensity={10} castShadow  /> */}

        {/* <directionalLight color={0x0099ff}  position={[-5, 0, -10]} intensity={1000} castShadow  /> */}
        {/* <directionalLight color={0x00F0FF}  position={[5, 0, -10]} intensity={20} castShadow  /> */}
        {/* <directionalLight color={0x00F0FF}  position={[0, 0, -10]} intensity={1000} castShadow  /> */}

        {/* <pointLight color={0x0099ff}  position={[0, 0,  0]} intensity={1000} castShadow  /> */}
        {/* <pointLight color={0x00F0FF}  position={[0, 0,  10]} intensity={1000} castShadow  /> */}

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