import React from 'react'

import {
  MainPage,
  HeaderShoppingCart,
  Title,
  AddItemButton,
  AddItemButtonContainer,
} from './styles/ShoppingCart4.styled'

const ShoppingCart4 = () => {
  return (
    <MainPage>
      <HeaderShoppingCart>
        <Title>Shopping List</Title>
        <AddItemButtonContainer>
          <AddItemButton>+ Add Item</AddItemButton>
        </AddItemButtonContainer>
      </HeaderShoppingCart>
    </MainPage>
  )
}

export default ShoppingCart4
