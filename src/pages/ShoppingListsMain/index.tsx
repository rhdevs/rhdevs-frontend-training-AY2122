import React from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../../App'
import ShoppingCard from '../../components/ShoppingCard'
import { ShoppingListHeader, GroupCardsContainer } from './styles/ShoppingListMain.styled'

const ShoppingListMain = () => {
  const history = useHistory()
  return (
    <>
      <ShoppingListHeader>Our Shopping Lists!</ShoppingListHeader>
      <GroupCardsContainer>
        <ShoppingCard names="name1, name2, name4" onClick={() => history.push(PATHS.EXAMPLE_SHOPPING_PAGE)} />
        <ShoppingCard names="Yixuan, WeiPin" onClick={() => history.push(PATHS.EXAMPLE_SHOPPING_PAGE)} />
        <ShoppingCard names="Maxim, Marcus" onClick={() => history.push(PATHS.PAIR_2_SHOPPING_PAGE)} />
      </GroupCardsContainer>
    </>
  )
}

export default ShoppingListMain
