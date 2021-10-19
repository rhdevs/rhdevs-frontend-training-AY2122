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
  AddTextInput,
  ButtonRow,
  CartTable,
} from './styles/ShoppingPage.styled'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

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
      render: (text: CartItem) => (
        <>
          <Button type="primary" shape="circle" onClick={() => handleAddQuantity(text.index - 1)}>
            +
          </Button>
          <Button type="primary" shape="circle" onClick={() => handleReduceQuantity(text.index - 1)}>
            -
          </Button>
        </>
      ),
    },
  ]

  const history = useHistory()
  const [quantity, setQuantity] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [userInputQuantity, setUserInputQuantity] = useState('')

  const handleSubmit = () => {
    addCart(userInput)
    setUserInput('')
  }

  const addCart = (userInput: string) => {
    let copy = [...shoppingCart]
    copy = [...copy, { index: shoppingCart.length + 1, name: userInput, quantity: parseInt(userInputQuantity) }]
    setShoppingCart(copy)
    setUserInputQuantity('')
    setUserInput('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const removeFromCart = () => {
    let copy = [...shoppingCart]
    copy = copy.filter((cartItem) => cartItem.name !== userInput)
    setShoppingCart(copy)
    setUserInputQuantity('')
    setUserInput('')
  }

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInputQuantity(e.target.value)
  }

  const handleAddQuantity = (index: number) => {
    setShoppingCart((cartList: CartItem[]) => {
      cartList[index].quantity = cartList[index].quantity + 1
      return cartList
    })
  }

  const handleReduceQuantity = (index: number) => {
    setShoppingCart((cartList: CartItem[]) => {
      cartList[index].quantity = cartList[index].quantity - 1
      return cartList
    })
  }

  return (
    <>
      <ShoppingListHeader>
        Our Shopping Page!
        <ItemRowContainer>
          <form>
            <AddTextInput value={userInput} type="text" placeholder="Item" onChange={(e) => handleChange(e)} />
            <AddTextInput
              value={userInputQuantity}
              type="text"
              placeholder="Quantity"
              onChange={(e) => handleQuantityChange(e)}
            />
            <Button
              style={{ marginRight: '10px' }}
              onClick={() => handleSubmit()}
              type="primary"
              icon={<PlusOutlined />}
            >
              Add Item
            </Button>
            <Button onClick={() => removeFromCart()} type="primary" icon={<MinusOutlined />}>
              Remove Item
            </Button>
          </form>
        </ItemRowContainer>
      </ShoppingListHeader>
      <CartTable>
        <Table dataSource={shoppingCart} columns={columns} />
      </CartTable>
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
