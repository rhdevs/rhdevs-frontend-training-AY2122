import styled from 'styled-components'
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    headingText: string
    toggleBorder: string
    background: string
    cardBackground: string
  }
}

export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: 'hsl(228, 34%, 66%)',
  headingText: 'hsl(0, 0%, 100%)',
  toggleBorder: '#6B8096',
  background: '#999',
  cardBackground: `hsl(228, 28%, 20%)`,
}

export const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: 'hsl(228, 12%, 44%)',
  headingText: 'hsl(230, 17%, 14%)',
  toggleBorder: '#FFF',
  background: '#363537',
  cardBackground: `hsl(227, 47%, 96%)`,
}

export const GlobalStyles = createGlobalStyle`
  main {
    background: ${({ theme }) => `${theme.body} !important`};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
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
  font-size: 2rem;
  font-weight: 600;
`

export const FollowersCount = styled.div`
  margin-top: -1vh;
  font-size: 1rem;
  font-weight: 400;
`

export const LineSeparator = styled.div``

export const OverviewHeading = styled.div`
  align-self: flex-start;
  font-size: 2rem;
  font-weight: 600;
`
