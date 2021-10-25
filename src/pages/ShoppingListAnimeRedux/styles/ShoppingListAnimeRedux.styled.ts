import styled from 'styled-components'

export const ShoppingListHeader = styled.h1`
  text-align: center;
  font-weight: 400;
  margin: 20px auto;
`
export const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
`
export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 10px;
  align-items: center;
  justify-items: space-between;
  position: relative;
  width: 100%;
  height: 20%;
`
export const AddItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 20%%;
  height: 100%;
`
export const TablePart = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 90%;
  overflow: scroll;
`
export const TotalPricePart = styled.div`
  display: flex;
  font-size: 40px;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 10%%;
`
