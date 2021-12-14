export type ToDo = {
  key: string
  task: string
  isCompleted: boolean
  isVisible: boolean
}

export enum TODO_REDUX_ACTIONS {
  ADD_TODO = 'TODO_REDUX_ACTIONS.ADD_TODO',
  TOGGLE_TODO = 'TODO_REDUX_ACTIONS.TOGGLE_TODO',
  CLEAR_COMPLETED_TODOS = 'TODO_REDUX_ACTIONS.CLEAR_COMPLETED_TODOS',
}

type AddToDo = {
  type: typeof TODO_REDUX_ACTIONS.ADD_TODO
  toDos: ToDo[]
}

type ToggleToDo = {
  type: typeof TODO_REDUX_ACTIONS.TOGGLE_TODO
  toDos: ToDo[]
}

type ClearCompletedToDos = {
  type: typeof TODO_REDUX_ACTIONS.CLEAR_COMPLETED_TODOS
  toDos: ToDo[]
}

export type ActionTypes = AddToDo | ToggleToDo | ClearCompletedToDos
