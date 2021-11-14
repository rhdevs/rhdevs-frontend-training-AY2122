import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
  @media (max-width: 950px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`

export const Tag = styled.div`
  background-color: hsl(180, 52%, 96%);
  margin-radius: 3px;
  height: fit-content;
  padding: 5px;
  margin: 5px;
`

export const Text = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-size: 10px;
  color: hsl(180, 29%, 50%);
  margin: 0;
`
