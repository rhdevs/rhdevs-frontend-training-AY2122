/** Types */
//create your own type!
export type ShoppingListEntry = {
  key: number
  itemQuantity: number
  itemName: string
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  SET_SHOPPING_LIST = 'SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST',
  ADD_SHOPPING_ITEM = 'SHOPPING_LIST_ACTIONS.ADD_SHOPPING_ITEM',
  REMOVE_SHOPPING_ITEM = 'SHOPPING_LIST_ACTIONS.REMOVE_SHOPPING_ITEM',
  INCREASE_QUANTITY = 'SHOPPING_LIST_ACTIONS.INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY',
}

/** Actions */
type setShoppingList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST
  itemList: ShoppingListEntry[]
}

type addShoppingItem = {
  type: typeof SHOPPING_LIST_ACTIONS.ADD_SHOPPING_ITEM
  indexOfItem: number
  itemList: ShoppingListEntry[]
}

type removeShoppingItem = {
  type: typeof SHOPPING_LIST_ACTIONS.REMOVE_SHOPPING_ITEM
  indexOfItem: number
}

type increaseQuantity = {
  type: typeof SHOPPING_LIST_ACTIONS.INCREASE_QUANTITY
  itemList: ShoppingListEntry[]
}

type decreaseQuantity = {
  type: typeof SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY
  itemList: ShoppingListEntry[]
}

export type ActionTypes = addShoppingItem | removeShoppingItem | increaseQuantity | decreaseQuantity | setShoppingList
