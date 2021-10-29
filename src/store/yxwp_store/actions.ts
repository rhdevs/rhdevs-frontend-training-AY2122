import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS } from './types'

export const increaseQuantity = (ItemToChangeKey: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { ItemList } = getState().yxwp_store
  const newList = ItemList.map((item) =>
    item.key === ItemToChangeKey ? { ...item, itemQuantity: item.itemQuantity + 1 } : item,
  )
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    ItemList: newList,
  })
}

export const decreaseQuantity = (ItemToChangeKey: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { ItemList } = getState().yxwp_store
  const newList = ItemList.map((item) =>
    item.key === ItemToChangeKey ? { ...item, itemQuantity: item.itemQuantity - 1 } : item,
  )
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    ItemList: newList,
  })
}

export const deleteItem = (key: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { ItemList } = getState().yxwp_store
  const newList = ItemList.filter((item) => item.key !== key)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    ItemList: newList,
  })
}

// export const AddItem = (newItem: ItemList) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
//   const { ItemList } = getState().yxwp_store
//   ItemList.push(s)
//   setData((prevData: Props[]) => [...prevData, { key: index, itemQuantity: quantity, itemName: name }])
//     setIndex(index + 1)
//   dispatch({

//   })
// }
