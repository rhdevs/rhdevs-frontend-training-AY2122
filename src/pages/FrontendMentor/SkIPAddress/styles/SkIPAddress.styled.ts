import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Rubik;
  z-index: 1;
  width: 100%;
`

export const StyledHeader = styled.div`
  z-index: 1;
  margin-top: 3vh;
  font-size: 32px;
  color: #fff;
  font-weight: 500;
`

export const InputContainer = styled.div`
  margin-top: 2vh;
  z-index: 1;
  width: 35vw;
  display: flex;
  flex-direction: row;
  font-size: 18px;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 12px 0 0 12px;
  border: none;
`

export const StyledButton = styled.button`
  font-weight: 700;
  width: 10%;
  background: hsl(0, 0%, 17%);
  color: #fff;
  border: none;
  border-radius: 0 12px 12px 0;
  :hover {
    background: hsl(0, 0%, 25%);
  }
`
export const DisplayContainer = styled.div`
  margin-top: 5vh;
  border-radius: 15px;
  width: 70vw;
  height: 20vh;
  background: #ffffff;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const BoxSeparator = styled.div`
  width: 1px;
  height: 10vh;
  background: hsl(0, 0%, 80%);
`

export const MyMap = styled(MapContainer)<{ height: string }>`
  /*
    Any dynamic styling that will change the
    dynamically generated classname will remove
    the leaflet classnames from the container.
  */
  top: 40vh;
  position: absolute;
  height: ${(props) => props.height};
  width: 100%;
  z-index: 0;
`
