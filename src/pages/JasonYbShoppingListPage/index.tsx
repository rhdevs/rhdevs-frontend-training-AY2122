import React from 'react'

import { AddItemButtonContainer, HeaderContainer, ShoppingListHeader } from './styles/JasonYbShoppingListPage.styled'
import { Button } from 'antd'

const JasonYbShoppingListPage = () => {
  return (
    <>
      <HeaderContainer>
        <ShoppingListHeader>Shopping List</ShoppingListHeader>
        <AddItemButtonContainer>
          <Button type="dashed">+ Add item</Button>
        </AddItemButtonContainer>
      </HeaderContainer>
    </>
  )
}

export default JasonYbShoppingListPage
