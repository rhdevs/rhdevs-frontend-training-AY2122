import React from 'react'
import { MainPage, MainContainer, BottomComponent } from './styles/SinglePriceGridComponent.styled'

import TopComponentContainer from '../../../components/ElvaYBPractice/TopComponent'
import LeftComponentContainer from '../../../components/ElvaYBPractice/LeftComponent'
import RightComponentContainer from '../../../components/ElvaYBPractice/RightComponent'

const ElvaYBPractice = () => {
  return (
    <MainPage>
      <MainContainer>
        <TopComponentContainer />
        <BottomComponent>
          <LeftComponentContainer />
          <RightComponentContainer />
        </BottomComponent>
      </MainContainer>
    </MainPage>
  )
}

export default ElvaYBPractice
