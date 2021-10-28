import React from 'react'
import {
  GroupCardsContainer,
  QuantityContainer,
  ItemNameContainer,
  ActionContainer,
} from '../../pages/Pair2/styles/Pair2.styled'

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

export default ListHeader
