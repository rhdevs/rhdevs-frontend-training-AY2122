/** Types */
//create your own type!
export type ExampleType = {
  varName: string //(variable name) : (its type)
  numName: number
}

export type Item = {
  name: string
  amount: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS_CYYZ {
  //follow naming convention <enum name>.<enum item name>
  // SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
  SET_FOOD_LIST = 'SHOPPING_LIST_ACTIONS_CYYZ.SET_FOOD_LIST',
  SET_OTHERS_LIST = 'SHOPPING_LIST_ACTIONS_CYYZ.SET_OTHERS_LIST',
  ADD_FOOD_AMOUNT = 'SHOPPING_LIST_ACTIONS_CYYZ.ADD_FOOD_AMOUNT',
  MINUS_FOOD_AMOUNT = 'SHOPPING_LIST_ACTIONS_CYYZ.MINUS_FOOD_AMOUNT',
  DELETE_FOOD_ITEM = 'SHOPPING_LIST_ACTIONS_CYYZ.DELETE_FOOD_ITEM',
  ADD_OTHERS_AMOUNT = 'SHOPPING_LIST_ACTIONS_CYYZ.ADD_OTHERS_AMOUNT',
  MINUS_OTHERS_AMOUNT = 'SHOPPING_LIST_ACTIONS_CYYZ.MINUS_OTHERS_AMOUNT',
  DELETE_OTHERS_ITEM = 'SHOPPING_LIST_ACTIONS_CYYZ.DELETE_OTHERS_ITEM',
  SET_MENU_VISIBLE = 'SHOPPING_LIST_ACTIONS_CYYZ.SET_MENU_VISIBLE',
}

/** Actions */
type SetMenuVisible = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.SET_MENU_VISIBLE
  update: boolean
}
type SetFoodList = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.SET_FOOD_LIST
  update: Item[] //state name : state type
}

type SetOthersList = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.SET_OTHERS_LIST
  update: Item[] //state name : state type
}

type AddFoodAmount = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.ADD_FOOD_AMOUNT
  update: Item[]
}

type MinusFoodAmount = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.MINUS_FOOD_AMOUNT
  update: Item[]
}

type DeleteFoodAmount = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.DELETE_FOOD_ITEM
  update: Item[]
}

type AddOthersAmount = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.ADD_OTHERS_AMOUNT
  update: Item[]
}

type MinusOthersAmount = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.MINUS_OTHERS_AMOUNT
  update: Item[]
}

type DeleteOthersItem = {
  type: typeof SHOPPING_LIST_ACTIONS_CYYZ.DELETE_OTHERS_ITEM
  update: Item[]
}

export type ActionTypes =
  | SetFoodList
  | SetOthersList
  | AddFoodAmount
  | MinusFoodAmount
  | DeleteFoodAmount
  | AddOthersAmount
  | MinusOthersAmount
  | DeleteOthersItem
  | SetMenuVisible
