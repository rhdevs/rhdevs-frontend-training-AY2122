import { HashRouter } from 'react-router-dom'
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
`
export const SideCont = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border-width: 5px;
  border-radius: 5px;
  font-family: 'Montserrat';
`
export const StyledHeader = styled.p<{ typ?: string }>`
  margin: 2rem;
  font-size: 24px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
  ${(props) => (props.typ === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'hsl(233, 13%, 49%);')}
    }
`
export const StyledNumber = styled.p<{ typ?: string }>`
  margin: -1px;
  font-size: 70px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
  letter-spacing: -5px;
  ${(props) => (props.typ === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'color: rgb(74, 76, 97);')}
}
`
export const Detailsincont = styled.p<{ typ?: string }>`
  margin: 1rem;
  font-size: 20px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
  'font-family': 'Montserrat';
  ${(props) => (props.typ === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'color: rgb(74, 76, 97);')}
`
export const SwitchStyle = {
  width: '60px',
  height: '35px',
  borderRadius: 100,
  backgroundImage: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
  color: '#016972',
  alignItems: 'center',
  'font-size': '15px',
}
export const ButtonStyle = {
  width: '300px',
  height: '45px',
  backgroundColor: 'hsl(0, 0%, 100%)',
  color: '#7276e1',
  'vertical-align': 'middle',
  alignItems: 'center',
  margin: 'auto',
  'font-size': '15px',
  'border-radius': '10px',
  'font-weight': '700',
  'font-family': 'Montserrat',
  'letter-spacing': '2px',
}

export const ButtonStyle2 = {
  width: '300px',
  height: '45px',
  backgroundColor: 'hsl(234, 14%, 74%)',
  backgroundImage: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
  color: '#fff',
  'vertical-align': 'middle',
  alignItems: 'center',
  margin: 'auto',
  'font-size': '15px',
  'border-radius': '10px',
  'font-weight': '700',
  'font-family': 'Montserrat',
  'letter-spacing': '2px',
}

export const SideDivider = {
  width: '85%',
  color: 'black',
  opacity: 0.7,
}

export const CentreDivider = {
  width: '85%',
  backgroundColor: 'hsl(240, 78%, 98%)',
  opacity: 0.3,
}
