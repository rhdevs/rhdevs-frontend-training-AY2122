import React from 'react'

import styled from 'styled-components'

const MainContainer = styled.div`
  margin: 1rem 2rem;
`

const PlaceholderBox = styled.div`
  width: 100%;
  height: 100%;
  border: dashed 1px #888;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ComponentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50vh;
  grid-column-gap: 3vw;
`

const StyledText = styled.p`
  font-size: 18px;
  margin-bottom: 1.5rem;
`

const GroupX = () => {
  return (
    <MainContainer>
      <h1>Group X</h1>
      <StyledText>your names, another name</StyledText>
      <ComponentsContainer>
        <PlaceholderBox>old component</PlaceholderBox>
        <PlaceholderBox>new component</PlaceholderBox>
      </ComponentsContainer>
    </MainContainer>
  )
}

export default GroupX
