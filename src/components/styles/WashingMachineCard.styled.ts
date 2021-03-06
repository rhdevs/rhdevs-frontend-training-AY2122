import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 4% 0;
`

export const RowCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 3% 0;
`

export const DivisionLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
`

export const Properties = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`

export const IconStyling = {
  fontSize: '24px',
  margin: '0 10px',
}

export const PropName = styled.h4`
  margin: 0;
  color: black;
  white-space: nowrap;
  font-size: 16px;
`

export const StatusName = styled.h3`
  float: left;
  margin: 3px auto;
`
