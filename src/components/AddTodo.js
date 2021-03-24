import { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { addTodo } from '../slices/todoSlice';

const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`

const InputText = props => (
  <input type="text" {...props} />
)

const Button = styled.button`
`

export const AddTodo = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addTodo(name))
    setName('')
  }

  return (
    <Wrapper>
      <InputText value={name} onChange={e => setName(e.target.value)} />
      <Button onClick={handleSubmit} disabled={!name.length}>Submit</Button>
    </Wrapper>
  )
}
