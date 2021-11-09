import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vh auto 0 2vw;
  width: 13vw;
  height: 100%;
  flex-wrap: wrap;
  /* background: red; */
  overflow-y: auto;
`

export const StyledHeader = styled.div`
  color: hsl(0, 0%, 59%);
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1px;
`

export const StyledBody = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  overflow-wrap: break-word;
  word-wrap: break-word;
  /* word-break: break-all; */
`
