import styled from 'styled-components'

export const TimeSettingContainer = styled.div`
  @media (min-width: 501px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
  }
`

export const SettingSubheader = styled.p`
  font-family: Kumbh Sans, serif;
  font-weight: 700;
  @media (min-width: 601px) {
    font-size: 13px;
    letter-spacing: 5px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    letter-spacing: 4px;
    justify-self: center;
  }
`

export const SettingHeader = styled.h1`
  font-family: Kumbh Sans, serif;
  font-weight: 700;
  @media (min-width: 601px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`
