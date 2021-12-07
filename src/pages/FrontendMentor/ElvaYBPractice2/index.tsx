import React, { useState } from 'react'
import { Slider, Switch } from 'antd'

import IconCheck from '../../../assets/ElvaYongbin/images/icon-check.svg'
import SliderIcon from '../../../../assets/ElvaYongbin/images/icon-slider.svg'
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
