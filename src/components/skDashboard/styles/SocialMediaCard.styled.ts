import styled from 'styled-components'

export const StyledCard = styled.div<{ borderColor: string }>`
  color: ${({ theme }) => theme.headingText};
  background: ${({ theme }) => theme.cardBackground};
  line-height: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15));
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  justify-content: center;
  align-items: center;
  margin: 2vh auto 2vh 0;
  width: 18vw;
  height: 30vh;

  &:before {
    content: '';
    position: absolute;
    height: 7px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background: ${(props) => props.borderColor};
  }

  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const StyledCardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
`
export const StyledIcon = styled.img`
  height: 3vh;
`

export const StyledHandle = styled.div`
  margin-left: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`

export const StyledFollowerCount = styled.text`
  margin-top: 3vh;
  font-size: calc(24px + 4vh);
  font-weight: 900;
  text-align: center;
  height: 6vh;
`

export const StyledNamesText = styled.text`
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.text};
`

export const ChangeContainer = styled.div<{ increase: boolean }>`
  margin-top: 3vh;
  font-size: 18px;
  font-weight: 900;
  color: ${(props) => (props.increase ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
`
