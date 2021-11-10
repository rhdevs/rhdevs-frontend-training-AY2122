import { PageHeader } from 'antd'
import React from 'react'
import { ToggleContainer, ToggleWord } from './styles/PriceToggleJasonStyles'

export default function PriceToggleJason() {
  return (
    <>
      <PageHeader>Our pricing</PageHeader>
      <ToggleContainer>
        <ToggleWord>Annually</ToggleWord>
        <ToggleWord>Monthly</ToggleWord>
      </ToggleContainer>
    </>
  )
}
