import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toggleTodo, updateTodo } from '../slices/todoSlice'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
  background-color: ${props => props.isDone ? '#1ED64C' : '#C42021'};
  color: #ffffff;
  padding: 5px 10px;
`

const Input = styled.input`
  width: 100%;
`

const Buttons = styled.div`
  display: flex;
`

const Button = styled.button`
  min-width: 100px;
`

export const Todo = ({ todo }) => {
  const [name, setName] = useState(todo.name || '')

  const dispatch = useDispatch()

  return (
    <Wrapper isDone={todo.done}>
      <Input type="text" value={name} onChange={e => setName(e.target.value)} />
      <Buttons>
        <Button onClick={() => dispatch(updateTodo({ ...todo, name}))}>
          Update
        </Button>
        <Button onClick={() => dispatch(toggleTodo(todo.id))}>
          {todo.done ? 'Undo' : 'Mark as done'}
        </Button>
      </Buttons>
    </Wrapper>
  )
}
