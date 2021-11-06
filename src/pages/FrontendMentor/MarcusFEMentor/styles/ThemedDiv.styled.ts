import styled from 'styled-components'

const ThemedDiv = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  overflow: auto;
  color: ${(props) => props.theme.textColor};
`

export default ThemedDiv
