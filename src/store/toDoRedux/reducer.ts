import { Reducer } from 'redux'
import { ActionTypes, TODO_REDUX_ACTIONS, ToDo } from './types'

const initialList: ToDo[] = [
  {
    key: '1',
    task: 'Buy groceries',
    isCompleted: false,
    isVisible: true,
  },
  {
    key: '2',
    task: 'Study finals',
    isCompleted: false,
    isVisible: true,
  },
]
const initialState = {
  toDos: initialList,
}

type State = {
  toDos: ToDo[]
}

export const toDoReducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_REDUX_ACTIONS.ADD_TODO: {
      return { ...state, shoppingList: action.toDos }
    }
    case TODO_REDUX_ACTIONS.TOGGLE_TODO: {
      return { ...state, shoppingList: action.toDos }
    }
    case TODO_REDUX_ACTIONS.CLEAR_COMPLETED_TODOS: {
      return { ...state, shoppingList: action.toDos }
    }
    default:
      return state
  }
}
