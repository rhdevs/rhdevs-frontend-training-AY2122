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
export const QuantityHeaderContainer = styled.div`
  position: static;
  padding: 1px;
  background-color: #e0e0e0;
  text-align: center;
  vertical-align: middle;
`
export const ItemNameHeaderContainer = styled.div`
  position: static;
  padding: 1px;
  background-color: #e0e0e0;
  text-align: center;
  vertical-align: middle;
`
export const ActionHeaderContainer = styled.div`
  position: static;
  padding: 1px;
  @media (max-width: 600px) {
    width: 30vw;
  }
  background-color: #e0e0e0;
  text-align: center;
  vertical-align: middle;
`
export const QuantityContainer = styled.div`
  position: static;
  padding: 1px;
  text-align: center;
`
export const Quantity = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: calc(11px + 1vw);
  position: relative;
  color: #1890ff;
`
export const ItemNameContainer = styled.div`
  position: static;
  padding: 1px;
  text-align: center;
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
  @media (max-width: 600px) {
    width: 30vw;
  }
  text-align: center;
`
export const Action = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: calc(11px + 1vw);
  position: relative;
`

export const ItemAdderContainer = styled.div`
  display: flex;
  flex-direction: row;
`
