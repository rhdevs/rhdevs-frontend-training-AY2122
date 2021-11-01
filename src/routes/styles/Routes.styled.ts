import styled from 'styled-components'

export const StyledMain = styled.main<{ hasFooter?: boolean }>`
  padding-top: 3rem; /*top nav bar*/
  height: 100%;
  min-height: 100vh;
  background-color: #fdfdfd;
  ${(props) => props.hasFooter && 'margin-bottom: -10rem;'}
`
