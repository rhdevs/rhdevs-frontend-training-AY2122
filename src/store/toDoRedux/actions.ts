import { Dispatch, GetState } from '../types'
import { ActionTypes, TODO_REDUX_ACTIONS, ToDo } from './types'

export const addToDo = (newToDo: ToDo) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const toDos = getState().toDoReducer.toDos
  const newToDos = { ...toDos, newToDo }
  dispatch({
    type: TODO_REDUX_ACTIONS.ADD_TODO,
    toDos: newToDos,
  })
}
