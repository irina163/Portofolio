import './App.css'
import React, {useRef, Suspense, useMemo, useState} from 'react';
import { DirectionalLightHelper } from 'three';
import { useControls } from 'leva';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, useHelper, Text } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

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

const TextOverlay = ({ text }) => {
  const location = useLocation();
  if (location.pathname === "/") {
    text = (<>Hello! My name is Irina, and I am a Computer Science graduate.<br/>I'm building this website to showcase my coding knowledge, and to practice graphics.</>);}
  return (
    <div className="text-overlay">
      {text}
    </div>
  );
};

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

  const {color, intensity, posX, posY, posZ} = useControls('Controls', {
    color : "white",
    intensity : {value : 0.5, min:0, max:5},
    posX: { value: 6, min: -10, max: 10, step: 0.1 },
    posY: { value: 3, min: -10, max: 10, step: 0.1 },
    posZ: { value: 3, min: -10, max: 10, step: 0.1 }
})

    return (
      <Router>
      <Layout/>
      <div style={{ position: 'relative' }}>
        
      <TextOverlay />
        <Canvas>
          <Suspense fallback = {<Loading />}>
            <Physics debug={debug} gravity={[0, -1, 0]}>
              <Routes>
                <Route path="/" element={<Character />}/>
                <Route path="/maze" element={<Maze maze = {maze}/>}/>
              </Routes>
              
            </Physics>
          </Suspense>

          <LightSetup
            lightColor={color}
            lightIntensity={intensity}
            lightPosX={posX}
            lightPosY={posY}
            lightPosZ={posZ}
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