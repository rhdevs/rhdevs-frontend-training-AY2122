import styled from 'styled-components'
import '@fontsource/lexend-deca'

export const FullScreenContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  width: 70%;
  left: 15%;
  border-radius: 5px;
  padding-top: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const MainContainer1 = styled.div`
  height: 500px;
  align-items: center;
  font-family: 'Lexend Deca';
  background-color: rgb(226, 133, 37);
  border-radius: 5px;
`
export const MainContainer2 = styled.div`
  height: 500px;
  align-items: center;
  font-family: 'Lexend Deca';
  background-color: rgb(1, 105, 114);
  border-radius: 5px;
`
export const MainContainer3 = styled.div`
  height: 500px;
  align-items: center;
  font-family: 'Lexend Deca';
  background-color: rgb(0, 64, 63);
  border-radius: 5px;
`
export const StyledHeader = styled.p`
  font-family: 'Lexend Deca';
  margin: 2rem;
  font-size: 40px;
  vertical-align: middle;
  color: #ffffff;
`
export const StyledParagraph = styled.p`
  text-align: justify;
  margin: 2rem;
  font-family: 'Lexend Deca';
  font-size: 10;
  color: #ffffff;
  border-radius: 5px;
`
export const StyledSubheader = styled.h2`
  margin: 1rem 0 0 0;
  font-family: 'Lexend Deca';
  color: #ffffff;
`
export const StyledImg = styled.img`
  border-radius: 10px;
`
export const StyledLogo = styled.img`
  width: 100px;
  margin: 2rem;
  padding: 5px;
  position: relative;
`

export const RoundButton1 = {
  width: '200px',
  height: '60px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#e28525',
  alignItems: 'center',
  marginLeft: '50px',
  'font-size': '20px',
}

export const RoundButton2 = {
  width: '200px',
  height: '60px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#016972',
  alignItems: 'center',
  marginLeft: '60px',
  marginTop: '20px',
  'font-size': '20px',
}

export const RoundButton3 = {
  width: '200px',
  height: '60px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#00403f',
  alignItems: 'center',
  marginLeft: '70px',
  marginTop: '20px',
  'font-size': '20px',
}
