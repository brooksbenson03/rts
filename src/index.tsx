import { render } from 'react-dom';
import UserSearch from './classes/UserSearch';

const users = [
  {
    name: 'Brooks',
    age: 25
  },
  {
    name: 'Trevor',
    age: 20
  },
  {
    name: 'Jeff',
    age: 52
  }
]

const App = () => {
  return (
    <div>
      <UserSearch users={users} />
    </div>
  )
}

render(
  <App />,
  document.querySelector('#root')
)