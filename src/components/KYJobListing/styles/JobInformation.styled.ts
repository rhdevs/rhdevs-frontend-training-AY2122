import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`

export const Text = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
  color: grey;
  font-size: 15px;
  @media (max-width: 320px) {
    margin-bottom: 0;
    text-align: center;
  }
`
