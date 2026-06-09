import './App.css';
import samosa from './assets/samosa.png'
const App = () => {

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count:</h2>
      {/* <img className="samosa" src="/assets/samosa.png" alt="samosa" /> */}
      <img className="samosa" src={samosa} alt="samosa" />
    </div>
  )
}

export default App