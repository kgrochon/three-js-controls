import { PerspectiveCamera, TrackballControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import { ReactNode, useEffect, useState } from 'react';
import { ACESFilmicToneMapping } from "three";

export const ThreeCanvas = ({ children } : {children?: ReactNode | undefined}) => {
    const [boardWidth, ] = useState(36);
    const [, setSizes] = useState({
        top: window.innerHeight / window.innerWidth * (boardWidth / 2),
        right: boardWidth / 2,
        bottom: window.innerHeight / window.innerWidth * (-boardWidth / 2),
        left: -boardWidth / 2
    });
    
    function handleResize() {
        // Update sizes
        setSizes({ 
            top: window.innerHeight / window.innerWidth * (boardWidth / 2),
            right: boardWidth / 2,
            bottom: window.innerHeight / window.innerWidth * (-boardWidth / 2),
            left: -boardWidth / 2
        });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Canvas gl={{ antialias: true, toneMapping: ACESFilmicToneMapping }}>   
            <PerspectiveCamera
                fov={60}
                near={1}
                far={250}
                position={[0, 0, 30]}
                makeDefault={true}
                aspect={window.innerWidth / window.innerHeight}
            />
            <ambientLight intensity={.6}/>
            <directionalLight position={[0, 100, 0]} args={["white", .9]} />
            <TrackballControls />      
            {children}
        </Canvas>
    );
};
