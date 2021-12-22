import styled from 'styled-components'

export const BoldText = styled.b`
  font-weight: 500;
`

export const ErrorText = styled.b`
  font-weight: 500;
  color: red;
  margin: auto;
  font-size: 1.3em;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 2rem;
`

export const HeaderText = styled.p`
  font-size: 1.5em;
  margin: 0;
`

export const VisualContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  margin: 2rem auto;
  cursor: pointer;
  outline: 3px solid #777;
  grid-area: frame;

  &:hover img {
    display: none;
  }
`

export const StyledText = styled.code`
  white-space: break-spaces;
  padding: 16px;
  overflow: auto;
  font-size: 90%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 6px;
  grid-area: code;
  height: fit-content;
  margin: 2rem 0;
  @media (max-width: 900px) {
    margin: 0;
  }
`

export const StyledFrame = styled.iframe`
  width: 400px;
  height: 300px;
  z-index: 0;
`

export const FinalImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
  width: 400px;
  height: 300px;
  z-index: 1;
`

export const BattleInfoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: max-content 1fr;
  grid-template-areas: 'frame code';
  gap: 5rem;

  @media (max-width: 900px) {
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'frame'
      'code';
    gap: 0;
  }
`
