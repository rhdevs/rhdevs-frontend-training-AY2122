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
        <ShoppingCard names="Jason, Yong Bin" onClick={() => history.push(PATHS.JASON_YB_SHOPPING_LIST_PAGE)} />
        <ShoppingCard
          names="Jason, Yong Bin, REDUX"
          onClick={() => history.push(PATHS.JASON_YB_REDUX_SHOPPING_LIST_PAGE)}
        />
        {/* Create group cards here */}
      </GroupCardsContainer>
    </>
  )
}

export default ShoppingListMain
