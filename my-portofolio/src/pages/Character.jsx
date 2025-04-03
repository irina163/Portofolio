import { RigidBody} from "@react-three/rapier";
import Irina from "../components/Irina.jsx";
import {Box} from '@react-three/drei'

export default function Character(){
    return(
        <>
            <RigidBody type = "fixed" name = 'floor' receiveShadow>
                <Box  args = {[13, 1, 13]} receiveShadow>
                <shadowMaterial opacity={0.5} />
                <meshStandardMaterial color = 'lavender' receiveShadow/>
                </Box>
            </RigidBody>
            <Irina position = {[1,0.5,1]}/>
        </>
    )
}