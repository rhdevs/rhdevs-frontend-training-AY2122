import { Button, Space, Table } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import { ShoppingListHeader, ItemRowContainer, AddTextInput, CartTable } from './styles/ShoppingPage.styled'
import { CartItem } from '../../store/shoppingLists/types'
import { SetShoppingCart } from '../../store/shoppingLists/actions'
import { RootState } from '../../store/types'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingPage = () => {
  const dispatch = useDispatch()
  const { shoppingCart } = useSelector((state: RootState) => state.shoppingLists)
  const [userInput, setUserInput] = useState('')

  const addItem = () => {
    dispatch(SetShoppingCart([...shoppingCart, { index: shoppingCart.length + 1, itemName: userInput, quantity: 1 }]))
  }

  // const [shoppingCart, setShoppingCart] = useState<CartItem[]>([
  //   {
  //     index: 1,
  //     name: 'deez',
  //     quantity: 2,
  //   },
  //   {
  //     index: 2,
  //     name: 'nutz',
  //     quantity: 2,
  //   },
  // ])

  const columns = [
    {
      title: 'Item',
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
      render: (item: CartItem) => (
        <Space size="middle">
          {/* <Button type="primary" shape="circle" onClick={() => handleAddQuantity(item)}>
            +
          </Button>
          <Button type="primary" shape="circle" onClick={() => handleReduceQuantity(item)}>
            -
          </Button> */}
          {/* <a onClick={() => removeItem(item)}>Delete</a> */}
        </Space>
      ),
    },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    addItem()
    setUserInput('')
  }

  return (
    <>
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
        <Table dataSource={shoppingCart} columns={columns} />
      </CartTable>
    </>
  )
}

export default ShoppingPage
