import React, { useState } from 'react'

import {
  AddItemButtonContainer,
  HeaderContainer,
  ShoppingListContainer,
  ShoppingListHeader,
} from './styles/JasonYbShoppingListPage.styled'
import { Button, Table } from 'antd'

const JasonYbShoppingListPage = () => {
  interface ItemProps {
    quantity: number
    itemName: string
  }
  const [quantity, setQuantity] = useState<number>(1)
  const [itemName] = useState<string>('')
  const [items, setItems] = useState<ItemProps[]>([
    {
      quantity: 365,
      itemName: 'potato',
    },
  ])

  const onClickAddQuantity = () => {
    setQuantity(quantity + 1)
  }

  const onClickReduceQuantity = () => {
    setQuantity(quantity - 1)
  }

  const onClickAddItem = (newArr: ItemProps) => {
    setItems((prevArr) => [...prevArr, newArr])
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
        <Table columns={columns} dataSource={dataSource} />
      </ShoppingListContainer>
    </>
  )
}

export default JasonYbShoppingListPage
