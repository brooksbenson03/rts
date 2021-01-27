import { link } from 'fs'
import { useState } from 'react'

export const PartyGuests: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const onClick = () => {
    setName('')
    setGuests([...guests, name])
  }

  return (
    <div>
      <h3>Party Guests</h3>
      <ul>
        {guests.map(g => <li key={g}>{g}</li>)}
      </ul>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Add guest</button>
    </div>
  )
}