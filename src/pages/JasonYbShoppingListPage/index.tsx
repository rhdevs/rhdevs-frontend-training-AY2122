import React, { useState } from 'react'

import {
  AddItemButtonContainer,
  HeaderContainer,
  ShoppingListContainer,
  ShoppingListHeader,
} from './styles/JasonYbShoppingListPage.styled'
import { Button, Table, Space } from 'antd'
const { Column } = Table

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

  const handleAddQuantity = (index: number) => {
    setItems((itemList: ItemProps[]) => {
      itemList[index].quantity = itemList[index].quantity + 1
      return itemList
    })
  }

  const handleReduceQuantity = (index: number) => {
    setItems((itemList: ItemProps[]) => {
      itemList[index].quantity = itemList[index].quantity - 1
      return itemList
    })
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
        <Table dataSource={items}>
          <Column title="Quantity" dataIndex="quantity" key="quantity" />
          <Column title="Item Name" dataIndex="itemName" key="itemName" />
          <Column
            title="Action"
            key="action"
            render={(text, row) => (
              <Space size="middle">
                <Button type="primary" shape="circle" onClick={() => handleAddQuantity(text.index - 1)}>
                  +
                </Button>
                <Button type="primary" shape="circle" onClick={() => handleReduceQuantity(text.index - 1)}>
                  -
                </Button>
              </Space>
            )}
          />
        </Table>
      </ShoppingListContainer>
    </>
  )
}

export default JasonYbShoppingListPage
