import { Button, Space, Table } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import { ShoppingListHeader, ItemRowContainer, AddTextInput, CartTable } from './styles/ShoppingPage.styled'
import { PlusOutlined } from '@ant-design/icons'

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
      key: 'action',
      render: (item: CartItem) => (
        <Space size="middle">
          <Button type="primary" shape="circle" onClick={() => handleAddQuantity(item)}>
            +
          </Button>
          <Button type="primary" shape="circle" onClick={() => handleReduceQuantity(item)}>
            -
          </Button>
          <a onClick={() => removeItem(item)}>Delete</a>
        </Space>
      ),
    },
  ]

  const [userInput, setUserInput] = useState('')
  const [userInputQuantity, setUserInputQuantity] = useState('')

  const handleSubmit = () => {
    addCart(userInput)
    setUserInput('')
  }

  const addCart = (userInput: string) => {
    let copy = [...shoppingCart]
    copy = [
      ...copy,
      {
        index: shoppingCart.length + 1,
        name: userInput,
        quantity: userInputQuantity === '' ? 1 : parseInt(userInputQuantity),
      },
    ]
    setShoppingCart(copy)
    setUserInputQuantity('')
    setUserInput('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInputQuantity(e.target.value)
  }

  const handleAddQuantity = (item: CartItem) => {
    const updatedShoppingCart = shoppingCart.map((x) =>
      x.index === item.index ? { ...x, quantity: x.quantity + 1 } : x,
    )
    setShoppingCart(updatedShoppingCart)
  }

  const handleReduceQuantity = (item: CartItem) => {
    const updatedShoppingCart = shoppingCart.map((x) =>
      x.index === item.index ? { ...x, quantity: x.quantity - 1 } : x,
    )
    setShoppingCart(updatedShoppingCart)
  }

  const removeItem = (item: CartItem) => {
    const updatedShoppingCart = shoppingCart.filter((x) => x.index != item.index)
    setShoppingCart(updatedShoppingCart)
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
          </form>
        </ItemRowContainer>
      </ShoppingListHeader>
      <CartTable>
        <Table dataSource={shoppingCart} columns={columns} />
      </CartTable>
    </>
  )
}

export default ShoppingPage
