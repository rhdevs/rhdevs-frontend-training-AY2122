import React, { useState } from 'react'
import { Button, Card, Input, Table, Space } from 'antd'
import { ShoppingHeader } from './styles/YXWPRedux.styled'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, deleteItem, addItem } from '../../store/yxwp_store/actions'
import { RootState } from '../../store/types'
import { ShoppingListEntry } from '../../store/yxwp_store/types'
const { Column } = Table

const YXWPRedux = () => {
  const dispatch = useDispatch()
  const { itemList } = useSelector((state: RootState) => state.yxwp_store)
  const blankItem: ShoppingListEntry = { itemName: '', itemQuantity: 0, key: -1 }
  const [item, setItem] = useState<ShoppingListEntry>(blankItem)

  interface Props {
    key: number
    itemQuantity: number
    itemName: string
  }

  // **** Legacy Add Feature for reference only *****
  const handleAddItem = () => {
    dispatch(addItem(item))
    setItem(blankItem)
  }

  const updateName = (name: string) => {
    const newItem = { ...item }
    newItem.itemName = name
    setItem(newItem)
  }

  const updateQuantity = (quantity: number) => {
    const newItem = { ...item }
    newItem.itemQuantity = quantity
    setItem(newItem)
  }

  return (
    <>
      <Card>
        <ShoppingHeader>Shopping Time! (Redux ver.)</ShoppingHeader>
        <Space>
          <Input placeholder="Item Name" onChange={(e) => updateName(e.target.value)} />
          <Input placeholder="Quantity" onChange={(e) => updateQuantity(parseInt(e.target.value))} />
          <Button type="primary" onClick={handleAddItem}>
            Add item
          </Button>
        </Space>
        <Table dataSource={itemList}>
          <Column title="Item Name" dataIndex="itemName" key="itemName" />
          <Column title="Quantity" dataIndex="itemQuantity" key="itemQuantity" />
          <Column
            title="Action"
            key="action"
            render={(currItem: Props) => (
              <Space>
                <Button
                  type="link"
                  icon={<PlusCircleOutlined />}
                  onClick={() => dispatch(increaseQuantity(currItem.key))}
                />
                <Button
                  type="link"
                  icon={<MinusCircleOutlined />}
                  onClick={() => dispatch(decreaseQuantity(currItem.key))}
                />
                <Button type="link" onClick={() => dispatch(deleteItem(currItem.key))}>
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

export default YXWPRedux
