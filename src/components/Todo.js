import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleTodo } from '../slices/todoSlice';

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  margin-bottom: 5px;
`;

const Checkbox = props => (
  <input type="checkbox" {...props} />
)

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {todo.name}
      <Checkbox value={todo.done} onClick={() => dispatch(toggleTodo(todo.id))} />
    </Wrapper>
  )
}
