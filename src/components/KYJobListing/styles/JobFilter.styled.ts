import styled from 'styled-components'

export const FilterContainer = styled.div`
  position: relative;
  height: 70px;
  margin-top: -65px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 0 20px;
  background-color: white;
  border-radius: 5px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 340px) {
    height: fit-content;
  }
`

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
`

export const ClearButton = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  text-decoration: underline;
  color: hsl(180, 29%, 50%);
  height: fit-content;
  margin-bottom: 0;
  &:hover {
    cursor: pointer;
  }
`
