import styled from 'styled-components'

export const StyledIconTitle = styled.img<{ imgSize?: string }>`
  height: ${(props) => props.imgSize ?? '2rem'};
  width: ${(props) => props.imgSize ?? '2rem'};
`
export const StyledScoreboard = styled.div`
  width: 85%;
  max-width: 800px;
  border-radius: 10px;
  border: 3px solid #4e5f7d;
  font-size: 3rem;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Score = styled.div`
  font-size: 1rem;
  border-radius: 5px;
  color: hsl(229, 64%, 46%);
  background: #f7f7f7;
  border-color: #f7f7f7;
  height: 100%;
  width: 100%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ScoreText = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: hsl(229, 25%, 31%);
`
