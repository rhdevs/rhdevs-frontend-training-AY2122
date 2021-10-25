import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS_CYYZ, Item } from './types'

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
export const setMenuVisible = (state: boolean) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { isMenuVisible } = getState().shoppingListsCYYZ
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.SET_MENU_VISIBLE,
    update: state ?? isMenuVisible,
  })
}
export const setFoodList = (newList: Item[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { foodList } = getState().shoppingListsCYYZ
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.SET_FOOD_LIST,
    update: newList ?? foodList,
  })
}

export const setOthersList = (newList: Item[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { othersList } = getState().shoppingListsCYYZ
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.SET_OTHERS_LIST,
    update: newList ?? othersList,
  })
}

export const AddFoodAmount = (item: Item) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.ADD_FOOD_AMOUNT,
    update: item,
  })
}

export const MinusFoodAmount = (item: Item) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.MINUS_FOOD_AMOUNT,
    update: item,
  })
}

export const DeleteFoodAmount = (item: Item) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.DELETE_FOOD_ITEM,
    update: item,
  })
}

export const AddOthersAmount = (item: Item) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.ADD_OTHERS_AMOUNT,
    update: item,
  })
}

export const MinusOthersAmount = (item: Item) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.MINUS_OTHERS_AMOUNT,
    update: item,
  })
}

export const DeleteOthersItem = (item: Item) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SHOPPING_LIST_ACTIONS_CYYZ.DELETE_OTHERS_ITEM,
    update: item,
  })
}
