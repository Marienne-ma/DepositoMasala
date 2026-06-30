import { useState } from 'react'

import './App.css'
import { Padre } from './components/Padre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Padre></Padre>
      </section>

    </>
  )
}

export default App
