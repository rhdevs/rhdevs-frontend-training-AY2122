import styled from 'styled-components'
import bgdesk from '../../../assets/hubble/bgdesk.svg'

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${bgdesk});
  min-width: 1440px;
  min-height: 800px;
  background-color: hsl(257, 40%, 49%);
  justify-content: center;
  allgin-items: center;
`
export const LColumn = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  allign-items: center;
  justify-content: center:
`
export const LogoBox = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
`

export const Rows = styled.div`
  padding: 10px 50px;
  display: flex;
`

export const HeaderText = styled.div`
  padding: 20px 50px;
  display: flex;
  font-family: Poppins;
  font-weight: 600;
  font-size: 40px;
  color: white;
`

export const BodyText = styled.div`
  padding: 30px 50px;
  display: flex;
  font-family: Poppins;
  font-weight: 400;
  font-size: 25px;
  color: white;
`
