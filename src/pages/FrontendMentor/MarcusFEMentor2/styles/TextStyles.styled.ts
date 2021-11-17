import styled from 'styled-components'

import { body1Size, body2Size, h1LargeSize, h1SmallSize, h2Size, h3Size } from './cssVariables.styled'

// text styles

export const H1Large = styled.h1<{ responsive?: boolean }>`
  ${h1LargeSize}// css values 'copy and pasted' over here
`

export const H1Small = styled.h1<{ responsive?: boolean }>`
  ${h1SmallSize}
`

export const H2Styled = styled.h2<{ responsive?: boolean }>`
  ${h2Size}
`

export const H3Styled = styled.h3<{ responsive?: boolean }>`
  ${h3Size}
`

export const Body1 = styled.p<{ responsive?: boolean }>`
  ${body1Size}
`

export const Body2 = styled.p<{ responsive?: boolean }>`
  ${body2Size}
`
