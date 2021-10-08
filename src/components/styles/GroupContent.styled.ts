import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 1rem 2rem;
  height: fit-content;
`

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ComponentsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3vw;
  min-height: 50vh;
  height: fit-content;
`

export const StyledText = styled.p`
  font-size: 18px;
`

export const StyledImg = styled.img`
  max-width: 100%;
  cursor: pointer;
`
