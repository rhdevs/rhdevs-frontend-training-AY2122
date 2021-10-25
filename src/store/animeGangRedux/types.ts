/** Types */
//create your own type!
export type ShoppingListItem = {
  key: number
  ItemName: string
  ItemCount: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  // ADD_ITEM_TO_LIST = 'SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST',
  ADD_QUANTITY_TO_ITEM = 'SHOPPING_LIST_ACTIONS.ADD_QUANTITY_TO_ITEM',
  DECREASE_QUANTITY_TO_ITEM = 'SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY_TO_ITEM',
  REMOVE_ITEM_FROM_LIST = 'SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST',
  // SHOW_ADD_ITEM_INPUT = 'SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_INPUT',
  // HIDE_ADD_ITEM_INPUT = 'SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_INPUT',
}

/** Actions */
// type AddItemToList = {
//   type: typeof SHOPPING_LIST_ACTIONS.ADD_ITEM_TO_LIST
//   shoppingList: ShoppingListItem[] //state name : state type
// }
type AddQuantityToItem = {
  type: typeof SHOPPING_LIST_ACTIONS.ADD_QUANTITY_TO_ITEM
  shoppingList: ShoppingListItem[] //state name : state type
}
type DecreaseQuantityToItem = {
  type: typeof SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY_TO_ITEM
  shoppingList: ShoppingListItem[] //state name : state type
}
type RemoveItemFromList = {
  type: typeof SHOPPING_LIST_ACTIONS.REMOVE_ITEM_FROM_LIST
  shoppingList: ShoppingListItem[] //state name : state type
}
// type ShowAddItemInput = {
//   type: typeof SHOPPING_LIST_ACTIONS.SHOW_ADD_ITEM_INPUT
//   showAddItem: boolean //state name : state type
// }
// type HideAddItemInput = {
//   type: typeof SHOPPING_LIST_ACTIONS.HIDE_ADD_ITEM_INPUT
//   showAddItem: boolean //state name : state type
// }

export type ActionTypes =
  // | AddItemToList
  AddQuantityToItem | DecreaseQuantityToItem | RemoveItemFromList
// | ShowAddItemInput
// | HideAddItemInput
