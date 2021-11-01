import React, { useState, ChangeEvent } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Button, Tooltip, Table } from 'antd'
import { ShoppingListHeader } from '../styles/ShoppingListMain.styled'
import { QuantityElementsDiv, AddTextInput, ButtonDiv, DeleteText, Space } from './styles/main.styled'

const Pair3 = () => {
  interface Data_entry {
    key: number
    name: string
    quantity: number
  }

  const [shoppingCart, setShoppingCart] = useState<Data_entry[]>([
    {
      key: 1,
      name: 'test',
      quantity: 1,
    },
  ])

  const [userInput, setUserInput] = useState('')
  const [userInputQuantity, setUserInputQuantity] = useState('')

  const handleSubmit = () => {
    if (parseInt(userInputQuantity) > 0 && userInput !== '') {
      addCart(userInput)
      setUserInput('')
    }
  }

  const addCart = (userInput: string) => {
    let copy = [...shoppingCart]
    copy = [...copy, { key: shoppingCart.length + 1, name: userInput, quantity: parseInt(userInputQuantity) }]
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

  const handleIncreaseQuantity = (entry: Data_entry) => {
    const updatedShoppingCart = shoppingCart.map((x) => (x.key === entry.key ? { ...x, quantity: x.quantity + 1 } : x))
    setShoppingCart(updatedShoppingCart)
  }

  const handleDecreaseQuantity = (entry: Data_entry) => {
    const updatedShoppingCart = shoppingCart.map((x) =>
      x.key === entry.key ? { ...x, quantity: x.quantity === 1 ? x.quantity : x.quantity - 1 } : x,
    )
    setShoppingCart(updatedShoppingCart)
  }

  const removeItem = (item: Data_entry) => {
    const updatedShoppingCart = shoppingCart.filter((x) => x.key != item.key)
    setShoppingCart(updatedShoppingCart)
  }

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: function actions(entry: Data_entry) {
        return (
          <div>
            <QuantityElementsDiv>
              <Tooltip title="Add">
                <ButtonDiv>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<MinusOutlined />}
                    onClick={() => handleDecreaseQuantity(entry)}
                  />{' '}
                </ButtonDiv>
              </Tooltip>
              <Tooltip title="Minus">
                <ButtonDiv>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={() => handleIncreaseQuantity(entry)}
                  />
                </ButtonDiv>
              </Tooltip>
            </QuantityElementsDiv>
            <Space></Space>
            <DeleteText onClick={() => removeItem(entry)}>Delete</DeleteText>
          </div>
        )
      },
    },
  ]

  return (
    <>
      <ShoppingListHeader>Shopping List</ShoppingListHeader>
      <ButtonDiv>
        <form>
          <AddTextInput value={userInput} type="text" placeholder="Item" onChange={(e) => handleChange(e)} />
          <AddTextInput
            value={userInputQuantity}
            type="text"
            placeholder="Quantity"
            onChange={(e) => handleQuantityChange(e)}
          />
          <Button style={{ marginRight: '10px' }} onClick={() => handleSubmit()} type="primary" icon={<PlusOutlined />}>
            Add Item
          </Button>
        </form>
      </ButtonDiv>
      <Table dataSource={shoppingCart} columns={columns} />;
    </>
  )
}

export default Pair3
