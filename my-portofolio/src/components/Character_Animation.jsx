import { RigidBody } from "@react-three/rapier";
import Woman from "./Woman";
import {Box} from '@react-three/drei'

export function Character(){
    return(
        <group position  = {[15, 1, 15]}>
            {/* Floor */}
                <RigidBody type = "fixed" name = 'floor' receiveShadow>
                    <Box  args = {[13, 1, 13]} receiveShadow>
                    <shadowMaterial opacity={0.5} />
                    <meshStandardMaterial color = 'lavender' receiveShadow/>
                    
                    </Box>
                </RigidBody>
            <Woman position = {[0,0.5,0]}/>
        </group>
    )
}