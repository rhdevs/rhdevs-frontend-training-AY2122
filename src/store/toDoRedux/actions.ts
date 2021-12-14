import { Dispatch, GetState } from '../types'
import { ActionTypes, TODO_REDUX_ACTIONS, ToDo } from './types'

export const addToDo = (newToDo: ToDo) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const toDos = getState().toDoReducer.toDos
  const newToDos = [newToDo, ...toDos]
  dispatch({
    type: TODO_REDUX_ACTIONS.ADD_TODO,
    toDos: newToDos,
  })
}
export const toggleToDo = (key: string) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const updatedCompleted = getState().toDoReducer.toDos.map((item) => {
    if (item.key === key) return { ...item, isCompleted: !item.isCompleted }
    else {
      return { ...item }
    }
  })
  dispatch({
    type: TODO_REDUX_ACTIONS.TOGGLE_TODO,
    toDos: updatedCompleted,
  })
}

export const toggleDarkMode = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  dispatch({
    type: TODO_REDUX_ACTIONS.TOGGLE_DARK_MODE,
    isDarkMode: !getState().toDoReducer.isDarkMode,
  })
}

export const clearCompleted = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const notCompleted = getState().toDoReducer.toDos.filter((task) => {
    return !task.isCompleted
  })
  dispatch({
    type: TODO_REDUX_ACTIONS.CLEAR_COMPLETED,
    toDos: notCompleted,
  })
}

export const showAll = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const all = getState().toDoReducer.toDos.map((task: ToDo) => {
    return { ...task, isVisible: true }
  })
  dispatch({
    type: TODO_REDUX_ACTIONS.SHOW_ALL,
    toDos: all,
  })
}

export const showActive = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const active = getState().toDoReducer.toDos.map((task: ToDo) => {
    return { ...task, isVisible: task.isCompleted === false }
  })
  dispatch({
    type: TODO_REDUX_ACTIONS.SHOW_ACTIVE,
    toDos: active,
  })
}

export const showCompleted = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const mapped = getState().toDoReducer.toDos.map((task) => {
    return { ...task, isVisible: task.isCompleted }
  })
  dispatch({
    type: TODO_REDUX_ACTIONS.SHOW_COMPLETED,
    toDos: mapped,
  })
}
