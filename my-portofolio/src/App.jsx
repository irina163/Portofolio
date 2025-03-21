import './App.css'
import React, {useRef, Suspense, useMemo} from 'react';
import { DirectionalLightHelper } from 'three';
import { useControls } from 'leva';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, useHelper } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Scene from './pages/Scene.jsx'
import {Maze, generateMaze} from './pages/Maze.jsx'
import Character from './pages/Character.jsx'
import Layout from "./pages/Layout";

export const Controls = {
  jump : 'jump'
}

const maze = generateMaze(10, 10);

function LightSetup ({ lightColor, lightIntensity, lightPosX, lightPosY, lightPosZ }) {
  const directionalLightRef = useRef()
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'white')

  return (
    <>
      <ambientLight intensity={lightIntensity} />
      <directionalLight
        color={lightColor}
        position={[lightPosX, lightPosY, lightPosZ]}
        ref={directionalLightRef}
        castShadows
      />
    </>
  )
}

export default function App() {
  //Returns a memoized value. Only runs when a dependency updates
  //const cachedValue = useMemo(calculateValue(function), dependencies)
  const map = useMemo(() => [
    {name: Controls.jump, keys : ['Space']}
  ],
  [])

  const {debug} = useControls('Controls',{
    debug:false
  })

  const {lightColor, lightIntensity, lightPosX, lightPosY, lightPosZ} = useControls('Controls', {
    lightColor : "white",
    lightIntensity : {value : 0.5, min:0, max:5},
    lightPosX: { value: 6, min: -10, max: 10, step: 0.1 },
    lightPosY: { value: 3, min: -10, max: 10, step: 0.1 },
    lightPosZ: { value: 3, min: -10, max: 10, step: 0.1 }
})

    return (
      <Router>
      <Layout/>
      <div>
        <Canvas>
          <Suspense fallback = {<Loading />}>
            <Physics debug={debug} gravity={[0, -1, 0]}>
              <Routes>
                <Route exact path="/" element={ <Scene />} />
                <Route path="/character" element={<Character />} />
                <Route path="/maze" element={<Maze maze = {maze}/>} />
              </Routes>
              
            </Physics>
          </Suspense>

          <LightSetup
            lightColor={lightColor}
            lightIntensity={lightIntensity}
            lightPosX={lightPosX}
            lightPosY={lightPosY}
            lightPosZ={lightPosZ}
          />
          <OrbitControls />
        </Canvas>
      </div>
      </Router>
    )
}

function Loading(){
  <Html>
    return <h2>🌀 Loading...</h2>;
  </Html>
}