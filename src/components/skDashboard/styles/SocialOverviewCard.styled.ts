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
  width: 18vw;
  height: 20vh;
  margin: 2vh auto 2vh 0;
  background: ${({ theme }) => theme.cardBackground};
  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TopRow = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vh;
`

export const StyledPageView = styled.text`
  color: ${({ theme }) => theme.text};
  font-size: calc(14px + 1vh);
  font-weight: 700;
  text-align: center;
  margin-left: 1vw;
  @media (min-width: 768px) {
    font-size: calc(8px + 1vw);
  }
`

export const StyledIcon = styled.img`
  height: 3vh;
  margin-right: 1vw;
`
export const BottomRow = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;
`
export const StyledStats = styled.text`
  font-size: calc(16px + 2vh);
  font-weight: 700;
  text-align: center;
  margin-left: 2vw;
  @media (min-width: 768px) {
    font-size: calc(12px + 1vw);
  }
`
export const ChangeContainer = styled.div<{ increase: boolean }>`
  margin-right: 1vw;
  font-size: calc(16px + 0.1vw);
  font-weight: 900;
  color: ${(props) => (props.increase ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
  @media (min-width: 768px) {
    font-size: calc(6px + 0.5vw);
  }
`
