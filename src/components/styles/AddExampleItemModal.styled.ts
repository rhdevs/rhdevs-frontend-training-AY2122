import styled from 'styled-components'

export const Overlay = styled.div`
  z-index: 6;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
`

export const ModalCard = styled.div`
  width: 80vw;
  max-width: 700px;
  height: fit-content;
  background: white;
  border-radius: 10px;
  margin: auto;
  min-height: 50vh;
  padding: 20px 30px;
  display: grid;
  grid-template-rows: 1fr min-content;
`

export const StyledButton = { marginLeft: '15px' }

export const ButtonsContainer = styled.div`
  justify-self: end;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const ErrorText = styled.p`
  color: red;
`
