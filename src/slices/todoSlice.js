import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [{ id: 1, name: 'First todo', done: false }]
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => ({
        ...state,
        todos: [action.payload].concat(state.todos)
      }),
      prepare: name => ({ payload: { id: uuidv4(), name } })
    },
    toggleTodo: (state, action) => ({ 
      ...state, 
      todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
    }),
    updateTodo: (state, action) => ({
      ...state,
      todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo)
    })
  }
})

export const { addTodo, toggleTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
