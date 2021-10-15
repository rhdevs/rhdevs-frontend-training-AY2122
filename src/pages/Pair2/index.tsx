import React from 'react'
import {
  ShoppingListHeader,
  GroupCardsContainer,
  FullScreenContainer,
  Quantity,
  ItemName,
  Action,
  QuantityContainer,
  ItemNameContainer,
  ActionContainer,
} from './styles/Pair2.styled'

const Pair2 = () => {
  return (
    <>
      <ShoppingListHeader> Shopping List</ShoppingListHeader>
      <FullScreenContainer>
        <GroupCardsContainer>
          <QuantityContainer>
            <Quantity>Quantity</Quantity>
          </QuantityContainer>
          <ItemNameContainer>
            <ItemName>Item Name</ItemName>
          </ItemNameContainer>
          <ActionContainer>
            <Action>Action</Action>
          </ActionContainer>
        </GroupCardsContainer>

        <GroupCardsContainer>
          <QuantityContainer>
            <Quantity>3</Quantity>
          </QuantityContainer>
          <ItemNameContainer>
            <ItemName>Eggs</ItemName>
          </ItemNameContainer>
          <ActionContainer>
            <Action>Delete</Action>
          </ActionContainer>
        </GroupCardsContainer>
        <GroupCardsContainer>
          <QuantityContainer>
            <Quantity>3</Quantity>
          </QuantityContainer>
          <ItemNameContainer>
            <ItemName>Eggs</ItemName>
          </ItemNameContainer>
          <ActionContainer>
            <Action>Delete</Action>
          </ActionContainer>
        </GroupCardsContainer>
        <GroupCardsContainer>
          <QuantityContainer>
            <Quantity>3</Quantity>
          </QuantityContainer>
          <ItemNameContainer>
            <ItemName>Eggs</ItemName>
          </ItemNameContainer>
          <ActionContainer>
            <Action>Delete</Action>
          </ActionContainer>
        </GroupCardsContainer>
      </FullScreenContainer>
    </>
  )
}

export default Pair2
