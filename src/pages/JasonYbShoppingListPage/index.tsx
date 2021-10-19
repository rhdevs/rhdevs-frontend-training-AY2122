import React, { useState } from 'react'

import {
  AddItemButtonContainer,
  HeaderContainer,
  ShoppingListContainer,
  ShoppingListHeader,
} from './styles/JasonYbShoppingListPage.styled'
import { Button, Table, Space } from 'antd'

const JasonYbShoppingListPage = () => {
  interface ItemProps {
    key: string
    index: number
    quantity: number
    itemName: string
  }

  const [items, setItems] = useState<ItemProps[]>([
    {
      key: '1',
      index: 1,
      quantity: 365,
      itemName: 'potato',
    },
    {
      key: '2',
      index: 2,
      quantity: 20,
      itemName: 'tomato',
    },
    {
      key: '3',
      index: 3,
      quantity: 60,
      itemName: 'oregano',
    },
  ])

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
      render: (item: ItemProps) => (
        <Space size="middle">
          <Button type="primary" shape="circle" onClick={() => handleAddQuantity(item)}>
            +
          </Button>
          <Button type="primary" shape="circle" onClick={() => handleReduceQuantity(item)}>
            -
          </Button>
        </Space>
      ),
    },
  ]

  const handleAddQuantity = (itemToChange: ItemProps) => {
    const updatedList = items.map((item) =>
      item.index === itemToChange.index ? { ...item, quantity: item.quantity + 1 } : item,
    )
    setItems(updatedList)
  }

  const handleReduceQuantity = (itemToChange: ItemProps) => {
    const updatedList = items.map((item) =>
      item.index === itemToChange.index ? { ...item, quantity: item.quantity - 1 } : item,
    )
    setItems(updatedList)
  }

  const handleAddItem = (newItem: ItemProps) => {
    setItems([...items, newItem])
  }

  return (
    <>
      <HeaderContainer>
        <ShoppingListHeader>Shopping List</ShoppingListHeader>
        <AddItemButtonContainer>
          <Button type="dashed">+ Add item</Button>
        </AddItemButtonContainer>
      </HeaderContainer>
      <ShoppingListContainer>
        <Table columns={columns} dataSource={items} />
      </ShoppingListContainer>
    </>
  )
}

export default JasonYbShoppingListPage
