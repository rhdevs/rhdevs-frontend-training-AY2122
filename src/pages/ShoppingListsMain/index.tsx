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
        <ShoppingCard
          names="Yixuan, Weipin"
          onClick={() => history.push(PATHS.SHOPPING_PAGE_YIXUAN_WEIPIN)}
        ></ShoppingCard>
      </GroupCardsContainer>
    </>
  )
}

export default ShoppingListMain
