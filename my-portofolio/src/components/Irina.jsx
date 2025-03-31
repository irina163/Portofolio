
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Irina (props) {
  const { nodes, materials } = useGLTF('./models/Irina_face14.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ShoeL.geometry}
        material={nodes.ShoeL.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ShoeR.geometry}
        material={nodes.ShoeR.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={nodes.NurbsPath.material}
        position={[0, 1.571, 0.119]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={nodes.NurbsPath.material}
        position={[0, 1.571, 0.119]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath002.geometry}
        material={nodes.NurbsPath.material}
        position={[0, 1.571, 0.119]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath003.geometry}
        material={nodes.NurbsPath.material}
        position={[0, 1.571, 0.119]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath004.geometry}
        material={nodes.NurbsPath.material}
        position={[-0.001, 1.606, 0.059]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath005.geometry}
        material={nodes.NurbsPath.material}
        position={[0.045, 1.598, 0.06]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath006.geometry}
        material={nodes.NurbsPath.material}
        position={[0.059, 1.597, 0.014]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath007.geometry}
        material={nodes.NurbsPath.material}
        position={[0, 1.575, 0.115]}
        rotation={[-0.008, -0.351, -2.565]}
        scale={0.058}
      />
      <mesh castShadow receiveShadow geometry={nodes.Body.geometry} material={materials.Skin}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EyeL.geometry}
          material={nodes.EyeL.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EyeR.geometry}
          material={nodes.EyeR.material}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Shirt.geometry} material={materials.Shirt} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trousers.geometry}
        material={materials.Trousers}
      />
    </group>
  )
}

useGLTF.preload('./models/Irina_face14.glb')