export type ToDo = {
  key: string
  task: string
  isCompleted: boolean
  isVisible: boolean
}

export enum TODO_REDUX_ACTIONS {
  ADD_TODO = 'TODO_REDUX_ACTIONS.ADD_TODO',
  TOGGLE_TODO = 'TODO_REDUX_ACTIONS.TOGGLE_TODO',
  CLEAR_COMPLETED = 'TODO_REDUX_ACTIONS.CLEAR_COMPLETED',
  TOGGLE_DARK_MODE = 'TODO_REDUX_ACTIONS.TOGGLE_DARK_MODE',
  SHOW_ALL = 'TODO_REDUX_ACTIONS.SHOW_ALL',
  SHOW_ACTIVE = 'TODO_REDUX_ACTIONS.SHOW_ACTIVE',
  SHOW_COMPLETED = 'TODO_REDUX_ACTIONS.SHOW_COMPLETED',
}

type AddToDo = {
  type: typeof TODO_REDUX_ACTIONS.ADD_TODO
  toDos: ToDo[]
}

type ToggleToDo = {
  type: typeof TODO_REDUX_ACTIONS.TOGGLE_TODO
  toDos: ToDo[]
}

type ClearCompleted = {
  type: typeof TODO_REDUX_ACTIONS.CLEAR_COMPLETED
  toDos: ToDo[]
}

type ToggleDarkMode = {
  type: typeof TODO_REDUX_ACTIONS.TOGGLE_DARK_MODE
  isDarkMode: boolean
}

type ShowAll = {
  type: typeof TODO_REDUX_ACTIONS.SHOW_ALL
  toDos: ToDo[]
}

type ShowActive = {
  type: typeof TODO_REDUX_ACTIONS.SHOW_ACTIVE
  toDos: ToDo[]
}

type ShowCompleted = {
  type: typeof TODO_REDUX_ACTIONS.SHOW_COMPLETED
  toDos: ToDo[]
}

export type ActionTypes = AddToDo | ToggleToDo | ClearCompleted | ToggleDarkMode | ShowAll | ShowCompleted | ShowActive
