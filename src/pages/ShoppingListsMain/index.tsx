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
        <ShoppingCard names="Elva, Ki Yong" onClick={() => history.push(PATHS.SHOPPING_PAGE_PAIR_FOUR)} />
        <ShoppingCard names="Elva, Ki Yong (Redux)" onClick={() => history.push(PATHS.SHOPPING_PAGE_PAIR_FOUR_REDUX)} />
        <ShoppingCard names="Prince, Tai" onClick={() => history.push(PATHS.SHOPPING_LIST_ANIME_GANG_REDUX)} />
        <ShoppingCard names="Yixuan, Weipin" onClick={() => history.push(PATHS.SHOPPING_PAGE_YIXUAN_WEIPIN)} />
        <ShoppingCard names="Maxim, Marcus" onClick={() => history.push(PATHS.PAIR_2_SHOPPING_PAGE)} />
        <ShoppingCard names="Maxim, Marcus (Redux)" onClick={() => history.push(PATHS.PAIR_2_SHOPPING_PAGE_REDUX)} />
        <ShoppingCard
          names="Yi Xuan Wei Pin (Redux)"
          onClick={() => history.push(PATHS.YIXUAN_WEIPIN_SHOPPING_REDUX)}
        />
        <ShoppingCard names="En Hao Venus" onClick={() => history.push(PATHS.PAIR3_SHOPPING_PAGE)} />
        <ShoppingCard names="En Hao Venus" onClick={() => history.push(PATHS.PAIR_3_SHOPPING_PAGE)} />
        <ShoppingCard names="Jason, Yong Bin" onClick={() => history.push(PATHS.JASON_YB_SHOPPING_LIST_PAGE)} />
        <ShoppingCard
          names="Jason, Yong Bin, REDUX"
          onClick={() => history.push(PATHS.JASON_YB_REDUX_SHOPPING_LIST_PAGE)}
        />
        <ShoppingCard names="zhikai, shaokiat" onClick={() => history.push(PATHS.SKZK_SHOPPING_PAGE)} />
        <ShoppingCard names="zhikai, shaokiat (Redux)" onClick={() => history.push(PATHS.SKZK_SHOPPING_PAGE_REDUX)} />
        {/* Create group cards here */}
        <ShoppingCard names="Chun Yu, Yong Zhang" onClick={() => history.push(PATHS.SHOPPING_PAGE_CHUNYU_YONGZHANG)} />
      </GroupCardsContainer>
    </>
  )
}

export default ShoppingListMain
