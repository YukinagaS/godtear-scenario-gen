import { v4 as uuid } from 'uuid';

export default function Row({rowArray}) {

  const hexTiles = rowArray.map((hex) => <button key={uuid()}  onClick={toggleActive}>X:{hex[0]}<br/> Z:{hex[1]}</button>)

  function toggleActive(event) {
    event.currentTarget.classList.toggle("btn-active");
    console.log(event.currentTarget);

  }

  return (
    <div>
      {hexTiles}
    </div>
  )
}
