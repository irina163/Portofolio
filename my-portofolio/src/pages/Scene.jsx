import React, {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber'
import {MeshWobbleMaterial, Box} from '@react-three/drei'
import { RigidBody} from '@react-three/rapier';
import {Bell } from '../components/Bell'

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
        <RigidBody>
            <Cube {...props} ref = {ref}/>
        </RigidBody>
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

        <RigidBody colliders = 'ball'>
            <Sphere {...props} ref = {ref}/>
        </RigidBody>
    )
}

export default function Scene(){

    const [isHovered, setIsHovered] = useState(false)
    const cube = useRef()
    function jump(){
        cube.current.applyImpulse({x:0, y:3, z:0})
    }

    return(
        <>
            <RotatingCube position = {[-2, 1, -2]} size = {[1,1.5,3]} color = {"#6be092"} rotation = {[10,0,0]} />
            <RotatingCube position = {[-2, 5, -2]} color = {'pink'} />
            <RotatingSphere position = {[3, 4, -2]} size = {[1.7, 30, 30]} color = {'red'} />
            <RotatingSphere position = {[2.7, 7, -2]} color = {'hotpink'}/>
            <RigidBody colliders = 'hull'>
                <Bell />
            </RigidBody>
            
            {/* Physics engine object. Fixed = won't move, but it will interact in collisions*/}
            <RigidBody type = "fixed">
                <Box args = {[13, 1, 13]} >
                <meshStandardMaterial color = 'beige' />
                </Box>
            </RigidBody>

            <RigidBody position = {[-3, 0, 0]} ref = {cube}>
                <Box onPointerEnter = { () => setIsHovered(true)}
                    onPointerLeave = {() => setIsHovered(false)}
                    onClick = {jump}
                >
                    <meshStandardMaterial color = {isHovered ? 'orange': 'royalblue'} />
                </Box>
            </RigidBody>
        </>
    )
}