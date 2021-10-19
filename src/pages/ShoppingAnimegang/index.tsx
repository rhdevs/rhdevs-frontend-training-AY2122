import React, { useState } from 'react'
import { ShoppingListHeader, TablePart, TopRow } from './styles/ShoppingAnimegang.styled'
import { Table, Button, Space } from 'antd'
import { FullScreenContainer } from './styles/ShoppingAnimegang.styled'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

// const handleIncreaseItemCount = () => {
// }
// onClick={() => handleIncreaseItemCount()}

const initialList: Item[] = [
  {
    key: '1',
    quantity: 3,
    item_name: 'Eggs',
  },
  {
    key: '2',
    quantity: 5,
    item_name: 'Eggs',
  },
]

type Item = {
  key: string
  quantity: number
  item_name: string
}

const ShoppingAnimegang = () => {
  const handleOnPlusClick = (record: Item) => {
    const newList: Item[] = shoppingList.filter((item) => {
      if (item.key === record.key) {
        item.quantity += 1
      }
      return item
    })
    setShoppingList(newList)
  }
  const handleOnMinusClick = (record: Item) => {
    const newList: Item[] = shoppingList.filter((item) => {
      if (item.key === record.key) {
        item.quantity = item.quantity == 0 ? 0 : item.quantity - 1
      }
      return item
    })
    setShoppingList(newList)
  }
  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Item Name',
      dataIndex: 'item_name',
      key: 'item_name',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text: any, record: Item) => (
        <Space size="middle">
          <Button onClick={() => handleOnPlusClick(record)} shape="circle" icon={<PlusOutlined />}></Button>
          <Button onClick={() => handleOnMinusClick(record)} shape="circle" icon={<MinusOutlined />}></Button>
          <a>Delete</a>
        </Space>
      ),
    },
  ]
  const [shoppingList, setShoppingList] = useState<Item[]>(initialList)
  return (
    <FullScreenContainer>
      <TopRow>
        <ShoppingListHeader> Shopping list</ShoppingListHeader>
        <Button type="primary">+ Add item</Button>
      </TopRow>
      <TablePart>
        <Table columns={columns} dataSource={shoppingList} />
      </TablePart>
    </FullScreenContainer>
  )
}

export default ShoppingAnimegang
