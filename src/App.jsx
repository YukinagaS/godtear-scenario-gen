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

  function collectCoordinates() {
    let returnArray = []
    const allActive = document.querySelectorAll(".btn-active");
    allActive.forEach((x) => returnArray.push(x.getAttribute("data-hex")));
    console.log(returnArray);
  }

  function clearActive() {
    const allActive = document.querySelectorAll(".btn-active");
    allActive.forEach((element) => element.classList.remove("btn-active"));
  }

  return (
      <main>
        {boardRows}
        <button onClick={collectCoordinates}>Generate Array</button>
        <button onClick={clearActive}>Clear Selections</button>
      </main>
  )
}

export default App
