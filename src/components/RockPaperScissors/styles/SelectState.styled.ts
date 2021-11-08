import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 601px) {
    padding-top: 150px;
    padding-bottom: 230px;
  }
  @media (max-width: 600px) {
    padding-top: 90px;
    padding-bottom: 135px;
  }
`

export const TopSelect = styled.div`
  position: absolute;
  top: 0;
`

export const MiddleSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 601px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 340px;
  }
`
export const BottomSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  @media (min-width: 601px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 340px;
  }
`

export const Overlay = styled.img`
  position: absolute;
  z-index: 0;
  @media (min-width: 601px) {
    height: 30rem;
    width: 30rem;
  }
  @media (max-width: 600px) {
    height: 15rem;
    width: 15rem;
  }
`
