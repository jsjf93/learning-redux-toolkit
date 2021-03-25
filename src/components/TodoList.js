import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Todo } from './Todo'

const Wrapper = styled.div`
  width: 90%;
  max-width: 400px;
`

export const TodoList = () => {
  const todos = useSelector(state => state.todo.todos)

  return (
    <Wrapper>
      {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </Wrapper>
  )
}
