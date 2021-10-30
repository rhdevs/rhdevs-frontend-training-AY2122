import styled from 'styled-components'
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    toggleBorder: string
    background: string
  }
}

export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
`

export const DashboardHeader = styled.div`
  font-size: 2rem;
  font-weight: 600;
`

export const FollowersCount = styled.div`
  margin-top: -1.5vh;
  font-size: 1rem;
  font-weight: 400;
  color: hsl(228, 12%, 44%);
`

export const LineSeparator = styled.div``
