import React, {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber'
import {MeshWobbleMaterial, OrbitControls, useHelper} from '@react-three/drei'
import { DirectionalLight, DirectionalLightHelper } from 'three';
import { useControls } from 'leva';
import {Bell } from './Bell'

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
            <MeshWobbleMaterial factor = {0.1} speed = {11} color = {color}/>
        </mesh>
    )
})

function RotatingCube(props){
    //Persist valuess between renders. 
    //Store a mutable value that does not cause a re-render when updated.
    //Also, allows to directly access and manipulate the underlying three.js object
    const ref = useRef()

    useFrame ((state, delta) =>{
        if (ref.current) {
            ref.current.rotation.x += 2* delta
        }
    })

    return(

        <Cube {...props} ref = {ref}/>
    )
}

const Sphere = React.forwardRef((props, ref) => {
    const {position, size, color} = props

    const [isHovered, setIsHovered] = useState(false)
    return(
        <mesh position = {position} 
            ref = {ref} 
            onPointerEnter={(event) => {
                event.stopPropagation()
                setIsHovered(true)}}
            onPointerLeave={() => setIsHovered(false)}>
            <sphereGeometry args = {size} />
            <meshStandardMaterial color = {isHovered ? 'orange': color} wireframe/>
           
        </mesh>
    )
})

function RotatingSphere(props){
    const ref = useRef()

    useFrame ((state, delta) =>{
        if (ref.current) {
            ref.current.rotation.x += 2* delta
        }
    })

    return(

        <Sphere {...props} ref = {ref}/>
    )

}

export default function Scene(){
    const directionalLightRef = useRef()
    const {lightColor, lightIntensity, lightPosX, lightPosY, lightPosZ} = useControls('Controls', {
        lightColor : "white",
        lightIntensity : {value : 0.5, min:0, max:5},
        lightPosX: { value: 6, min: -10, max: 10, step: 0.1 },
        lightPosY: { value: 3, min: -10, max: 10, step: 0.1 },
        lightPosZ: { value: 3, min: -10, max: 10, step: 0.1 }
    })
    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'white')
    return(
        // Canvas component sets up a scene and a camera and renders the scene every frame -> No render loop 
        <>
            <group>
                <RotatingCube position = {[-2, -2, -2]} size = {[1,1.5,3]} color = {"#6be092"} rotation = {[10,0,0]} />
                <RotatingCube position = {[-2, 2, -2]} color = {'pink'} />
                <RotatingSphere position = {[3, -1, -2]} size = {[1.7, 30, 30]} color = {'red'} />
                <RotatingSphere position = {[3, 2, -2]} color = {'hotpink'}/>
                <Bell />


                {/* Following line is equivalent to:
                    const light = new THREE.AmbientLight()
                    light.intensity = 0.1 
                in THREE.js. Setting props on Fiber component is like 
                setting the same-named propoerty on the three.js instance*/}
                <ambientLight intensity={lightIntensity} />
                <directionalLight color = {lightColor} position = {[lightPosX, lightPosY, lightPosZ]} ref = {directionalLightRef} castShadows />
            </group>
        
        <OrbitControls   />
        </>

    )
}
