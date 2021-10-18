import { TableOutlined } from '@ant-design/icons'
import { Button, Input, Table } from 'antd'
import Item from 'antd/lib/list/Item'
import React, { ChangeEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../App'
import ShoppingCard from '../../components/ShoppingCard'
import {
  ShoppingListHeader,
  GroupCardsContainer,
  ItemRowContainer,
  CellContainer,
  AddItemContainer,
} from './styles/ShoppingPage.styled'
import { PlusOutlined, MinusOutlined, PlusSquareOutlined } from '@ant-design/icons'

const ShoppingPage = () => {
  interface CartItem {
    index: number
    name: string
    quantity: number
  }

  const [shoppingCart, setShoppingCart] = useState<CartItem[]>([
    {
      index: 1,
      name: 'deez',
      quantity: 2,
    },
    {
      index: 2,
      name: 'nutz',
      quantity: 2,
    },
  ])

  const columns = [
    {
      title: 'Item',
      dataIndex: 'name',
      key: 'item',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>+</a>,
    },
  ]

  const history = useHistory()
  const [quantity, setQuantity] = useState(0)
  const [userInput, setUserInput] = useState('')

  const handleSubmit = () => {
    addCart(userInput)
    setUserInput('')
  }

  const addCart = (userInput: string) => {
    let copy = [...shoppingCart]
    copy = [...copy, { index: shoppingCart.length + 1, name: userInput, quantity: 1 }]
    setShoppingCart(copy)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  return (
    <>
      <ShoppingListHeader>
        Our Shopping Page!
        <AddItemContainer>
          <form>
            <input type="text" placeholder="New Item" onChange={(e) => handleChange(e)} />
            <Button onClick={() => handleSubmit()} type="primary" icon={<PlusSquareOutlined />}>
              Add Item
            </Button>
          </form>
        </AddItemContainer>
      </ShoppingListHeader>
      <Table dataSource={shoppingCart} columns={columns} />
      <ItemRowContainer>
        <CellContainer>Item</CellContainer>
        <CellContainer>{quantity}</CellContainer>
        <Button type="primary" onClick={() => setQuantity(quantity + 1)} shape="circle" icon={<PlusOutlined />} />
        <Button type="primary" onClick={() => setQuantity(quantity - 1)} shape="circle" icon={<MinusOutlined />} />
      </ItemRowContainer>
    </>
  )
}

export default ShoppingPage
