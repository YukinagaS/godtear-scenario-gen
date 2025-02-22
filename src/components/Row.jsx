import { v4 as uuid } from 'uuid';

export default function Row({rowArray}) {

  const hexTiles = rowArray.map((hex) => <button key={uuid()}  data-hex={hex} onClick={toggleActive}>X:{hex[0]}<br/> Z:{hex[1]}</button>)

  function toggleActive(event) {
    event.currentTarget.classList.toggle("btn-active");
  }

  return (
    <div>
      {hexTiles}
    </div>
  )
}
