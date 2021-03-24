import styled from 'styled-components'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => (
  <Wrapper>
    <h1>Todos...</h1>
    <AddTodo />
    <TodoList />
  </Wrapper>
)

export default App
