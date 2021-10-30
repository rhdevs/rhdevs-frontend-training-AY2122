import { Switch } from 'antd'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { DashboardHeader, FollowersCount, MainPage, GlobalStyles, lightTheme, darkTheme } from './skDashboard.styled'

const skDashboard = () => {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainPage>
        <DashboardHeader>
          Social Media Dashboard
          <FollowersCount>Total Followers: 23,000</FollowersCount>
        </DashboardHeader>
        <hr
          style={{
            width: '100%',
          }}
        />
        <Switch onClick={themeToggler} />
      </MainPage>
    </ThemeProvider>
  )
}

export default skDashboard
