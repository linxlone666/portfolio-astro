import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Edges } from "@react-three/drei";
import { Outlines } from "@react-three/drei";
import * as THREE from "three";
import { depth } from "three/tsl";

const shape = new THREE.Shape();
shape.moveTo (0,1)
shape.lineTo (-1,-1)
shape.lineTo (1,-1)
shape.closePath()  //close line

export default function Icon_3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ 
        width: "580px", 
        height: "325px",
        background: "black",
        border: "4px solid white",
        borderRadius: "10px",

        }}
    >
      <ambientLight intensity={70} />
        <OrbitControls
            
            autoRotate
            autoRotateSpeed={1}  //time animation
            minDistance={1}      // limid zoom in
            maxDistance={5.5}    // limid zoom out   
            />   

      <mesh>
          <coneGeometry args={[2,3.3,5]} />

        <meshStandardMaterial 
        color="#ff7300"        // object color
         /> 

        <Edges 
        color="green"            // border object
         /> 

        <Outlines
        thickness={2}
        color="white"/>

      </mesh>
    </Canvas>
  );
}
