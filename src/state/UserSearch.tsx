import { useState } from 'react'

const users = [
  { name: 'Brooks', age: 25 },
  { name: 'Ellie', age: 23 },
  { name: 'Max', age: 25 }
]

export const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string, age: number } | undefined>()
  const onClick = () => {
    const foundUser = users.find(u => {
      return u.name === name
    })
    setUser(foundUser)
  }

  return (
    <div>
      <h3>User Search</h3>
      Name: {user && user.name} <br />
      Age: {user && user.age} <br />
      <input value={name} onChange={e => setName(e.target.value)} /> <br />
      <button onClick={onClick}>Search users</button>
    </div>
  )
}