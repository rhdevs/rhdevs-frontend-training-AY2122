import styled from 'styled-components'

export const HeaderImage = styled.img`
  width: 100vw;
  height: 100px;
`

export const Screen = styled.div`
  background-color: hsl(180, 52%, 96%);
  width: 100vw;
  height: 100%;
`

export const Body = styled.div`
  padding: 30px 50px;
  @media (max-width: 600px) {
    padding: 30px 10px;
  }
`
