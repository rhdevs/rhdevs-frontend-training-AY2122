import React from 'react'

import {
  AddItemButtonContainer,
  HeaderContainer,
  ShoppingListContainer,
  ShoppingListHeader,
} from './styles/JasonYbShoppingListPage.styled'
import { Button, Table } from 'antd'

const JasonYbShoppingListPage = () => {
  const dataSource = [
    {
      key: '1',
      quantity: 1,
      itemName: 'Test item 1',
      action: '- + Delete',
    },
    {
      key: '2',
      quantity: 10,
      itemName: 'Test item 2',
      action: '- + Delete',
    },
  ]

  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Item Name',
      dataIndex: 'itemName',
      key: 'itemName',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ]

  return (
    <>
      <HeaderContainer>
        <ShoppingListHeader>Shopping List</ShoppingListHeader>
        <AddItemButtonContainer>
          <Button type="dashed">+ Add item</Button>
        </AddItemButtonContainer>
      </HeaderContainer>
      <ShoppingListContainer>
        <Table columns={columns} dataSource={dataSource} />
      </ShoppingListContainer>
    </>
  )
}

export default JasonYbShoppingListPage
