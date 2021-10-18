import styled from 'styled-components'

export const ShoppingListHeader = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;
  margin: 20px auto;
`

export const AddItemContainer = styled.h1`
  // height: 30vh;
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
export const AddTextInput = styled.input`
  border-color: #000000;
  width: 10vw;
  margin: 10px;
  padding: 10px;
  font-size: 10px;
  align-items: center;
`
export const ButtonRow = styled.div`
  width: 10vw;
  margin: 10px;
  padding: 5px;
  align-items: center;
  flex-direction: row;
`

export const CartTable = styled.table`
  width: 80vw;
  padding: 10px;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`
