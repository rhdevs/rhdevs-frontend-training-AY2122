import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Number = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2vw;
  color: hsl(0, 0%, 100%);
  margin-bottom: 0;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`

export const Text = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 1vw;
  color: hsla(0, 0%, 100%, 0.6);
  @media (max-width: 800px) {
    font-size: 10px;
  }
`
