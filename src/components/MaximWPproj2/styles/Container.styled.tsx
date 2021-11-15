import styled from 'styled-components'

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
export const CentreCont = styled.div`
  height: 570px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-width: 5px;
  border-radius: 10px;
  font-family: 'Montserrat';
  @media (max-width: 1024px) {
    margin: 1rem;
  }
`
export const SideCont = styled.div`
  height: 520px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border-width: 5px;
  border-radius: 5px;
  font-family: 'Montserrat';
`
export const StyledHeader = styled.p<{ containertype?: string }>`
  margin: 2rem;
  font-size: 18px;
  font-weight: 700;
  vertical-align: middle;
  font-family: 'Montserrat';
  text-align: center;
  ${(props) => (props.containertype === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'hsl(233, 13%, 49%);')}
    }
`
export const StyledNumber = styled.p<{ containertype?: string }>`
  margin: 1rem;
  font-size: 60px;
  font-weight: 700;
  vertical-align: middle;
  text-align: center;
  font-family: 'Montserrat';
  ${(props) => (props.containertype === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'color: rgb(74, 76, 97);')}
}
`
export const Detailsincont = styled.p<{ containertype?: string }>`
  margin: 1rem;
  font-size: 14px;
  font-weight: 700;
  line-height: 3rem;
  vertical-align: middle;
  text-align: center;
  font-family: 'Montserrat';
  ${(props) => (props.containertype === 'Main' ? 'color: hsl(240, 78%, 98%);' : 'color: rgb(74, 76, 97);')}
`
export const SwitchStyle = {
  borderRadius: 100,
  backgroundImage: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
  color: '#016972',
  margin: '1rem',
  alignItems: 'center',
}
export const ButtonStyle = {
  width: '250px',
  height: '45px',
  borderRadius: '20px',
  backgroundColor: 'hsl(0, 0%, 100%)',
  color: '#7276e1',
  'vertical-align': 'middle',
  alignItems: 'center',
  margin: 'auto',
  'font-size': '15px',
  'border-radius': '2px',
  'font-weight': '700',
  'font-family': 'Montserrat',
}

export const ButtonStyle2 = {
  width: '250px',
  height: '45px',
  borderRadius: '20px',
  backgroundColor: 'hsl(234, 14%, 74%)',
  backgroundImage: 'linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
  color: '#fff',
  'vertical-align': 'middle',
  alignItems: 'center',
  margin: 'auto',
  'font-size': '15px',
  'border-radius': '2px',
  'font-weight': '700',
  'font-family': 'Montserrat',
}

export const SideDivider = {
  width: '85%',
  color: 'black',
}

export const CentreDivider = {
  width: '85%',
  backgroundColor: 'hsl(240, 78%, 98%)',
}
