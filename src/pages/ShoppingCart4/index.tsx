import React from 'react'
import { Button } from 'antd'
import { ReactDOM } from 'react'
import { render } from 'react-dom'
import { MainPage, HeaderShoppingCart, AddItemButton } from './styles/ShoppingCart4.styled'

const ShoppingCart4 = () => {
  return (
    <MainPage>
      <HeaderShoppingCart>
        Shopping List
        <AddItemButton>
          <Button>+ Add Item</Button>
        </AddItemButton>
      </HeaderShoppingCart>
    </MainPage>
  )
}

export default ShoppingCart4
