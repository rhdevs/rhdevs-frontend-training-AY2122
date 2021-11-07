import styled, { createGlobalStyle, DefaultTheme, ThemeProviderComponent } from 'styled-components'

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     body: string
//     text: string
//     headingText: string
//     toggleBorder: string
//     background: string
//     cardBackground: string
//   }
// }

export const darkTheme: DefaultTheme = {
  body: 'hsl(230, 17%, 14%)',
  text: 'hsl(228, 34%, 66%)',
  headingText: 'hsl(0, 0%, 100%)',
  cardBackground: `hsl(228, 28%, 20%)`,
}

export const lightTheme: DefaultTheme = {
  body: 'hsl(0, 0%, 100%)',
  text: 'hsl(228, 12%, 44%)',
  headingText: 'hsl(230, 17%, 14%)',
  cardBackground: `hsl(227, 47%, 96%)`,
}
export const ThemeDiv = styled.div`
  background: ${({ theme }) => `${theme.body} !important`};
  color: ${({ theme }) => theme.text};
  font-family: Inter, Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.5s linear;
`

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
`

export const DashboardHeader = styled.div`
  color: ${({ theme }) => theme.headingText};
  align-self: flex-start;
  font-size: 32px;
  font-weight: 700;
`

export const FollowersCount = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1vh;
`

export const LineSeparator = styled.hr`
  visibility: hidden;
  @media (max-width: 768px) {
    visibility: visible;
    width: 100%;
  }
`

export const StyledDarkMode = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 700;
  align-items: center;
  width: 150px;
  @media (min-width: 768px) {
    position: absolute;
    top: 10vh;
    right: 0;
    margin-right: 10vw;
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    margin: 1vh;
    margin-bottom: 3vh;
    justify-content: space-between;
    width: 100%;
  }
`

export const OverviewHeading = styled.div`
  align-self: flex-start;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.headingText};
`
export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
