import React, { useState } from 'react'
import { Button } from 'antd'
import { Table, Space } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { MainPage, HeaderShoppingCart, Header, AddItemButton, ShoppingListForm } from './styles/ShoppingCart4.styled'
import AddItemModal from '../../components/AddItemModal'

export interface ShoppingListItem {
  key: number
  shoppingListItemName: string
  itemCount: number
}

const ShoppingCart4 = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([])
  const [showModal, setShowModal] = useState(false)

  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'itemCount',
      key: 'itemCount',
    },
    {
      title: 'Item Name',
      dataIndex: 'shoppingListItemName',
      key: 'shoppingListItemName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: ShoppingListItem) => (
        <Space size="middle">
          <MinusCircleOutlined onClick={() => minusQuantity(record)}></MinusCircleOutlined>
          <PlusCircleOutlined onClick={() => addQuantity(record)}></PlusCircleOutlined>
          <a onClick={() => removeItem(record)}>Delete</a>
        </Space>
      ),
    },
  ]

  const addData = (newShoppingListItem: ShoppingListItem) => {
    shoppingList.push(newShoppingListItem)
    setShoppingList(shoppingList)
    setShowModal(false)
  }

  const addQuantity = (item: ShoppingListItem) => {
    const updatedShoppingList = shoppingList.map((x) =>
      x.key === item.key ? { ...x, itemCount: item.itemCount + 1 } : x,
    )
    setShoppingList(updatedShoppingList)
  }

  const minusQuantity = (item: ShoppingListItem) => {
    const updatedShoppingList = shoppingList.map((x) =>
      x.key === item.key && x.itemCount > 1 ? { ...x, itemCount: item.itemCount - 1 } : x,
    )
    setShoppingList(updatedShoppingList)
  }

  const removeItem = (item: ShoppingListItem) => {
    const updatedShoppingList = shoppingList.filter((x) => x.key !== item.key)
    setShoppingList(updatedShoppingList)
  }

  const hideModal = () => {
    setShowModal(false)
  }

  return (
    <MainPage>
      <HeaderShoppingCart>
        <AddItemButton>
          <Button onClick={() => setShowModal(true)}>
            <PlusOutlined /> Add Item
          </Button>
        </AddItemButton>
        <Header>Shopping List</Header>
      </HeaderShoppingCart>
      <ShoppingListForm>
        <Table columns={columns} dataSource={[...shoppingList]} pagination={false}></Table>
      </ShoppingListForm>
      <AddItemModal
        itemKey={shoppingList.length}
        showModal={showModal}
        addData={addData}
        hideModal={hideModal}
      ></AddItemModal>
    </MainPage>
  )
}

export default ShoppingCart4
