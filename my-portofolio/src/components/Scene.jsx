import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber'

//Allows function component to get a ref
const Cube = React.forwardRef((props, ref) => {
    const {position, size, color, rotation} = props
    
    return(
        // Mesh holds the geometry and material for a 3D shape
        <mesh position = {position} rotation={rotation} ref = {ref}>
            {/* Create a new mesh with BoxGeometry and MeshStandardMaterial 
                Args passes optional arguments to BoxGeometry constructor
                The attach attribute is used to bind the component either to 
                the mesh's geometry or material property. 
                Not necessary now as it'd be automatically inferred*/}
            <boxGeometry args = {size}/>
            <meshStandardMaterial color={color} />
        </mesh>
    )
})

function RotatingCube(props){
    const ref = useRef()

    useFrame ((state, delta) =>{
        if (ref.current) {
            ref.current.rotation.x += delta
        }
    })

    return(
        <Cube {...props} ref = {ref}/>
    )
}

function Sphere(props){
    const {position, size, color} = props
    return(
        <mesh position = {position} >
            <sphereGeometry args = {size} />
            <meshStandardMaterial color= {color} />
        </mesh>
    )
}

export default function Scene(){
    
    return(
        // Canvas component sets up a scene and a camera and renders the scene every frame -> No render loop 
        <div id = 'canvas-container'>
        <Canvas>
            <group>
                <RotatingCube position = {[-2, -2, -2]} size = {[1,1.5,3]} color = {"#6be092"} rotation = {[10,0,0]} />
                <Cube position = {[-2, 2, -2]} color = {'teal'} />
                <Sphere position = {[3, -1, -2]} size = {[1.7, 30, 30]} color = {'red'} />
                <Sphere position = {[3, 2, -2]}/>

                {/* Following line is equivalent to:
                    const light = new THREE.AmbientLight()
                    light.intensity = 0.1 
                in THREE.js. Setting props on Fiber component is like 
                setting the same-named propoerty on the three.js instance*/}
                <ambientLight intensity={0.1} />

                <directionalLight color = 'lightblue' position = {[50,10,10]} />
            </group>
        </Canvas>
        </div>

    )
}
