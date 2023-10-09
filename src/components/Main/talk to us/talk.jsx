import React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows} from "@react-three/drei"

import styles from "./talk.module.scss"; 
import RoundedTablet from "./Tablet.jsx"

const About = () => {
    return (

        <div className={styles.talk}>
            <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[1,3,3]} />
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
                <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
                <RoundedTablet/>
            </Canvas>
        </div>
    )
}

export default About 