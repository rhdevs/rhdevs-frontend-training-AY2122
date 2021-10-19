import React, { useState } from 'react'
import { Button, Card, Input, InputNumber, Table, Space } from 'antd'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { valueType } from 'antd/lib/statistic/utils'

const { Column } = Table

const Shopping_YXWP = () => {
  interface Props {
    key: number
    itemQuantity: valueType
    itemName: string
  }
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState<valueType>(0)
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

  const handleIncreaseQuantity = (item: Props) => {
    console.log('Increased')
  }

  const handleDecreaseQuantity = (item: Props) => {
    console.log('Decreased')
  }

  const handleDeleteItem = (item: Props) => {
    console.log('This needs to be fixed! Item is returning undefined.')
  }

  return (
    <>
      <Card>
        <h1>Shopping time! whee! WIP!</h1>
        <Space>
          <Input placeholder="Item Name" onChange={(e) => setName(e.target.value)} />
          <InputNumber placeholder="Quantity" onChange={(e) => setQuantity(e)} />
          <Button type="primary" onClick={handleAddItem}>
            Add item
          </Button>
        </Space>
        <Table dataSource={data}>
          <Column title="Index" dataIndex="key" key="key" />
          <Column title="Item Name" dataIndex="itemName" key="itemName" />
          <Column title="Quantity" dataIndex="itemQuantity" key="itemQuantity" />
          <Column
            title="Action"
            dataIndex="action"
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
