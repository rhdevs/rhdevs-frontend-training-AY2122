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
  padding-top: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const MainContainer1 = styled.div`
  height: 90%,
  flex-direction: row;
  align-items: center;
  font-family: 'Lexend Deca';
  background-color: rgb(226, 133, 37);
  border-radius: 5px;
`
export const MainContainer2 = styled.div`
<<<<<<< HEAD
  height: 90%,
  flex-direction: row;
  align-items: center;
  font-family: 'Lexend Deca';
  background-color: rgb(1, 105, 114);
  border-radius: 5px;
`
export const MainContainer3 = styled.div`
  height: 90%,
  flex-direction: row;
  align-items: center;
  font-family: 'Lexend Deca';
  background-color: rgb(0, 64, 63);
  border-radius: 5px;
`
export const StyledHeader = styled.p`
  font-family: 'Lexend Deca';
  margin: 2rem;
  font-size: 36px;
  vertical-align: middle;
  color: #ffffff;
`
export const StyledParagraph = styled.p`
  text-align: justify;
  margin: 2rem;
  font-family: 'Lexend Deca';
  font-size: calc(10px);
  color: #ffffff;
  line-height: 2.5;
`
export const StyledLogo = styled.img`
  width: 100px;
  margin: 2rem;
  padding: 5px;
  position: relative;
`
export const RoundButton1 = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#e28525',
  alignItems: 'center',
  marginLeft: '2rem',
  marginTop: '1rem',
  'font-size': '20px',
}
export const RoundButton2 = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#016972',
  alignItems: 'center',
  marginLeft: '2rem',
  marginTop: '1rem',
  'font-size': '20px',
}

export const RoundButton3 = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#00403f',
  alignItems: 'center',
  marginLeft: '2rem',
  marginTop: '1rem',
  'font-size': '20px',
}
