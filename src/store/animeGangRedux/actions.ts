import { Dispatch, GetState } from '../types'
import { ActionTypes, ANIME_GANG_ACTIONS } from './types'

export const AddQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  shoppingList[index].ItemCount += 1
  dispatch({
    type: ANIME_GANG_ACTIONS.ADD_QUANTITY_TO_ITEM,
    shoppingList: shoppingList,
    // if newList is undefined, use exampleList
  })
}
export const DecreaseQuantityToItem = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  // const itemCount = shoppingList[index].itemCount
  // if (itemCount > 1) {
  //   shoppingList[index].ItemCount -= 1
  // }
  dispatch({
    type: ANIME_GANG_ACTIONS.DECREASE_QUANTITY_TO_ITEM,
    shoppingList: shoppingList, // if newList is undefined, use exampleList
  })
}
export const RemoveItemFromList = (index: number) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { shoppingList } = getState().animeGangRedux
  shoppingList.splice(index, 1)
  dispatch({
    type: ANIME_GANG_ACTIONS.REMOVE_ITEM_FROM_LIST,
    shoppingList: shoppingList, // if newList is undefined, use exampleList
  })
}
// export const ShowAddItemInput = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
// //   dispatch({
//     type: ANIME_GANG_ACTIONS.SHOW_ADD_ITEM_INPUT,
//     showAddItem: true, // if newList is undefined, use exampleList
//   })
// }
// export const HideAddItemInput = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
// //   dispatch({
//     type: ANIME_GANG_ACTIONS.HIDE_ADD_ITEM_INPUT,
//     showAddItem: false, // if newList is undefined, use exampleList
//   })
// }
