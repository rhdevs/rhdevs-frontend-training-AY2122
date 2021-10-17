import { TableOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import Item from 'antd/lib/list/Item'
import React, { useState } from 'react'
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

const shoppingCart = [
  {
    key: '1',
    item: 'deez',
    quantity: 2,
  },
  {
    key: '2',
    item: 'nutz',
    quantity: 2,
  },
]

const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
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

const ShoppingPage = () => {
  const history = useHistory()
  const [quantity, setQuantity] = useState(0)
  // const

  return (
    <>
      <ShoppingListHeader>
        Our Shopping Page!
        <AddItemContainer>
          <Button type="primary" onClick={() => setQuantity(quantity)} icon={<PlusSquareOutlined />}>
            Add Item
          </Button>
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
