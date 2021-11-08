import React, { useState } from 'react'
import {
  AddItemsContainer,
  ShoppingListHeader,
  TablePart,
  TopRow,
  TotalPricePart,
  FullScreenContainer,
} from './styles/ShoppingAnimegang.styled'
import { Table, Button, Space, Input } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

const initialList: Item[] = [
  {
    key: '1',
    quantity: 3,
    item_name: 'Eggs',
    price: 5,
    total: 5,
  },
  {
    key: '2',
    quantity: 5,
    item_name: 'Eggs',
    price: 5,
    total: 5,
  },
]

type Item = {
  key: string
  quantity: number
  item_name: string
  price: number
  total: number
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
        item.quantity = item.quantity === 0 ? 0 : item.quantity - 1
      }
      return item
    })
    setShoppingList(newList)
  }
  const handleOnDeleteClick = (record: Item) => {
    const newList: Item[] = shoppingList.filter((item) => item.key !== record.key)
    setShoppingList(newList)
  }
  const handleOnAddItemClick = () => {
    setShowInput(true)
  }
  const handleOnType = (e: string) => {
    setAddItemName(e)
  }
  const handleOnEnter = () => {
    if (addItemName !== '') {
      const newList: Item[] = shoppingList.filter((item) => item)
      setNewKeyName(newKeyName + 1)
      const newKey: string = newKeyName.toString()
      const newItem: Item = { key: newKey, quantity: 1, item_name: addItemName, price: 0, total: 0 }
      newList.push(newItem)
      setShoppingList(newList)
    }
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
      render: function actions(item: Item, record: Item) {
        return (
          <Space size="middle">
            <Button onClick={() => handleOnPlusClick(record)} shape="circle" icon={<PlusOutlined />}></Button>
            <Button onClick={() => handleOnMinusClick(record)} shape="circle" icon={<MinusOutlined />}></Button>
            <a onClick={() => handleOnDeleteClick(record)}>Delete</a>
          </Space>
        )
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: function actions(text: string, record: Item) {
        return <Input value={text} onChange={onInputChange(record)} />
      },
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
  ]
  const [newKeyName, setNewKeyName] = useState<number>(initialList.length + 1)
  const [addItemName, setAddItemName] = useState<string>('')
  const [showInput, setShowInput] = useState<boolean>(false)
  const [shoppingList, setShoppingList] = useState<Item[]>(initialList)
  const [totalShoppingListPrice, setTotalShoppingListPrice] = useState<number>(
    initialList[0].total + initialList[1].total,
  )
  const getTotalPrice = (mylist: Item[]) => {
    let number = 0
    for (let i = 0; i < mylist.length; i += 1) {
      number += mylist[i].total
    }
    setTotalShoppingListPrice(number)
    return number
  }
  const onInputChange = (record: Item) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList: Item[] = shoppingList.filter((item) => {
      if (item.key === record.key) {
        item.price = Number(e.target.value)
        item.total = item.quantity * item.price
      }
      return item
    })
    getTotalPrice(shoppingList)
    setShoppingList(newList)
  }

  return (
    <FullScreenContainer>
      <TopRow>
        <ShoppingListHeader> Shopping list</ShoppingListHeader>
        <AddItemsContainer>
          {showInput ? (
            <Input
              addonBefore="Enter your item"
              defaultValue=""
              size="small"
              placeholder={addItemName}
              onChange={(e) => handleOnType(e.target.value)}
              onPressEnter={() => handleOnEnter()}
            />
          ) : (
            <Button onClick={() => handleOnAddItemClick()} type="primary">
              + Add item
            </Button>
          )}
        </AddItemsContainer>
      </TopRow>
      <TablePart>
        <Table columns={columns} dataSource={shoppingList}></Table>
      </TablePart>
      <TotalPricePart>Total Price: {totalShoppingListPrice}</TotalPricePart>
    </FullScreenContainer>
  )
}

export default ShoppingAnimegang
