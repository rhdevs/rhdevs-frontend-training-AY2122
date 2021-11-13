import styled from 'styled-components'

export const JobTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NewBadge = styled.div`
  margin: 0 3px;
  padding: 5px;
  background-color: hsl(180, 29%, 50%);
  border-radius: 10px;
  height: 20px;
`

export const FeaturedBadge = styled.div`
  margin: 0 3px;
  padding: 5px;
  background-color: black;
  border-radius: 10px;
  height: 20px;
`

export const Text = styled.p`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-size: 9px;
  color: white;
  margin: 0;
  height: min-content;
`
// position: absolute;
// top: 50%;
// transform: translateY(-50%);
