const EventComponent: React.FC = () => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, 'was typed')
  }

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('The drag element is being dragged')
  }

  return (
    <div>
      <h1>Event Component</h1>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Draggable element</div>
    </div>
  )
}

export default EventComponent