import React, { useState } from 'react'
import { ItemAdder, ListEntry, ListHeader, ListItem } from './components'
import { ShoppingListHeader, FullScreenContainer } from './styles/Pair2.styled'

const Pair2 = () => {
  const defaultItems: ListEntry[] = [
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
  const [items, setItems] = useState<ListEntry[]>(defaultItems)

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
