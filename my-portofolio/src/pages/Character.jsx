import { RigidBody} from "@react-three/rapier";
import Woman from "../components/Woman";
import Irina from "../components/Irina.jsx";
import Irina2 from "../components/Irina.jsx";
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
            <Woman position = {[0,0.5,0]}/>
            <Irina position = {[1,0.5,1]}/>
        </>
    )
}