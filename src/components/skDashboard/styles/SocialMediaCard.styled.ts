import styled from 'styled-components'

export const StyledCard = styled.div`
  color: hsl(230, 17%, 14%);
  border-top: 6px solid;
  border-top-color: hsl(208, 92%, 53%);
  line-height: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15));
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  justify-content: center;
  align-items: center;
  margin: 2.5px;
  width: 100%;
  height: 30vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  background: hsl(227, 47%, 96%);
  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
`

export const StyledFollowerCount = styled.text`
  font-size: calc(32px + 4vh);
  font-weight: 700;
  text-align: center;
  height: 5vh;
`

export const StyledNamesText = styled.text`
  font-size: calc(16px + 1vw);
  text-align: center;
`
