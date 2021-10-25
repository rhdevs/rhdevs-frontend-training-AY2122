import React, { useState } from 'react'
import { Input } from 'antd'
import { ItemAdderContainer } from '../../pages/Pair2/styles/Pair2.styled'

import QuantityInput from './QuantityInput'
import AddButton from './AddButton'
import { ListEntry } from './ListItem'

type ItemAdderType = {
  list: ListEntry[]
  setList: React.Dispatch<React.SetStateAction<ListEntry[]>>
}

const ItemAdder = (props: ItemAdderType) => {
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
    setEntry({ id: id + 1, quantity: entry.quantity, itemName: entry.itemName }) // prevents unexpected behaviour when adding items of same name simultaneously
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
      <Input placeholder="Item name" addonBefore="Item Name" onChange={(e) => updateName(e.currentTarget.value)} />
      <QuantityInput
        onChange={(e) => updateQuantity(parseInt(Number(e.currentTarget.value) > 0 ? e.currentTarget.value : '1'))} // ensure user don't input numbers <= 0
      />
    </ItemAdderContainer>
  )
}

export default ItemAdder
