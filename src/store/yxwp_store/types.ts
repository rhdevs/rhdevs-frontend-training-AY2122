/** Types */
//create your own type!
export type ExampleType = {
    varName: string //(variable name) : (its type)
    numName: number
}

export type ShoppingListEntry = {
    key: number
    itemQuantity: number
    itemName: string
}

/** Actions' types */
export enum SHOPPING_LIST_ACTIONS {
    //follow naming convention <enum name>.<enum item name>
    SET_SHOPPING_LIST = 'SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST',
    ADD_SHOPPING_ITEM = 'SHOPPING_LIST_ACTIONS.ADD_SHOPPING_ITEM',
    REMOVE_SHOPPING_ITEM = 'SHOPPING_LIST_ACTIONS.REMOVE_SHOPPING_ITEM',
    INCREASE_QUANTITY = 'SHOPPING_LIST_ACTIONS.INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY',
}

/** Actions */
type SetShoppingList = {
    type: typeof SHOPPING_LIST_ACTIONS.SET_SHOPPING_LIST
    ItemList: ShoppingListEntry[]
}

type AddShoppingItem = {
    type: typeof SHOPPING_LIST_ACTIONS.ADD_SHOPPING_ITEM
    IndexOfItem: number
}

type RemoveShoppingItem = {
    type: typeof SHOPPING_LIST_ACTIONS.REMOVE_SHOPPING_ITEM
    IndexOfItem: number
}

type IncreaseQuantity = {
    type: typeof SHOPPING_LIST_ACTIONS.INCREASE_QUANTITY
    ItemList: ShoppingListEntry[]
}

type DecreaseQuantity = {
    type: typeof SHOPPING_LIST_ACTIONS.DECREASE_QUANTITY
    ItemList: ShoppingListEntry[]
}

export type ActionTypes = AddShoppingItem | RemoveShoppingItem | IncreaseQuantity | DecreaseQuantity | SetShoppingList
