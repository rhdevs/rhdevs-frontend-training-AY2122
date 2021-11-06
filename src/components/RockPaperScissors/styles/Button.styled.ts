import styled from 'styled-components'

export const StyledButton = styled.div<{ borderColor: string }>`
  ${(props) => props.borderColor && `border-color: ${props.borderColor};`}
  border-radius: 50%;
  border-style: solid;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  @media (min-width: 601px) {
    border-width: 20px;
    width: 200px;
    height: 200px;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
    border-width: 15px;
  } ;
`
