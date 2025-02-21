import { v4 as uuid } from 'uuid';

export default function Row({rowArray}) {

  const hexTiles = rowArray.map((hex) => <button key={uuid()}>X:{hex[0]}<br/> Z:{hex[1]}</button>)

  return (
    <div>
      {hexTiles}
    </div>
  )
}
