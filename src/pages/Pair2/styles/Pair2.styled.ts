import styled from 'styled-components'

export const ShoppingListHeader = styled.h1`
  text-align: center;
  font-weight: 400;
  margin: 20px auto;
`
export const FullScreenContainer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: static;
  width: 100%;
  height: 100%;
  padding: 1em;
`
export const GroupCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 3fr;
  grid-gap: 1rem;
  justify-content: space-evenly;
  padding: 10px 0;
  width: 90vw;
  margin: auto;
  flex-direction: row;
  padding: 1em;
`
export const QuantityContainer = styled.div`
  position: static;
  padding: 1px;
`
export const Quantity = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: calc(11px + 1vw);
  position: relative;
`
export const ItemNameContainer = styled.div`
  position: static;
  padding: 1px;
`
export const ItemName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: calc(11px + 1vw);
  position: relative;
`
export const ActionContainer = styled.div`
  position: static;
  padding: 1px;
`
export const Action = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: calc(11px + 1vw);
  position: relative;
`
