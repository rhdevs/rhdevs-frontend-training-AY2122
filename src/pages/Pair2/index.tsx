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
  index: number
}

type listEntry = {
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
  const index = props.index

  const incQuantity = () => {
    const newList = [...list]
    newList[index].quantity = newList[index].quantity + 1
    setList(newList)
  }

  const decQuantity = () => {
    const newList = [...list]
    newList[index].quantity = newList[index].quantity - 1
    setList(newList)
  }

  const deleteItem = () => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <GroupCardsContainer>
      <QuantityContainer>
        <Quantity>{list[index].quantity}</Quantity>
      </QuantityContainer>
      <ItemNameContainer>
        <ItemName>{list[index].itemName}</ItemName>
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

  const [entry, setEntry] = useState<listEntry>({ quantity: 0, itemName: '' })

  const addItem = () => {
    const newList = entry.itemName ? [entry, ...list] : [...list]
    setList(newList)
    setEntry({ quantity: 0, itemName: '' })
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
  const defaultItems: listEntry[] = [
    {
      quantity: 2,
      itemName: 'broccoli',
    },
    {
      quantity: 6,
      itemName: 'nutella',
    },
    {
      quantity: 4,
      itemName: 'grapes',
    },
    {
      quantity: 6,
      itemName: 'oranges',
    },
  ]
  const [items, setItems] = useState(defaultItems)

  return (
    <>
      <ShoppingListHeader> Shopping List</ShoppingListHeader>
      <ItemAdder list={items} setList={setItems} />
      <ListHeader />
      <FullScreenContainer>
        {items.map((value, index) => (
          <ListItem key={`list-item-${index}`} list={items} setList={setItems} index={index} />
        ))}
      </FullScreenContainer>
    </>
  )
}

export default Pair2
