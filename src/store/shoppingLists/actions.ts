import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ExampleType, ShoppingItem } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))

export const AddItemQuantity = () =>
  async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    //you can also get the 'exampleList' state here
    const { itemList } = getState().shoppingLists
    dispatch({
      type: SHOPPING_LIST_ACTIONS.ADD_ITEM_QUANTITY,
      newList: [...itemList, quantity: quantity + 1], // if newList is undefined, use exampleList
    })
  }

// export const mockActionSetMyExampleList =
//   (newList: ExampleType[]) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
//     //you can also get the 'exampleList' state here
//     const { exampleList } = getState().shoppingLists
//     dispatch({
//       type: SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST,
//       exampleList: newList ?? exampleList, // if newList is undefined, use exampleList
//     })
//   }
