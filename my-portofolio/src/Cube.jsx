import React, {useRef} from 'react';
import {Canvas} from '@react-three/fiber'

// Currently a square :)
export function Cube(){
    return(
        <div id = 'canvas-container'>
            {/* Canvas component sets up a scene and a camera and renders the scene every frame -> No render loop */}
            <Canvas>
                {/* Mesh holds the geometry and material for a 3D shape */}
                <mesh>
                    {/* Create a new mesh with BoxGeometry and MeshStandardMaterial */}
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}
