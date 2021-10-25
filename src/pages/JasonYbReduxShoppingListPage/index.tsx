import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AddItemQuantity,
  ReduceItemQuantity,
  DeleteItem,
  HandleNewitemToBeAdded,
  AddItem,
} from '../../store/JasonYbReduxShoppingList/actions'
import { RootState } from '../../store/types'

import {
  AddItemButtonContainer,
  AddItemInput,
  HeaderContainer,
  ShoppingListContainer,
  ShoppingListHeader,
} from './styles/JasonYbShoppingListPage.styled'
import { Button, Table, Space } from 'antd'
import { ShoppingItem } from '../../store/JasonYbReduxShoppingList/types'

export default function ShoppingLists() {
  const dispatch = useDispatch()
  const { itemList, newItemName } = useSelector((state: RootState) => state.JasonYbReduxShoppingList) // see here later

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (itemAffected: ShoppingItem) => (
        <Space size="middle">
          <Button type="primary" shape="circle" onClick={() => dispatch(AddItemQuantity(itemAffected))}>
            +
          </Button>
          <Button type="primary" shape="circle" onClick={() => dispatch(ReduceItemQuantity(itemAffected))}>
            -
          </Button>
          <Button danger onClick={() => dispatch(DeleteItem(itemAffected))}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  const temp = ''

  return (
    <>
      <HeaderContainer>
        <ShoppingListHeader>Shopping List</ShoppingListHeader>
        <AddItemButtonContainer>
          <form>
            <AddItemInput
              value={newItemName}
              type="text"
              placeholder="Item"
              onChange={(e) => HandleNewitemToBeAdded(e)}
            />
            <Button type="dashed" onClick={() => dispatch(AddItem())}>
              + Add item
            </Button>
          </form>
        </AddItemButtonContainer>
      </HeaderContainer>
      <ShoppingListContainer>
        <Table columns={columns} dataSource={itemList} />
      </ShoppingListContainer>
    </>
  )
}
