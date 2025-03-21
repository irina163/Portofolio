import { RigidBody, Physics } from "@react-three/rapier";
import Woman from "../components/Woman";
import {Box, OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { Html } from '@react-three/drei'
import { useControls } from 'leva';

export default function Character(){
    const {debug} = useControls('Controls',{
        debug:false
      })

    return(
        <>
                
        {/* Floor */}
            <RigidBody type = "fixed" name = 'floor' receiveShadow>
                <Box  args = {[13, 1, 13]} receiveShadow>
                <shadowMaterial opacity={0.5} />
                <meshStandardMaterial color = 'lavender' receiveShadow/>
                
                </Box>
            </RigidBody>
            <Woman position = {[0,0.5,0]}/>
            <ambientLight intensity={0.5}/>
            <directionalLight color = {"white"} position = {[6, 3, 3]} castShadows />
            
        </>

    )
}

function Loading(){
  <Html>
    return <h2>🌀 Loading...</h2>;
  </Html>
}