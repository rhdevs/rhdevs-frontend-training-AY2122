import styled from 'styled-components'

export const HomeBackgroundContainer = styled.div`
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  position: absolute;
  display: flex;
  overflow: hidden;
  background-repeat: no-repeat;
  flex-direction: column;
  z-index: 0;
`

export const HomeBackground = styled.img`
  width: 100vw;
  height: 100vh;
`
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 6rem;
  width: 100%;
  border-color: blue;
  border-style: solid;
  position: absolute;
`

export const NavBarTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  position: relative;
  z-index: 1;
`
export const NavBarRow = styled.div`
  background-image: linear-gradient(to right, transparent 50%, rgba(250, 250, 250, 0.05) 50%);
  backdrop-filter: blur(1rem) saturate(100%);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  border-color: red;
  border-style: solid;
`
