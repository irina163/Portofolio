import './App.css'
import { Canvas } from '@react-three/fiber'
import {Physics} from '@react-three/rapier'
import Scene from './components/Scene.jsx'
import {Game} from './components/Game.jsx'
import { Suspense } from 'react'
import { useControls } from 'leva';


function App() {
const {debug} = useControls('Controls',{
  debug:false
})
  return (
    // Canvas component sets up a scene and a camera and renders the scene every frame -> No render loop 
    <Canvas>
      <Suspense>
        <Physics debug = {debug} gravity = {[0,-1,0]}>
          <Scene />
          <Game />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
