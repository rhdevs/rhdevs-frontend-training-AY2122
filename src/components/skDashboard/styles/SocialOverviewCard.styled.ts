import styled from 'styled-components'

export const StyledCard = styled.div`
  color: ${({ theme }) => theme.headingText};
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
  height: 20vh;
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
export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
`

export const StyledPageView = styled.text`
  color: ${({ theme }) => theme.text};
  font-size: calc(12px + 1vh);
  font-weight: 700;
  text-align: center;
  height: 6vh;
  margin-left: 30px;
`

export const StyledIcon = styled.img`
  height: 5vh;
  margin-right: 30px;
`
export const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3vh;
`
export const StyledStats = styled.text`
  font-size: calc(24px + 3vh);
  font-weight: 700;
  text-align: center;
  margin-left: 30px;
`
