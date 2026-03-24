'use client'

import React, { useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber"
import * as THREE from 'three'
import { Sphere } from "@react-three/drei"

const Scene = () => {
  const pointLight = useRef<THREE.PointLight>(null)
  const donutsRef = useRef<THREE.Group>(null)
  const pointLightOrbitRadius = 5

  const generateDonuts = (count: number) => {
    const donuts = []

    for (let i = 0; i < count; i++) {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 5,
        Math.random(),
      ]

      const donut = (
        <Sphere
          key={i}
          args={[1, 64, 32]}
          position={position}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
        >
          <meshPhysicalMaterial
            attach="material"
            color={'#171516'}
            roughness={10}
            metalness={0}
          />
        </Sphere>
      )

      donuts.push(donut)
    }
    return donuts
  }

  useFrame(() => {
    if (donutsRef.current) {
      for (let i = 0; i < donutsRef.current.children.length; i++) {
        const donut = donutsRef.current.children[i] as THREE.Mesh
        donut.rotation.x += 0.5
        donut.rotation.y += 0.5
        donut.rotation.z += 0.5
      }
    }

    if (pointLight.current) {
      const time = performance.now() * 0.0003
      const pointLightX = Math.cos(time) * pointLightOrbitRadius
      const pointLightY = Math.sin(time) * pointLightOrbitRadius
      const pointLightZ = -4
      pointLight.current.position.set(pointLightX, pointLightY, pointLightZ)
    }
  })

  const donuts = generateDonuts(70)

  return (
    <>
      <directionalLight color={0xffffff} position={[0, 0, 10]} intensity={1} castShadow />
      <directionalLight color={0xffffff} position={[-10, 0, 10]} intensity={1} castShadow />

      <pointLight ref={pointLight} color={0x9C0312} position={[-5, 0, -4]} intensity={1000} />
      <pointLight ref={pointLight} color={0x9C0312} position={[5, 0, -4]} intensity={1000} />

      <group ref={donutsRef} position={[0, 0, -1]}>
        {donuts}
      </group>
    </>
  )
}

const Background = () => {
  return (
    <section className="w-full flex items-center absolute z-[-1]">
      <div className="flex justify-center h-screen w-screen">
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 5], fov: 60 }}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            enableDamping={true}
            dampingFactor={0.25}
            rotateSpeed={0.1}
            maxPolarAngle={Math.PI / 2.1}
            screenSpacePanning={true}
            minPolarAngle={0}
          />
          <Scene />
        </Canvas>
      </div>
    </section>
  )
}

export default Background


