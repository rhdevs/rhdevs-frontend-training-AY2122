import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  width: 70%;
  left: 15%;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`
export const CardContainer = styled.div<{ description?: string }>`
  height: 600px;
  flex-direction: row;
  align-items: center;
  font-family: 'Lexend Deca';
  background-color: rgb(226, 133, 37);
  ${(props) =>
    props.description === 'Sedan'
      ? 'background-color: rgb(226, 133, 37); border-radius: 10px 10px 0px 0px;'
      : props.description === 'SUV'
      ? 'background-color: rgb(1, 105, 114);'
      : 'background-color: rgb(0, 64, 63); border-radius: 0px 0px 10px 10px;'}
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
  font-size: 15px;
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
  margin: '10%',
  'font-size': '15px',
}
export const RoundButton2 = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#016972',
  alignItems: 'center',
  margin: '10%',
  'font-size': '15px',
}
export const RoundButton3 = {
  width: '150px',
  height: '45px',
  borderRadius: 100,
  backgroundColor: '#fff',
  color: '#00403f',
  alignItems: 'center',
  margin: '10%',
  'font-size': '15px',
}
