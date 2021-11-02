import { Card } from 'antd'
import styled from 'styled-components'

export const CountriesDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 42.5px;
`

export const CardImage = styled.img`
  border: 1px solid #dadada;
`

export const StyledCard = styled(Card)`
  box-shadow: 2px 2px 5px gray;
  width: 264px;
  height: 336px;
  margin: 37.5px;
  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
`
