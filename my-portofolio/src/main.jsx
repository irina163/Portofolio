import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Leva} from 'leva'
import { CharacterAnimationsProvider } from './contexts/AnimationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Leva/>
    <CharacterAnimationsProvider>
      <App />
    </CharacterAnimationsProvider>
  </StrictMode>,
)
