import styled from 'styled-components'

export const NewContainer = styled.div`
  display: grid;
  width: 95%;
  height: 95%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  grid-auto-flow: row;
  grid-template-areas:
    '. . . .'
    '. . . .'
    '. . . .'
    '. . . .'
    'DoubleSize DoubleSize DoubleSize2 DoubleSize2';
`
export const DoubleSize = styled.div`
  grid-area: DoubleSize;
`
export const DoubleSize2 = styled.div`
  grid-area: DoubleSize2;
`
