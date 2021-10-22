import React, { Dispatch, useState } from 'react'
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

import { ListEntry } from '../../store/pair2/types'
import { pair2SetList } from '../../store/pair2/actions'

type Props = {
  list: ListEntry[]
  id: number
  dispatch: Dispatch<any>
}

type ItemAdder = {
  list: ListEntry[]
  dispatch: Dispatch<any>
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
  const id = props.id
  const dispatch = props.dispatch

  const incQuantity = () => {
    const newList = list
    newList.forEach((item) => item.id === id && ++item.quantity)
    dispatch(pair2SetList(newList))
    console.log(typeof pair2SetList(newList))
  }

  const decQuantity = () => {
    const newList = list
    newList.forEach((item) => item.id === id && item.quantity > 1 && --item.quantity)
    dispatch(pair2SetList(newList))
  }

  const deleteItem = () => {
    const newList = list
    dispatch(pair2SetList(newList.filter((item) => item.id !== id)))
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

const ItemAdder = (props: ItemAdder) => {
  const list = props.list
  const dispatch = props.dispatch

  const [id, setId] = useState<number>(list.length)
  const [entry, setEntry] = useState<ListEntry>({ id: id, quantity: 1, itemName: '' })

  const addItem = () => {
    setEntry({ ...entry, id: id })

    if (entry.itemName) {
      setId(id + 1)
      const newList = [entry, ...list]
      dispatch(pair2SetList(newList))
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
      <Button type="primary" onClick={addItem} style={{ width: '140px' }}>
        Add
      </Button>
      <Input placeholder="Item name" addonBefore="Item Name" onChange={(e) => updateName(e.currentTarget.value)} />
      <Input
        type="number"
        min={1}
        defaultValue={1}
        addonBefore="Quantity"
        onChange={(e) => updateQuantity(parseInt(Number(e.currentTarget.value) > 0 ? e.currentTarget.value : '1'))} // ensure user don't input numbers <= 0
        style={{ width: '240px' }}
      />
    </ItemAdderContainer>
  )
}

export { ListHeader, ListItem, ItemAdder }
