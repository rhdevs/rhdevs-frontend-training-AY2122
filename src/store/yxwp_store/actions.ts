import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ShoppingListEntry } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))
// export const mockActionSetMyExampleList =
//   (newList: ExampleType[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
//     //you can also get the 'exampleList' state here
//     const { exampleList } = getState().shoppingLists
//     dispatch({
//       type: SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST,
//       exampleList: newList ?? exampleList, // if newList is undefined, use exampleList
//     })
//   }

export const IncreaseQuantity = (ItemToChangeKey: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { ItemList } = getState().yxwp_store
  const newList = ItemList.map((item) =>
    item.key === ItemToChangeKey ? { ...item, itemQuantity: item.itemQuantity + 1 } : item,
  )
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    ItemList: newList,
  })
}

export const DecreaseQuantity = (ItemToChangeKey: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { ItemList } = getState().yxwp_store
  const newList = ItemList.map((item) =>
    item.key === ItemToChangeKey ? { ...item, itemQuantity: item.itemQuantity - 1 } : item,
  )
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    ItemList: newList,
  })
}

export const DeleteItem = (key: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { ItemList } = getState().yxwp_store
  const newList = ItemList.filter((item) => item.key !== key)
  dispatch({
    type: SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST,
    ItemList: newList,
  })
}

// export const AddItem = (IndexOfItem:number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
//   const { ItemList } = getState().yxwp_store
//   const newList = Item
//   setData((prevData: Props[]) => [...prevData, { key: index, itemQuantity: quantity, itemName: name }])
//     setIndex(index + 1)
//   dispatch({

//   })
//}
