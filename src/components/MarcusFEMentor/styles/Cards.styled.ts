import styled from 'styled-components'
import { Card } from 'antd'

export const CountriesDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 42.5px;
`

export const StyledCard = styled(Card)`
  width: 264px;
  min-height: 336px;
  margin: 37.5px;
  border-radius: 5%;
  box-shadow: ${(props) => props.theme.cardShadow};

  overflow: hidden;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.cardColor};
  h2 {
    color: ${(props) => props.theme.textColor};
  }

  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }

  @media (max-height: 420px) {
    min-height: 306px;
  }
`
