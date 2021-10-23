import React, { useState } from 'react'
import { Button, Input } from 'antd'
import {
  GroupCardsContainer,
  Quantity,
  ItemName,
  QuantityContainer,
  ItemNameContainer,
  ActionContainer,
  ItemAdderContainer,
} from './styles/Pair2.styled'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { AddButton, DeleteButton, QuantityInput } from './styles/components'

type Props = {
  list: ListEntry[]
  setList: React.Dispatch<React.SetStateAction<ListEntry[]>>
  id: number
}

export type ListEntry = {
  id: number
  quantity: number
  itemName: string
}

type ItemAdderType = {
  list: ListEntry[]
  setList: React.Dispatch<React.SetStateAction<ListEntry[]>>
}

export const ListHeader = () => {
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

export const ListItem = (props: Props) => {
  const list = props.list
  const setList = props.setList
  const id = props.id

  const incQuantity = () => {
    const newList = [...list]
    newList.forEach((item) => item.id === id && ++item.quantity)
    setList(newList)
  }

  const decQuantity = () => {
    const newList = [...list]
    newList.forEach((item) => item.id === id && item.quantity > 1 && --item.quantity) // prevent quantity going <1
    setList(newList)
  }

  const deleteItem = () => {
    const newList = list
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
        <DeleteButton onClick={deleteItem} />
      </ActionContainer>
    </GroupCardsContainer>
  )
}

export const ItemAdder = (props: ItemAdderType) => {
  const list = props.list
  const setList = props.setList

  const [id, setId] = useState(list.length)
  const [entry, setEntry] = useState<ListEntry>({ id: id, quantity: 1, itemName: '' })

  const addItem = () => {
    setEntry({ ...entry, id: id })

    if (entry.itemName) {
      setId(id + 1)
      const newList = [entry, ...list]
      setList(newList)
    }
    setEntry({ id: id + 1, quantity: 1, itemName: entry.itemName }) // prevents unexpected behaviour when adding items of same name simultaneously
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
      <AddButton onClick={addItem} />
      <Input placeholder="Item Name" addonBefore="Item Name" onChange={(e) => updateName(e.currentTarget.value)} />
      <QuantityInput
        onChange={(e: { currentTarget: { value: string } }) =>
          updateQuantity(parseInt(Number(e.currentTarget.value) > 0 ? e.currentTarget.value : '1'))
        } // ensure user don't input numbers <= 0
      />
    </ItemAdderContainer>
  )
}
