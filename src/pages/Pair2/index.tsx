import React, { useState } from 'react'
import { Button } from 'antd'
import {
  ShoppingListHeader,
  GroupCardsContainer,
  FullScreenContainer,
  Quantity,
  ItemName,
  QuantityContainer,
  ItemNameContainer,
  ActionContainer,
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
      </ActionContainer>
    </GroupCardsContainer>
  )
}

const Pair2 = () => {
  const itemsList: listEntry[] = [
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
  const [items, setItems] = useState(itemsList)
  return (
    <>
      <ShoppingListHeader> Shopping List</ShoppingListHeader>
      <FullScreenContainer>
        {itemsList.map((value, index) => (
          <ListItem key={`list-item-${index}`} list={items} setList={setItems} index={index} />
        ))}
      </FullScreenContainer>
    </>
  )
}

export default Pair2
