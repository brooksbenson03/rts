import { Child, ChildFC } from './Child'

const Parent = () => {
  return (
    <div>
      <Child color="red" />
      <ChildFC color="blue">Text</ChildFC>
    </div>
  )
}

export default Parent