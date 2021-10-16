import React, { useState } from 'react'
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
import { Button } from 'antd'

export default function Pair2() {
  const [Pair2a, setPair2number] = useState(3)
  const handleIncrease = () => {
    setPair2number(Pair2a + 1)
  }
  const handleDecrease = () => {
    setPair2number(Pair2a - 1)
  }
  const [Pair2b, setPair2numberb] = useState(3)
  const handleIncreaseb = () => {
    setPair2numberb(Pair2b + 1)
  }
  const handleDecreaseb = () => {
    setPair2numberb(Pair2b - 1)
  }
  const [Pair2c, setPair2numberc] = useState(3)
  const handleIncreasec = () => {
    setPair2numberc(Pair2c + 1)
  }
  const handleDecreasec = () => {
    setPair2numberc(Pair2c - 1)
  }

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
            <Quantity>{`${Pair2a}`}</Quantity>
          </QuantityContainer>
          <ItemNameContainer>
            <ItemName>Eggs</ItemName>
          </ItemNameContainer>
          <ActionContainer>
            <Action>
              Delete
              <Button onClick={handleIncrease}>+</Button>
              <Button onClick={handleDecrease}>-</Button>
            </Action>
          </ActionContainer>
        </GroupCardsContainer>
        <GroupCardsContainer>
          <QuantityContainer>
            <Quantity>{`${Pair2b}`}</Quantity>
          </QuantityContainer>
          <ItemNameContainer>
            <ItemName>Eggs</ItemName>
          </ItemNameContainer>
          <ActionContainer>
            <Action>
              Delete
              <Button onClick={handleIncreaseb}>+</Button>
              <Button onClick={handleDecreaseb}>-</Button>
            </Action>
          </ActionContainer>
        </GroupCardsContainer>
        <GroupCardsContainer>
          <QuantityContainer>
            <Quantity>{`${Pair2c}`}</Quantity>
          </QuantityContainer>
          <ItemNameContainer>
            <ItemName>Eggs</ItemName>
          </ItemNameContainer>
          <ActionContainer>
            <Action>
              Delete
              <Button onClick={handleIncreasec}>+</Button>
              <Button onClick={handleDecreasec}>-</Button>
            </Action>
          </ActionContainer>
        </GroupCardsContainer>
      </FullScreenContainer>
    </>
  )
}
