import styled from 'styled-components'

export const FEContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 10px;
  cursor: pointer;
`

export const TitleText = styled.h2<{ fontSize?: string }>`
  margin: 0;
  color: white;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const StyledIcon = styled.img<{ imgSize?: string }>`
  height: ${(props) => props.imgSize ?? '2rem'};
  width: ${(props) => props.imgSize ?? '2rem'};
`
