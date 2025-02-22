import { v4 as uuid } from 'uuid';

export default function Row({rowId, rowArray}) {

  function markCenterHexes(x, z) {
    if ([0.23, 2.78, -1.05, 1.5].includes(x) && [1.16, -1.13].includes(z)) {
      return "hex-button hex-board-center"
    } else {
      return "hex-button"
    }
  }

  const hexTiles = rowArray.map((hex, i) =>
    <button
      key={uuid()}
      data-hex={hex}
      className={markCenterHexes(hex[0], hex[1])}
      onClick={toggleActive}>
        X:{hex[0]}<br/> Z:{hex[1]}
    </button>)

  function toggleActive(event) {
    event.currentTarget.classList.toggle("btn-active");
  }

  return (
    <div className={`row ${rowId % 2 === 1 ? "row-offset" : "row-standard"}`}>
      {hexTiles}
    </div>
  )
}
