import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from '../contexts/AnimationContext'

export default function Irina(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Irina_face.glb')
  const {setAnimations} = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group)

  //The useEffect Hook allows you to perform side effects in your components.
  useEffect(() => {
    setAnimations(names)
  }, [names])

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature003"
          position={[-0.002, -0.002, 0.046]}
          rotation={[-0.048, 0.008, -0.001]}>
          <group name="Body003">
            <skinnedMesh
              name="Body008"
              geometry={nodes.Body008.geometry}
              material={materials['Skin.003']}
              skeleton={nodes.Body008.skeleton}
            />
            <skinnedMesh
              name="Body008_1"
              geometry={nodes.Body008_1.geometry}
              material={materials['Shirt.003']}
              skeleton={nodes.Body008_1.skeleton}
            />
            <skinnedMesh
              name="Body008_2"
              geometry={nodes.Body008_2.geometry}
              material={materials['Trousers.002']}
              skeleton={nodes.Body008_2.skeleton}
            />
            <skinnedMesh
              name="Body008_3"
              geometry={nodes.Body008_3.geometry}
              material={materials['Shoes.003']}
              skeleton={nodes.Body008_3.skeleton}
            />
            <skinnedMesh
              name="Body008_4"
              geometry={nodes.Body008_4.geometry}
              material={materials['Hair1.002']}
              skeleton={nodes.Body008_4.skeleton}
            />
            <skinnedMesh
              name="Body008_5"
              geometry={nodes.Body008_5.geometry}
              material={materials.Eye}
              skeleton={nodes.Body008_5.skeleton}
            />
          </group>
          <primitive object={nodes.Spine} />
          <primitive object={nodes.LeftUpLeg} />
          <primitive object={nodes.RightUpLeg} />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Irina_face.glb')
