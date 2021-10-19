import React, { useState } from 'react'
import { ShoppingListHeader, TablePart, TopRow } from './styles/ShoppingAnimegang.styled'
import { Table, Button, Space } from 'antd'
import { FullScreenContainer } from './styles/ShoppingAnimegang.styled'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

// const handleIncreaseItemCount = () => {
// }
// onClick={() => handleIncreaseItemCount()}

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
    render: () => (
      <Space size="middle">
        <Button onClick={() => console.log("clicked on plus!")} shape="circle" icon={<PlusOutlined />}></Button>
        <Button shape="circle" icon={<MinusOutlined />}></Button>
        <a>Delete</a>
      </Space>
    ),
  },
]

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
  key: string,
  quantity: number,
  item_name: string,
}

const ShoppingAnimegang = () => {
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
