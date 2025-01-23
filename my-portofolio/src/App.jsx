import './App.css'
import { Canvas } from '@react-three/fiber'
import {Physics} from '@react-three/rapier'
import Scene from './components/Scene.jsx'
import {Game} from './components/Game.jsx'
import {Character} from './components/Character_Animation.jsx'
import { Suspense, useMemo } from 'react'
import { useControls } from 'leva';
import { KeyboardControls, Html } from '@react-three/drei'

export const Controls = {
  jump : 'jump'
}

function App() {

  //Returns a memoized value. Only runs when a dependency updates
  //const cachedValue = useMemo(calculateValue(function), dependencies)
  const map = useMemo(() => [
    {name: Controls.jump, keys : ['Space']}
  ],
  [])
  const {debug} = useControls('Controls',{
    debug:false
  })
    return (
      <KeyboardControls map = {map}>
        {/* Canvas component sets up a scene and a camera and renders the scene every frame -> No render loop  */}
        <Canvas shadows>
          <Suspense fallback = {<Loading />}>
            <Physics debug = {debug} gravity = {[0,-1,0]}>
              <Scene />
              <Game />
              <Character />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    )
}

function Loading(){
  <Html>
    return <h2>🌀 Loading...</h2>;
  </Html>
}

export default App
