// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { v4 as uuid } from 'uuid';
import hexData from './assets/hexdata'
// import './App.css'
import Row from './components/Row'

function App() {
  // const [count, setCount] = useState(0)
  const boardRows = hexData.map((row) => <Row key={uuid()} rowArray={row} />)

  return (
      <main>
        {boardRows}
      </main>
  )
}

export default App















/*
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
*/
