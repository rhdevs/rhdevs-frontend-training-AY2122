import React from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import ShoppingCard from '../../components/ShoppingCard'
import { ShoppingListHeader, GroupCardsContainer } from '../ShoppingLists/styles/ShoppingListMain.styled'

const ShoppingListMain = () => {
  const history = useHistory()
  return (
    <>
      <ShoppingListHeader>Our Shopping Lists!</ShoppingListHeader>
      <GroupCardsContainer>
        <ShoppingCard names="name1, name2, name4" onClick={() => history.push(PATHS.EXAMPLE_SHOPPING_PAGE)} />
        {/* Create group cards here */}
        <ShoppingCard names="Tai, Prince" onClick={() => history.push(PATHS.SHOPPING_LIST_ANIME_GANG)} />
      </GroupCardsContainer>
    </>
  )
}

export default ShoppingListMain
