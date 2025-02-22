import { v4 as uuid } from 'uuid';

export default function Row({rowId, rowArray}) {

  const hexTiles = rowArray.map((hex, i) =>
    <button
      key={uuid()}
      data-hex={hex}
      className="hex-button"
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
