import { Dispatch, GetState } from '../types'
import { ActionTypes, SHOPPING_LIST_ACTIONS, ExampleType, ShoppingItem } from './types'

//set my 'exampleList' state with my argument 'newList'
//to call this in your component or page, wrap with dispatch
//eg dispatch(mockActionSetMyExampleList(theNewList))

export const AddItemQuantity =
  (itemToChange: ShoppingItem) => async (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
    //you can also get the 'exampleList' state here
    const { itemList } = getState().shoppingLists
    const updatedList = itemList.map((item) =>
      item.index === itemToChange.index ? { ...item, quantity: item.quantity + 1 } : item,
    )
    dispatch({
      type: SHOPPING_LIST_ACTIONS.SET_ITEM_LIST,
      itemList: updatedList,
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
