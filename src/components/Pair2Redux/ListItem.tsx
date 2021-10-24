import React from 'react'
import { ListEntry } from '../../store/pair2/types'
import { decListItemQuantity, deleteListItem, incListItemQuantity } from '../../store/pair2/actions'
import { useDispatch } from 'react-redux'
import DeleteButton from './DeleteButton'
import QuantityButton from './QuantityButton'

import {
  GroupCardsContainer,
  Quantity,
  ItemName,
  QuantityContainer,
  ItemNameContainer,
  ActionContainer,
} from '../../pages/Pair2Redux/styles/Pair2.styled'

type Props = {
  list: ListEntry[]
  id: number
}

const ListItem = (props: Props) => {
  const list = props.list
  const id = props.id
  const dispatch = useDispatch()

  const incQuantity = () => {
    dispatch(incListItemQuantity(id, list))
  }

  const decQuantity = () => {
    dispatch(decListItemQuantity(id, list))
  }

  const deleteItem = () => {
    dispatch(deleteListItem(id))
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
