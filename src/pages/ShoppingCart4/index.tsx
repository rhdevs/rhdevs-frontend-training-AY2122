import React from 'react'
import 'antd/dist/antd.css'
import { ReactDOM } from 'react'
import { render } from 'react-dom'
import { Button } from 'antd'
import { Table, Tag, Space } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { MainPage, HeaderShoppingCart, AddItemButton, ShoppingListForm } from './styles/ShoppingCart4.styled'

const columns = [
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Item Name',
    dataIndex: 'item',
    key: 'item',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <MinusCircleOutlined></MinusCircleOutlined>
        <PlusCircleOutlined></PlusCircleOutlined>
        <a>Delete</a>
      </Space>
    ),
  },
]

// ReactDom.render(<Table columns={columns} dataSource={data} />, document.getElementById('container'));

const ShoppingCart4 = () => {
  return (
    <MainPage>
      <HeaderShoppingCart>
        Shopping List
        <AddItemButton>
          <Button>+ Add Item</Button>
        </AddItemButton>
      </HeaderShoppingCart>
      <ShoppingListForm>
        <Table columns={columns}></Table>
      </ShoppingListForm>
    </MainPage>
  )
}

export default ShoppingCart4
