import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5% 0;
`

export const Properties = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
`

export const Avatar = styled.img`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  margin: 0px 10px;
`

export const PropName = styled.h4`
  margin: 0;
  color: black;
  white-space: nowrap;
  font-size: 16px;
`
