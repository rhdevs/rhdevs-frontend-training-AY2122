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
  isDarkMode: true,
}

type State = {
  toDos: ToDo[]
  isDarkMode: boolean
}

export const toDoReducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_REDUX_ACTIONS.ADD_TODO: {
      return { ...state, toDos: action.toDos }
    }
    case TODO_REDUX_ACTIONS.TOGGLE_TODO: {
      return { ...state, toDos: action.toDos }
    }
    case TODO_REDUX_ACTIONS.CLEAR_COMPLETED: {
      return { ...state, toDos: action.toDos }
    }
    case TODO_REDUX_ACTIONS.SHOW_COMPLETED: {
      return { ...state, toDos: action.toDos }
    }
    case TODO_REDUX_ACTIONS.SHOW_ALL: {
      return { ...state, toDos: action.toDos }
    }
    case TODO_REDUX_ACTIONS.SHOW_ACTIVE: {
      return { ...state, toDos: action.toDos }
    }
    case TODO_REDUX_ACTIONS.TOGGLE_DARK_MODE: {
      return { ...state, isDarkMode: action.isDarkMode }
    }
    default:
      return state
  }
}
