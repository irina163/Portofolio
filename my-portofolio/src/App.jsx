import './App.css'
import { Canvas } from '@react-three/fiber'
import Scene from './pages/Scene.jsx'
import {Game} from './components/Game.jsx'
import {Maze, generateMaze} from './pages/Maze.jsx'
import Character from './pages/Character.jsx'
import { Suspense, useMemo } from 'react'
import { useControls } from 'leva';
import { Html, OrbitControls } from '@react-three/drei'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import { Physics } from '@react-three/rapier'

export const Controls = {
  jump : 'jump'
}

const maze = generateMaze(10, 10);

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
      <Router> {/* Place Router outside of the Canvas */}
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

export default App
