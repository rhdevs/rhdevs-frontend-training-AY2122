import React from 'react'
import ShoppingList from './ShoppingList'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { ShoppingListHeader } from '../ShoppingListsMain/styles/ShoppingListMain.styled'

import { ButtonDiv } from './styles/main.styled'

const Pair3 = () => {
  return (
    <>
      <ShoppingListHeader>Shopping List</ShoppingListHeader>
      <ButtonDiv>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Add Item
        </Button>
      </ButtonDiv>
      {/* ShoppingList refers to the entire shopping cart table */}
      <ShoppingList />;
    </>
  )
}

export default Pair3
