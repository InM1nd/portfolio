import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei"
import { useRef, useState } from 'react'
// import { FrontSide } from "three";
// import { Canvas, useThree } from 'react-three-fiber';



const RoundedTablet = () => {

    const links = [
        { name: 'Linkedin', url: 'https://www.Linkedin.com', color: '#ff0000'},
        { name: 'Behance', url: 'https://www.Behance.com', color: '#1403fd' },
        { name: 'Google', url: 'https://www.Google.com' , color: '#ff00ea' },
        { name: 'Facebook', url: 'https://www.Facebook.com', color: '#33ff00' },
        { name: 'YouTube', url: 'https://www.YouTube.com', color: '#ff1100' },
      ];

      const [hoveredLink, setHoveredIndex] = useState(null);
      

      const handleTextClick = (url) => {
        window.open(url, '_blank');
      };
    
      const handleTextHover = (index) => {
        setHoveredIndex(index);
        
      };
    
      const handleTextLeave = () => {
        setHoveredIndex(null);
        
      };     
 
    return (
    
    <group>
      <mesh>
        <boxGeometry args={[2, 3, 0.2]} />
        <meshPhysicalMaterial
        attach="material"
        color={hoveredLink !== null ? links[hoveredLink].color : "#7e5a5ac"}
        transparent
        opacity={0.5}
        roughness={0}
        metalness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.5}
        />
            
      </mesh>

      <group position={[0, 0, 0.11]}>
        {links.map((link, index) => (
          <Text
            key={index}
            position={[0, (index - (links.length - 1) / 2) * 0.5, 0]}
            onClick={() => handleTextClick(link.url)}
            onPointerOver={() => handleTextHover(index)}
            onPointerOut={handleTextLeave}
            fontSize={hoveredLink === link ? 0.2 : 0.18}
            anchorX="center"
            anchorY="middle"

            color={hoveredLink === index ? link.color : 'white'}
            pointerEvents="auto"
            cursor="pointer"
          >
            {link.name}
          </Text>
        ))}
      </group>
    </group>
      
    );
  };

  export default RoundedTablet