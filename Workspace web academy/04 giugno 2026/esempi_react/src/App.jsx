import { useState } from 'react'

import './App.css'

import {Callback} from './components/Callback'
import {TeamList} from './components/MapList'
import TaskFilter from './components/FilterList'
import { LogEveryRender } from './components/LogEveryRender'
import { JsonPlaceholder } from './components/JsonPlaceholder'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
  
    setCount((count) => count + 1);//in questo modo salva direttamente in memoria count e la aggiorna, questo non avviene nel setCount senza arrow func
  }

   const handleCountMinus = () => {
   
    setCount((count) => count - 1);
  }


  //per TaskFilter
  const tasks = [
  {
    id: 1,
    title: "Studiare React",
    completed: true,
  },
  {
    id: 2,
    title: "Fare esercizi JSX",
    completed: false,
  },
  {
    id: 3,
    title: "Leggere la documentazione",
    completed: true,
  },
  {
    id: 4,
    title: "Creare una Todo App",
    completed: false,
  },
];



  return (
    <>
      <section id="center">
        <JsonPlaceholder />
        <button
          type="button"
          className="counter"
          onClick={handleCount}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={handleCountMinus}
        >
          Decrease {count}
        </button>
        <Callback/>
      <TeamList/>

      <TaskFilter tasks={tasks} showOnlyPending={true}/>
      <LogEveryRender />
      </section>

      

      

      

    </>
  )
}

export default App
