import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { quat, RigidBody } from "@react-three/rapier";
import { useState, useRef} from "react";
import * as THREE from "three";

export function Game(){
    const [isHovered, setIsHovered] = useState()
    const cube = useRef()
    const kicker = useRef()

    const [start, setStart] = useState(false)

    function jump(){
        cube.current.applyImpulse({x:0, y:3, z:0})
    }

    useFrame ((_state, delta) =>{
        if(!start)
            return
        //Quaternions are weird numbers of the form a + bi + cj + dk with 1, i, j, k eing bais vectors. 
        //They are used to calculate rotation neatley in computer graphics

        const currRotation = quat(kicker.current.rotation())
        const incrementRotation = new THREE.Quaternion().setFromAxisAngle(
            //This is the 3D rotation applied
            new THREE.Vector3 (0,1,0), 
            delta *2
        )
        currRotation.multiply(incrementRotation)
        //Kinematic object => Don't apply impulse, but use setNextKinematicRotation
        kicker.current.setNextKinematicRotation(currRotation)
    })

    return(
        <group position = {[-5,0,-13]}>
        {/* Floor */}
        <RigidBody type = "fixed">
            <Box  args = {[13, 1, 13]} >
            <meshStandardMaterial color = 'springgreen' />
            </Box>
        </RigidBody>

        {/* Cube */}
        <RigidBody position = {[-3, 0, 0]} ref = {cube}>
            <Box onPointerEnter = { () => setIsHovered(true)}
                onPointerLeave = {() => setIsHovered(false)}
                onClick = {() => setStart(true)}
            >
                <meshStandardMaterial color = {isHovered ? 'orange': 'royalblue'} />
            </Box>
        </RigidBody>

        <RigidBody type = 'kinematicPosition' position = {[0, 0.75, 0]} ref = {kicker}>
            <group position={[2.5, 0, 0]}>
                <Box args = {[5, 0.5, 0.5]}>
                    <meshStandardMaterial color = 'peachpuff' />
                </Box>
            </group>
        </RigidBody>

        </group>
    )
}