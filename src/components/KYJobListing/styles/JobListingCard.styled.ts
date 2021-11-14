import styled from 'styled-components'

export const Card = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 140px;
  margin: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 10px 10px #dedede;
  ${(props) => props.active && `border-left: 5px solid hsl(180, 29%, 50%);`}

  @media (max-width: 950px) {
    flex-direction: column;
    height: fit-content;
    margin-bottom: 60px;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 950px) {
    flex-direction: column;
    border-bottom: 1px solid lightgrey;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  height: 100px;
  width: 100px;
  @media (max-width: 950px) {
    height: 60px;
    width: 60px;
    margin-top: -50px;
    margin-bottom: 10px;
  }
`

export const Details = styled.div`
  disply: flex;
  flex-direction: column;
`

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const CompanyName = styled.p`
  font-size: 16px;
  color: hsl(180, 29%, 50%);
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  margin-right: 10px;
`

export const JobTitle = styled.p`
  font-size: 20px;
  color: black;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    color: hsl(180, 29%, 50%);
  }
`
