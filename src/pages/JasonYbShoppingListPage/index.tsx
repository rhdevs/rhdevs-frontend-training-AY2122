import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialState } from '../../store/shoppingLists/reducer'
import { AddItemQuantity } from '../../store/shoppingLists/actions'

import {
  AddItemButtonContainer,
  AddItemInput,
  HeaderContainer,
  ShoppingListContainer,
  ShoppingListHeader,
} from './styles/JasonYbShoppingListPage.styled'
import { Button, Table, Space } from 'antd'
import { ShoppingItem } from '../../store/shoppingLists/types'

export default function ShoppingLists() {
  const dispatch = useDispatch()
  const { itemList } = useSelector((state: typeof initialState) => initialState) // see here later

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
          <Button type="primary" shape="circle" onClick={() => dispatch(AddItemQuantity(itemAffected))}>
            -
          </Button>
          <Button danger onClick={() => dispatch(AddItemQuantity(itemAffected))}>
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
      </HeaderContainer>
      <ShoppingListContainer>
        <Table columns={columns} dataSource={itemList} />
      </ShoppingListContainer>
    </>
  )
}
