/** Types */
//create your own type!
export type CartItem = {
  index: number
  itemName: string
  quantity: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  SET_SHOPPING_CART = 'SHOPPING_LIST_ACTIONS.SET_SHOPPING_CART',
  ADD_ITEM_QUANTITY = 'SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY',
  MINUS_ITEM_QUANTITY = 'SHOPPING_LIST_ACTIONS.MINUS_ITEM_QUANTITY',
  DELETE_CART_ITEM = 'SHOPPING_LIST_ACTIONS.DELETE_CART_ITEM',
}

/** Actions */

type SetShoppingCart = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_SHOPPING_CART
  shoppingCart: CartItem[]
}

type AddItemQuantity = {
  type: typeof SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY
  update: CartItem
}

type MinusItemQuantity = {
  type: typeof SHOPPING_LIST_ACTIONS.MINUS_ITEM_QUANTITY
  update: CartItem
}

type DeleteCartItem = {
  type: typeof SHOPPING_LIST_ACTIONS.DELETE_CART_ITEM
  update: CartItem
}

export type ActionTypes = SetShoppingCart | AddItemQuantity | MinusItemQuantity | DeleteCartItem
