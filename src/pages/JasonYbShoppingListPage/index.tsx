import React, { ChangeEvent, useState } from 'react'
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

export default function shoppingLists() {
  const dispatch = useDispatch()
  const { AddItemQuantity } = useSelector((state: typeof initialState) => state)

}

const JasonYbShoppingListPage = () => {
  interface ItemProps {
    key: number
    index: number
    quantity: number
    itemName: string
  }

  let keyCount = 3
  let indexCount = 3

  const [userAddItemInput, setUserAddItemInput] = useState('')
  const [items, setItems] = useState<ItemProps[]>([
    {
      key: 1,
      index: 1,
      quantity: 365,
      itemName: 'potato',
    },
    {
      key: 2,
      index: 2,
      quantity: 20,
      itemName: 'tomato',
    },
    {
      key: 3,
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
      render: (itemAffected: ItemProps) => (
        <Space size="middle">
          <Button type="primary" shape="circle" onClick={() => handleAddQuantity(itemAffected)}>
            +
          </Button>
          <Button type="primary" shape="circle" onClick={() => handleReduceQuantity(itemAffected)}>
            -
          </Button>
          <Button danger onClick={() => handleDeleteItem(itemAffected)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAddItemInput(e.target.value)
  }

  const handleSubmit = () => {
    addItem(userAddItemInput)
    setUserAddItemInput('')
  }

  const addItem = (newItemName: string) => {
    keyCount++
    indexCount++
    const newItem: ItemProps = {
      key: keyCount,
      index: indexCount,
      quantity: 1,
      itemName: newItemName,
    }
    const updatedList = [...items, newItem]
    setItems(updatedList)
  }

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

  const handleDeleteItem = (itemToDelete: ItemProps) => {
    const updatedList = items.filter((item) => item.index !== itemToDelete.index)
    setItems(updatedList)
  }

  return (
    <>
      <HeaderContainer>
        <ShoppingListHeader>Shopping List</ShoppingListHeader>
        <AddItemButtonContainer>
          <form>
            <AddItemInput
              value={userAddItemInput}
              type="text"
              placeholder="Item"
              onChange={(e) => handleItemChange(e)}
            />
            <Button type="dashed" onClick={() => handleSubmit()}>
              + Add item
            </Button>
          </form>
        </AddItemButtonContainer>
      </HeaderContainer>
      <ShoppingListContainer>
        <Table columns={columns} dataSource={items} />
      </ShoppingListContainer>
    </>
  )
}

