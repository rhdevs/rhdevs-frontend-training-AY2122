import styled from 'styled-components'

export const LoadingText = styled.h1`
  position: absolute;
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin-top: 20vh;

  color: ${(props) => props.theme.textColor};
`

export const IndexLoadingText = styled.h1`
  position: absolute;
  font-size: 48px;
  width: 100%;
  text-align: center;

  color: ${(props) => props.theme.textColor};
`
