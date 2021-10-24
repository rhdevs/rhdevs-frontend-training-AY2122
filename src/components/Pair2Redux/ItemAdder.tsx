import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from 'antd'

import { ItemAdderContainer } from '../../pages/Pair2Redux/styles/Pair2.styled'
import { ListEntry } from '../../store/pair2/types'
import { addItemToList } from '../../store/pair2/actions'
import QuantityInput from './QuantityInput'
import AddButton from './AddButton'

const ItemAdder = () => {
  const dispatch = useDispatch()
  const [entry, setEntry] = useState<ListEntry>({ id: -1, quantity: 1, itemName: '' })

  const addItem = () => {
    setEntry({ ...entry }) // necessary to prevent weird behaviours when simultaneously adding items without changing its name
    dispatch(addItemToList(entry))
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
