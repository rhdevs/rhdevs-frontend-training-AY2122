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
  margin: 2.5px;
  width: 18vw;
  height: 30vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  background: ${({ theme }) => theme.cardBackground};
  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
  @media (max-width: 768px) {
    width: 75vw;
  }
`

export const StyledIcon = styled.img`
  height: 5vh;
  margin-bottom: 3vh;
`

export const StyledFollowerCount = styled.text`
  font-size: calc(32px + 4vh);
  font-weight: 700;
  text-align: center;
  height: 6vh;
`

export const StyledNamesText = styled.text`
  font-size: calc(16px + 0.5vh);
  text-align: center;
  letter-spacing: 0.4rem;
  color: ${({ theme }) => theme.text};
`
