import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Irina(props) {
  const { nodes, materials } = useGLTF('./models/Irina_face14.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.EyeR.geometry} material={materials.Eye} />
      <mesh castShadow receiveShadow geometry={nodes.EyeL.geometry} material={materials.Eye} />
      <mesh castShadow receiveShadow geometry={nodes.ShoeL.geometry} material={materials.Shoes} />
      <mesh castShadow receiveShadow geometry={nodes.ShoeR.geometry} material={materials.Shoes} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials.Hair1}
      />
      <mesh castShadow receiveShadow geometry={nodes.Body002.geometry} material={materials.Skin} />
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
