import './App.css'
import { Canvas } from '@react-three/fiber'
import {Physics} from '@react-three/rapier'
import Scene from './components/Scene.jsx'
import { Suspense } from 'react'

function App() {

  return (
    <Canvas>
      <Suspense>
        <Physics debug gravity = {[0,-1,0]}>
          <Scene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
