import styled from 'styled-components'

export const StyledBottomNavBar = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: whitesmoke;
  height: 8%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NavBarIcon = styled.div`
  width: 25%;
  margin: 10px;
  text-align: center;
`

export const Icon = styled.img`
  width: 30%;
  height: 30%;
`

export const Avatar = styled.img`
  height: 35%;
  width: 35%;
  border-radius: 50%;
`
