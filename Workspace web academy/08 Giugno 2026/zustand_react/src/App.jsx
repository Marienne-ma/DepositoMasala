import { useState } from 'react'
import './App.css'
import { UserProfile } from './components/UserProfile'
import { LoginButton } from './components/LoginButton'
import { Object } from './components/Object'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile/>
      <LoginButton/>
      <Object/>
    </>
  )
}

export default App
