import styled from 'styled-components'

export const ResultText = styled.div`
  font-size: 2rem;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 200px;
  margin: 0 15px;
  @media (max-width: 600px) {
    display: none;
  }
`

export const MobileResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 200px;
  margin: 0 15px;
  @media (min-width: 601px) {
    display: none;
  }
`

export const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #fbfbfb;
  background: #fbfbfb;
  color: hsl(214, 47%, 23%);
  font-size: 2em;
  width: 100%;
  height: 3rem;
  cursor: pointer;
`

export const ResultStateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
