import React, { useState } from 'react'
import { Button, Input } from 'antd'
import {
  ShoppingListHeader,
  GroupCardsContainer,
  FullScreenContainer,
  Quantity,
  ItemName,
  QuantityContainer,
  ItemNameContainer,
  ActionContainer,
  ItemAdderContainer,
} from './styles/Pair2.styled'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

type Props = {
  list: listEntry[]
  setList: React.Dispatch<React.SetStateAction<listEntry[]>>
  id: number
}

type listEntry = {
  id: number
  quantity: number
  itemName: string
}

type itemAdder = {
  list: listEntry[]
  setList: React.Dispatch<React.SetStateAction<listEntry[]>>
}

const ListHeader = () => {
  return (
    <GroupCardsContainer>
      <QuantityContainer>
        <h2>Quantity</h2>
      </QuantityContainer>
      <ItemNameContainer>
        <h2>Item</h2>
      </ItemNameContainer>
      <ActionContainer>
        <h2>Actions</h2>
      </ActionContainer>
    </GroupCardsContainer>
  )
}

const ListItem = (props: Props) => {
  const list = props.list
  const setList = props.setList
  const id = props.id

  const incQuantity = () => {
    const newList = [...list]
    newList.forEach((item) => item.id == id && ++item.quantity)
    setList(newList)
  }

  const decQuantity = () => {
    const newList = [...list]
    newList.forEach((item) => item.id == id && --item.quantity)
    setList(newList)
  }

  const deleteItem = () => {
    const newList = [...list]
    setList(newList.filter((item) => item.id !== id))
  }

  return (
    <GroupCardsContainer>
      <QuantityContainer>
        <Quantity>{list.find((item) => item.id == id)?.quantity}</Quantity>
      </QuantityContainer>
      <ItemNameContainer>
        <ItemName>{list.find((item) => item.id == id)?.itemName}</ItemName>
      </ItemNameContainer>
      <ActionContainer>
        <Button icon={<PlusOutlined />} onClick={incQuantity} />
        <span> Quantity </span>
        <Button icon={<MinusOutlined />} onClick={decQuantity} />
        <Button danger onClick={deleteItem} style={{ margin: '20px' }}>
          Delete
        </Button>
      </ActionContainer>
    </GroupCardsContainer>
  )
}

const ItemAdder = (props: itemAdder) => {
  const list = props.list
  const setList = props.setList

  const [id, setId] = useState(list.length)
  const [entry, setEntry] = useState<listEntry>({ id: id, quantity: 0, itemName: '' })

  const addItem = () => {
    console.log(id)
    setEntry({ ...entry, id: id })

    if (entry.itemName) {
      setId(id + 1)
      const newList = [entry, ...list]
      setList(newList)
    }
    setEntry({ id: id + 1, quantity: 0, itemName: entry.itemName }) // prevents unexpected behaviour when adding items of same name simultaneously
  }

  const updateName = (value: string) => {
    const newEntry = { ...entry }
    newEntry.itemName = value
    setEntry(newEntry)
  }

  const updateQuantity = (value: number) => {
    const newEntry = { ...entry }
    newEntry.quantity = value
    setEntry(newEntry)
  }

  return (
    <ItemAdderContainer>
      <Button type={'primary'} onClick={addItem} style={{ width: '140px' }}>
        Add
      </Button>
      <Input addonBefore={'Item Name'} onChange={(e) => updateName(e.currentTarget.value)} />
      <Input
        type={'number'}
        addonBefore={'Quantity'}
        onChange={(e) => updateQuantity(parseInt(e.currentTarget.value))}
        style={{ width: '240px' }}
      />
    </ItemAdderContainer>
  )
}

const Pair2 = () => {
  const defaultItems = [
    {
      id: 0,
      quantity: 2,
      itemName: 'broccoli',
    },
    {
      id: 1,
      quantity: 6,
      itemName: 'nutella',
    },
    {
      id: 2,
      quantity: 4,
      itemName: 'grapes',
    },
    {
      id: 3,
      quantity: 6,
      itemName: 'oranges',
    },
  ]
  const [items, setItems] = useState(defaultItems)

  return (
    <>
      <ShoppingListHeader>Shopping List</ShoppingListHeader>
      <ItemAdder list={items} setList={setItems} />
      <ListHeader />
      <FullScreenContainer>
        {items.map((value) => (
          <ListItem key={`list-item-${value.id}`} list={items} setList={setItems} id={value.id} />
        ))}
      </FullScreenContainer>
    </>
  )
}

export default Pair2
