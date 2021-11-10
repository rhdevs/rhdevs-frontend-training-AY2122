import styled from 'styled-components'
import bgbtm from '../images/bg-bottom.svg'
import bgtop from '../images/bg-top.svg'

export const MainBox = styled.div`
  width: 100%;
  background: url(${bgbtm}), url(${bgtop});
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-color: rgb(247, 247, 255);
`

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
  font-weight: 700;
  color: rgb(110, 114, 143);
  font-family: 'Montserrat';
`
export const ToggleBetween = styled.div`
  text-align: center;
  font-size: 12px;
  margin: 1rem;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: safe center;
  position: relative;
  padding-top: 50px;
  padding-bottom: 100px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`
//  #background-color: hsl(234, 14%, 74%);
export const CentreCont = styled.div`
  height: 550px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-width: 5px;
  border-radius: 10px;
  font-family: 'Montserrat';
  @media (max-width: 1024px) {
    margin: 50px;
  }
`
export const SwitchStyle = {
  'background-image': 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
  color: '#016972',
  margin: '1rem',
  alignItems: 'center',
}
