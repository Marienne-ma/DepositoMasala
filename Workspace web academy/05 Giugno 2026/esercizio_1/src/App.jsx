import { useState } from 'react'

import './App.css'

import { JsonPlaceholderGet } from './components/JsonPlaceholderGet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <JsonPlaceholderGet/>
      </section>

    </>
  )
}

export default App
