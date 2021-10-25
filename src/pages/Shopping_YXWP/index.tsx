import React, { useState } from 'react'
import { Button, Card, Input, Table, Space } from 'antd'
import { ShoppingHeader } from './styles/Shopping_YXWP.styled'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'

const { Column } = Table

const Shopping_YXWP = () => {
  interface Props {
    key: number
    itemQuantity: number
    itemName: string
  }
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [index, setIndex] = useState(3)
  const [data, setData] = useState<Props[]>([
    {
      key: 1,
      itemQuantity: 3,
      itemName: 'Dummy Item 1',
    },
    {
      key: 2,
      itemQuantity: 4,
      itemName: 'Dummy Item 2',
    },
  ])

  const handleAddItem = () => {
    setData((prevData: Props[]) => [...prevData, { key: index, itemQuantity: quantity, itemName: name }])
    setIndex(index + 1)
  }

  const handleIncreaseQuantity = (currItem: Props) => {
    setData(data.map((item) => (item.key === currItem.key ? { ...item, itemQuantity: item.itemQuantity + 1 } : item)))
  }

  const handleDecreaseQuantity = (currItem: Props) => {
    setData(data.map((item) => (item.key === currItem.key ? { ...item, itemQuantity: item.itemQuantity - 1 } : item)))
  }

  const handleDeleteItem = (currItem: Props) => {
    setData(data.filter((item) => item.key != currItem.key))
  }

  return (
    <>
      <Card>
        <ShoppingHeader>Shopping time! whee! WIP!</ShoppingHeader>
        <Space>
          <Input placeholder="Item Name" onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} />
          <Button type="primary" onClick={handleAddItem}>
            Add item
          </Button>
        </Space>
        <Table dataSource={data}>
          <Column title="Item Name" dataIndex="itemName" key="itemName" />
          <Column title="Quantity" dataIndex="itemQuantity" key="itemQuantity" />
          <Column
            title="Action"
            key="action"
            render={(currItem: Props) => (
              <Space>
                <Button type="link" icon={<PlusCircleOutlined />} onClick={() => handleIncreaseQuantity(currItem)} />
                <Button type="link" icon={<MinusCircleOutlined />} onClick={() => handleDecreaseQuantity(currItem)} />
                <Button type="link" onClick={() => handleDeleteItem(currItem)}>
                  Delete
                </Button>
              </Space>
            )}
          />
        </Table>
      </Card>
    </>
  )
}

export default Shopping_YXWP
