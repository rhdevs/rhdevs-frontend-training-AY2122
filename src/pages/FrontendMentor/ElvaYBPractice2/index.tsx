import React from 'react'

import TopComponentContainer from '../../../components/ElvaYBPractice2/TopComponent'
import MainComponentContainer from '../../../components/ElvaYBPractice2/MainComponent'

import { MainPage } from './styles/SliderComponent.styled'

const ElvaYBPractice = () => {
  return (
    <>
      <MainPage>
        <TopComponentContainer />
        <MainComponentContainer />
      </MainPage>
    </>
  )
}

export default ElvaYBPractice
