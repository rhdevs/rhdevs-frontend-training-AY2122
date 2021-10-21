/** Types */

import { DecreaseItemQuantity } from './action'

//create your own type!
export type Item = {
  name: string
  quantity: number
  price: number
  total: number
}

/** Actions' types */
export enum ITEM_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  INCREASE_ITEM_QUANTITY = 'ITEM_ACTIONS_.INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'ITEM_ACTIONS_.DECREASE_ITEM_QUANTITY',
}

/** Actions */
type IncreaseItemQuantity = {
  type: typeof ITEM_ACTIONS.INCREASE_ITEM_QUANTITY
  quantity: number //state name : state type
}

type DecreaseItemQuantity = {
  type: typeof ITEM_ACTIONS.DECREASE_ITEM_QUANTITY
  quantity: number //state name : state type
}

export type ActionTypes = IncreaseItemQuantity | DecreaseItemQuantity
