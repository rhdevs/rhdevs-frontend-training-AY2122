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
        <Button onClick={incQuantity}>Increase</Button>
        <Button onClick={decQuantity}>Decrease</Button>
        <Button onClick={deleteItem}>Delete</Button>
      </ActionContainer>
    </GroupCardsContainer>
  )
}

const ItemAdder = (props: itemAdder) => {
  const list = props.list
  const setList = props.setList

  const [entry, setEntry] = useState<listEntry>({ quantity: 0, itemName: '' })

  const addItem = () => {
    const newList = entry.itemName ? [...list, entry] : [...list]
    setList(newList)
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
      <Button onClick={addItem}>Add</Button>
      <Input addonBefore={'Item Name'} onChange={(e) => updateName(e.currentTarget.value)} />
      <Input
        type={'number'}
        addonBefore={'Quantity'}
        onChange={(e) => updateQuantity(parseInt(e.currentTarget.value))}
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
      <FullScreenContainer>
        {items.map((value, index) => (
          <ListItem key={`list-item-${index}`} list={items} setList={setItems} index={index} />
        ))}
      </FullScreenContainer>
    </>
  )
}

export default Pair2
