import styled from 'styled-components'

export const StyledPickContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PickText = styled.div`
  @media (min-width: 601px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`
export const Blank = styled.div`
  border-color: #161f3e;
  border-radius: 50%;
  border-style: solid;
  background: #161f3e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 601px) {
    margin: 25px;
    border-width: 20px;
    width: 150px;
    height: 150px;
  }
  @media (max-width: 600px) {
    margin: 10px;
    border-width: 15px;
    width: 100px;
    height: 100px;
  }
`
