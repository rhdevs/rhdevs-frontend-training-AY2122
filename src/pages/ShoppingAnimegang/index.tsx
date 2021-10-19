import React from 'react'
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
        <Button shape="circle" icon={<PlusOutlined />}></Button>
        <Button shape="circle" icon={<MinusOutlined />}></Button>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data = [
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

const ShoppingAnimegang = () => {
  return (
    <FullScreenContainer>
      <TopRow>
        <ShoppingListHeader> Shopping list</ShoppingListHeader>
        <Button type="primary">+ Add item</Button>
      </TopRow>
      <TablePart>
        <Table columns={columns} dataSource={data} />
      </TablePart>
    </FullScreenContainer>
  )
}

export default ShoppingAnimegang
