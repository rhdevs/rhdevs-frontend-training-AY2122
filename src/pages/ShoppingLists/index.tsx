import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import ShoppingCard from '../../components/ShoppingCard'
import { ShoppingListHeader, GroupCardsContainer } from './styles/ShoppingListMain.styled'
import PageHeader from '../../components/PageHeader'
import { MembersSection } from '../LandingPage/styles/LandingPage.styled'

const ShoppingListMain = () => {
  const navigate = useNavigate()
  return (
    <MembersSection>
      <PageHeader
        title="ShoppingLists"
        description="pair work to shopping lists with states to practice using React hooks and Redux"
      />
      <ShoppingListHeader>Our Shopping Lists!</ShoppingListHeader>
      <GroupCardsContainer>
        <ShoppingCard names="Example" onClick={() => navigate(PATHS.EXAMPLE_SHOPPING_PAGE)} />
        <ShoppingCard names="Tai, Prince" onClick={() => navigate(PATHS.SHOPPING_LIST_ANIME_GANG)} />
        <ShoppingCard names="Prince, Tai (Redux)" onClick={() => navigate(PATHS.SHOPPING_LIST_ANIME_GANG_REDUX)} />

        <ShoppingCard names="Elva, Ki Yong" onClick={() => navigate(PATHS.SHOPPING_PAGE_PAIR_FOUR)} />
        <ShoppingCard names="Elva, Ki Yong (Redux)" onClick={() => navigate(PATHS.SHOPPING_PAGE_PAIR_FOUR_REDUX)} />

        <ShoppingCard names="Yixuan, Weipin" onClick={() => navigate(PATHS.SHOPPING_PAGE_YIXUAN_WEIPIN)} />
        <ShoppingCard names="Yi Xuan Wei Pin (Redux)" onClick={() => navigate(PATHS.YIXUAN_WEIPIN_SHOPPING_REDUX)} />

        <ShoppingCard names="Maxim, Marcus" onClick={() => navigate(PATHS.PAIR_2_SHOPPING_PAGE)} />
        <ShoppingCard names="Maxim, Marcus (Redux)" onClick={() => navigate(PATHS.PAIR_2_SHOPPING_PAGE_REDUX)} />

        <ShoppingCard names="En Hao Venus" onClick={() => navigate(PATHS.PAIR_3_SHOPPING_PAGE)} />
        <ShoppingCard names="En Hao Venus (Redux)" onClick={() => navigate(PATHS.PAIR3_SHOPPING_PAGE)} />

        <ShoppingCard names="Jason, Yong Bin" onClick={() => navigate(PATHS.JASON_YB_SHOPPING_LIST_PAGE)} />
        <ShoppingCard
          names="Jason, Yong Bin, REDUX"
          onClick={() => navigate(PATHS.JASON_YB_REDUX_SHOPPING_LIST_PAGE)}
        />

        <ShoppingCard names="zhikai, shaokiat" onClick={() => navigate(PATHS.SKZK_SHOPPING_PAGE)} />
        <ShoppingCard names="zhikai, shaokiat (Redux)" onClick={() => navigate(PATHS.SKZK_SHOPPING_PAGE_REDUX)} />

        <ShoppingCard names="Chun Yu, Yong Zhang" onClick={() => navigate(PATHS.SHOPPING_PAGE_CHUNYU_YONGZHANG)} />
      </GroupCardsContainer>
    </MembersSection>
  )
}

export default ShoppingListMain
