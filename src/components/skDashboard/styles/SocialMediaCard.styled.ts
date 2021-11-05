import styled from 'styled-components'

export const StyledCard = styled.div`
  color: ${({ theme }) => theme.headingText};
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
  margin: 2vh auto 2vh 0;
  background: red;
  width: 18vw;
  height: 30vh;

  background: ${({ theme }) => theme.cardBackground};
  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StyledIcon = styled.img`
  height: 5vh;
  margin-bottom: 3vh;
`

export const StyledFollowerCount = styled.text`
  font-size: calc(24px + 4vh);
  font-weight: 900;
  text-align: center;
  height: 6vh;
`

export const StyledNamesText = styled.text`
  font-size: 12px;
  text-align: center;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.text};
`
