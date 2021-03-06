import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from 'antd'

import { ItemAdderContainer } from '../../pages/ShoppingLists/Pair2Redux/styles/Pair2.styled'
import { ListEntry } from '../../store/pair2/types'
import { addItemToList } from '../../store/pair2/actions'
import QuantityInput from './QuantityInput'
import AddButton from './AddButton'

const ItemAdder = () => {
  const dispatch = useDispatch()
  const default_entry: ListEntry = { id: -1, quantity: 1, itemName: '' }
  const [entry, setEntry] = useState<ListEntry>(default_entry)

  const addItem = () => {
    dispatch(addItemToList(entry))
    setEntry(default_entry)
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
      <Input
        placeholder="Item name"
        addonBefore="Item Name"
        onChange={(e) => updateName(e.currentTarget.value)}
        value={entry.itemName}
      />
      <QuantityInput
        onChange={(e) => updateQuantity(parseInt(Number(e.currentTarget.value) > 0 ? e.currentTarget.value : '1'))} // ensure user don't input numbers <= 0
        value={entry.quantity}
      />
    </ItemAdderContainer>
  )
}

export default ItemAdder
