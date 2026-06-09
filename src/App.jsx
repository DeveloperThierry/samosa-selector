import './App.css';
import samosa from './assets/samosa.png'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  const updateCount = () => {
    setCount(count + multiplier)
  }
  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count:{count}</h2>
      {/* <img className="samosa" src="/assets/samosa.png" alt="samosa" /> */}
      <img className="samosa" src={samosa} alt="samosa" onClick={updateCount} />
    </div>
  )
}

export default App