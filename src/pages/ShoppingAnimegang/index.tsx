import React, { useState } from 'react'
import { AddItemsContainer, ShoppingListHeader, TablePart, TopRow } from './styles/ShoppingAnimegang.styled'
import { Table, Button, Space, Input } from 'antd'
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
  const handleOnDeleteClick = (record: Item) => {
    const newList: Item[] = shoppingList.filter((item) => item.key != record.key)
    setShoppingList(newList)
  }
  const handleOnAddItemClick = () => {
    setShowInput(true)
  }
  const handleOnType = (e: string) => {
    setAddItemName(e)
    console.log(addItemName)
    //setShowInput(false)
  }
  const handleOnEnter = () => {
    const newList: Item[] = shoppingList.filter((item) => item)
    const newKey: string = (shoppingList.length + 1).toString()
    const newItem: Item = { key: newKey, quantity: 1, item_name: addItemName }
    newList.push(newItem)
    addItemName === '' ? console.log('no item') : setShoppingList(newList)
    setShowInput(false)
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
      render: (record: Item) => (
        <Space size="middle">
          <Button onClick={() => handleOnPlusClick(record)} shape="circle" icon={<PlusOutlined />}></Button>
          <Button onClick={() => handleOnMinusClick(record)} shape="circle" icon={<MinusOutlined />}></Button>
          <a onClick={() => handleOnDeleteClick(record)}>Delete</a>
        </Space>
      ),
    },
  ]
  const [addItemName, setAddItemName] = useState<string>('')
  const [showInput, setShowInput] = useState<boolean>(false)
  const [shoppingList, setShoppingList] = useState<Item[]>(initialList)
  return (
    <FullScreenContainer>
      <TopRow>
        <ShoppingListHeader> Shopping list</ShoppingListHeader>
        <AddItemsContainer>
          {!showInput && (
            <Button onClick={() => handleOnAddItemClick()} type="primary">
              + Add item
            </Button>
          )}
          {showInput && (
            <Input
              addonBefore="Enter your item"
              defaultValue=""
              size="small"
              placeholder={addItemName}
              onChange={(e) => handleOnType(e.target.value)}
              onPressEnter={() => handleOnEnter()}
            />
          )}
        </AddItemsContainer>
      </TopRow>
      <TablePart>
        <Table columns={columns} dataSource={shoppingList} />
      </TablePart>
    </FullScreenContainer>
  )
}

export default ShoppingAnimegang
