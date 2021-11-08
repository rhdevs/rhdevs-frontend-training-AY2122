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
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`
export const CentreCont = styled.div`
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(234, 14%, 74%);
  border-width: 5px;
  border-radius: 5px;
`
export const SideCont = styled.div`
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(240, 78%, 98%);
  border-width: 5px;
  border-radius: 5px;
`
export const StyledHeader = styled.p<{ typ?: string }>`
  margin: 2rem;
  font-size: 24px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
  ${(props) => (props.typ === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'color: hsl(234, 14%, 74%);')}
    }
`
export const StyledNumber = styled.p<{ typ?: string }>`
  margin: 2rem;
  font-size: 52px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
  ${(props) => (props.typ === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'color: hsl(234, 14%, 74%);')}
}
`
export const Detailsincont = styled.p<{ typ?: string }>`
  margin: 1rem;
  font-size: 24px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  ${(props) => (props.typ === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'color: hsl(234, 14%, 74%);')}
`
export const SwitchStyle = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#016972',
  alignItems: 'center',
  margin: '10%',
  'font-size': '15px',
}
export const ButtonStyle = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: 'hsl(240, 78%, 98%)',
  color: '#016972',
  'vertical-align': 'middle',
  alignItems: 'center',
  margin: 'auto',
  'font-size': '15px',
  'border-radius': '2px',
}
export const ButtonStyle2 = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: 'hsl(234, 14%, 74%)',
  color: '#016972',
  'vertical-align': 'middle',
  alignItems: 'center',
  margin: 'auto',
  'font-size': '15px',
  'border-radius': '2px',
}
