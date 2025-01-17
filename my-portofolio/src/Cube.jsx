import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber'

export function Cube(){
    return(
        <div id = 'canvas-container'>
            {/* Canvas component sets up a scene and a camera and renders the scene every frame -> No render loop */}
            <Canvas>
                {/* Mesh holds the geometry and material for a 3D shape */}
                <mesh rotation={[0,10,0]}>
                    {/* Create a new mesh with BoxGeometry and MeshStandardMaterial 
                        Args passes optional arguments to BoxGeometry constructor
                        The attach attribute is used to bind the component either to 
                        the mesh's geometry or material property. 
                        Not necessary now as it'd be automatically inferred*/}
                    <boxGeometry args = {[2,2,2]}/>
                    <meshStandardMaterial color="#6be092"/>
                </mesh>

                {/* Following line is equivalent to:
                        const light = new THREE.AmbientLight()
                        light.intensity = 0.1 
                    in THREE.js. Setting props on Fiber component is like 
                    setting the same-named propoerty on the three.js instance*/}
                <ambientLight intensity={0.1} />
                <directionalLight color= 'red' position = {[0,0,5]} />
            </Canvas>
        </div>
    )
}
