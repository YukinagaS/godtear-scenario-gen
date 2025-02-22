// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { v4 as uuid } from 'uuid';
import hexData from './assets/hexdata'
// import './App.css'
import Row from './components/Row'

function App() {
  // const [count, setCount] = useState(0)
  const boardRows = hexData.map((row, i) => <Row key={uuid()} rowId={i} rowArray={row} />)

  function copyCoordinates() {
    let copyArray = []
    const allActive = document.querySelectorAll(".btn-active");
    allActive.forEach((x) => copyArray.push(`{${x.getAttribute("data-hex")}}`));
    // const copyArray = allActive.map((x) => `{${x.getAttribute("data-hex")}}`)
    console.log(copyArray);

    navigator.clipboard.writeText(copyArray);

    alert("Copied selection to clipboard!");
  }

  function clearSelection() {
    const allActive = document.querySelectorAll(".btn-active");
    allActive.forEach((element) => element.classList.remove("btn-active"));
  }

  return (
      <main>
        <header>
          <h1>Custom Scenario Generator</h1>
        </header>

        {boardRows}

        <div className="button-tray">
          <button className="btn-control" onClick={copyCoordinates}>Copy Coordinates</button>
          <button className="btn-control" onClick={clearSelection}>Clear Selection</button>
        </div>
      </main>
  )
}

export default App
