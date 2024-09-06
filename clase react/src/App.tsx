import { useState } from 'react'
import './App.css'
import Acordion from './components/Acordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Que dice la banda</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <p>
          {count}
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
      <Acordion></Acordion>
    </>
  )
}

export default App
