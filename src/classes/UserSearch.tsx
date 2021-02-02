import { Component } from 'react'

interface User {
  name: string
  age: number
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string
  user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  }

  onClick = () => {
    const foundUser = this.props.users.find(u => {
      return u.name === this.state.name
    })

    this.setState({ user: foundUser })
  }

  render() {
    const { user, name } = this.state
    return (
      <div>
        <h3>User Search</h3>
        <p>Name: {user && user.name}</p>
        <p>Age: {user && user.age}</p>
        <input value={name} onChange={e => this.setState({ name: e.target.value })} /> <br />
        <button onClick={this.onClick}>Search users</button>
      </div>
    )
  }
}

export default UserSearch;