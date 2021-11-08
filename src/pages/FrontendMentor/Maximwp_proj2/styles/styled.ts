import styled from 'styled-components'
import bgbtm from '../images/bg-bottom.svg'
import bgtop from '../images/bg-top.svg'

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 40px;
  padding-bottom: 10px;
`
export const Minibox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem;
  font-size: 30px;
`
export const Pricing = styled.div`
  text-align: center;
  margin: 1rem;
  font-size: 40px;
`
export const ToggleBetween = styled.div`
  text-align: center;
  font-size: 12px;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: safe center;
  position: relative;
  padding-top: 50px;
  padding-bottom: 100px;
  background-image: url(${bgbtm}) bottom left, url(${bgtop}) top right;
`
export const CentreCont = styled.div`
  height: 600px;
  width: 300px;
  flex-direction: row;
  align-items: center;
  background-color: hsl(234, 14%, 74%);
  border-width: 5px;
  border-radius: 5px;
`
export const SideCont = styled.div`
  height: 600px;
  width: 300px;
  flex-direction: row;
  align-items: center;
  background-color: hsl(240, 78%, 98%);
  border-width: 5px;
  border-radius: 5px;
`
export const StyledHeader = styled.p`
  margin: 2rem;
  font-size: 24px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
`
export const StyledNumber = styled.p`
  margin: 2rem;
  font-size: 52px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
`
export const Detailsincont = styled.p`
  margin: 2rem;
  font-size: 24px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
`
export const Switch = {
  alignItems: 'center',
  margin: '10%',
  'font-size': '15px',
}
