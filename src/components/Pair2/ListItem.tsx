import React from 'react'
import {
  GroupCardsContainer,
  Quantity,
  ItemName,
  QuantityContainer,
  ItemNameContainer,
  ActionContainer,
} from '../../pages/Pair2/styles/Pair2.styled'

import DeleteButton from './DeleteButton'
import QuantityButton from './QuantityButton'

export type ListEntry = {
  id: number
  quantity: number
  itemName: string
}

type Props = {
  list: ListEntry[]
  setList: React.Dispatch<React.SetStateAction<ListEntry[]>>
  id: number
}

const ListItem = (props: Props) => {
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
        <QuantityButton type="+" onClick={incQuantity} />
        <span> Quantity </span>
        <QuantityButton type="-" onClick={decQuantity} />
        <DeleteButton onClick={deleteItem} />
      </ActionContainer>
    </GroupCardsContainer>
  )
}

export default ListItem
