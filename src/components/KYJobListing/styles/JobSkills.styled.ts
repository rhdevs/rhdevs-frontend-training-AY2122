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

export const Text = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-size: 10px;
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  margin-radius: 3px;
  height: fit-content;
  margin: 5px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: hsl(180, 29%, 50%);
  }
`

export const FilterTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 340px) {
    margin: 5px 0;
  }
`

export const FilterText = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-size: 10px;
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  margin-radius: 3px;
  height: fit-content;
  margin-left: 10px;
  margin-right: 0;
  margin-bottom: 0;
  padding: 5px;
`

export const Cross = styled.div`
  color: white;
  background-color: hsl(180, 29%, 50%);
  height: 25px;
  width: 25px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`
