/** Types */
//create your own type!
export type ExampleType = {
  varName: string //(variable name) : (its type)
  numName: number
}

export type CartItem = {
  index: number
  itemName: string
  quantity: number
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
  SET_SHOPPING_CART = 'SHOPPING_LIST_ACTIONS.SET_SHOPPING_CART',
  ADD_ITEM_QUANTITY = 'SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY',
}

/** Actions */
type SetExampleList = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST
  exampleList: ExampleType[] //state name : state type
}

type SetShoppingCart = {
  type: typeof SHOPPING_LIST_ACTIONS.SET_SHOPPING_CART
  shoppingCart: CartItem[]
}

type AddItemQuantity = {
  type: typeof SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY
  update: CartItem
}

export type ActionTypes = SetExampleList | SetShoppingCart | AddItemQuantity
