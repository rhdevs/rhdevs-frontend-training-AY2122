import styled from 'styled-components'

export const ShoppingListHeader = styled.h1`
  text-align: center;
  font-weight: 400;
  margin: 20px auto;
`

export const GroupCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 200px;
  grid-gap: 1rem;
  justify-content: space-evenly;
  padding: 10px 0;
  width: 90vw;
  margin: auto;
`
export const ItemRowContainer = styled.div`
  width: 80vw;
  padding: 10px;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CellContainer = styled.div`
  padding: 10px;
  margin: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
`
