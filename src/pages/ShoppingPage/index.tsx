import { Button, Space, Table } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import {
  ShoppingPageDiv,
  ShoppingListHeader,
  ItemRowContainer,
  AddTextInput,
  CartTable,
} from './styles/ShoppingPage.styled'
import { CartItem } from '../../store/shoppingLists/types'
import { AddItemQuantity, DeleteCartItem, MinusItemQuantity, SetShoppingCart } from '../../store/shoppingLists/actions'
import { RootState } from '../../store/types'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingPage = () => {
  const dispatch = useDispatch()
  const { shoppingCart } = useSelector((state: RootState) => state.shoppingLists)
  const [userInput, setUserInput] = useState('')

  const addItem = () => {
    dispatch(
      SetShoppingCart([
        ...shoppingCart,
        { index: shoppingCart[shoppingCart.length - 1].index + 1, itemName: userInput, quantity: 1 },
      ]),
    )
    console.log(shoppingCart[shoppingCart.length - 1].index)
  }

  const columns = [
    {
      title: 'Item',
      dataIndex: 'itemName',
      key: 'itemName',
      width: '40%',
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
          <Button type="primary" shape="circle" onClick={() => dispatch(AddItemQuantity(item))}>
            +
          </Button>
          <Button type="primary" shape="circle" onClick={() => dispatch(MinusItemQuantity(item))}>
            -
          </Button>
          <a onClick={() => dispatch(DeleteCartItem(item))}>Delete</a>
        </Space>
      ),
    },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    if (userInput !== '') {
      addItem()
    }
    setUserInput('')
  }

  return (
    <ShoppingPageDiv>
      <ShoppingListHeader>
        Our Shopping Page!
        <ItemRowContainer>
          <form>
            <AddTextInput value={userInput} type="text" placeholder="Item" onChange={(e) => handleChange(e)} />
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
        <Table dataSource={shoppingCart} columns={columns} size="large" />
      </CartTable>
    </ShoppingPageDiv>
  )
}

export default ShoppingPage
