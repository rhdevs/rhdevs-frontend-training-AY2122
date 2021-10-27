import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddItemQuantity, ReduceItemQuantity, DeleteItem, AddItem } from '../../store/JasonYbReduxShoppingList/actions'
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
  const { itemList } = useSelector((state: RootState) => state.jasonYbReduxShoppingList)
  const [newItemName, setNewItemName] = useState('')

  const handleNewitemToBeAdded = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItemName(e.target.value)
  }

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
              onChange={(e) => handleNewitemToBeAdded(e)}
            />
            <Button type="dashed" onClick={() => dispatch(AddItem(newItemName))}>
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
