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
    index: number
    quantity: number
    itemName: string
  }
  const [quantity, setQuantity] = useState(1)
  const [itemName] = useState('')
  const [items, setItems] = useState<ItemProps[]>([
    {
      index: 1,
      quantity: 365,
      itemName: 'potato',
    },
  ])

  const onClickAddQuantity = (index: number) => {
    setItems((itemList: ItemProps[]) => {
      itemList[index].quantity = itemList[index].quantity + 1
      return itemList
    })
  }

  const onClickReduceQuantity = (index: number) => {
    setItems((itemList: ItemProps[]) => {
      itemList[index].quantity = itemList[index].quantity + 1
      return itemList
    })
  }

  const onClickAddItem = (newItem: ItemProps) => {
    setItems((itemList: ItemProps[]) => [...itemList, newItem])
  }

  const dataSource = items

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
        <Table dataSource={dataSource}>
          <Column title="Quantity" dataIndex="quantity" key="quantity" />
          <Column title="Item Name" dataIndex="itemName" key="itemName" />
          <Column
            title="Action"
            key="action"
            render={(index: number) => (
              <Space size="middle">
                <Button type="primary" shape="circle" onClick={() => onClickAddQuantity(index)}>
                  +
                </Button>
                <Button type="primary" shape="circle" onClick={() => onClickReduceQuantity(index)}>
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
