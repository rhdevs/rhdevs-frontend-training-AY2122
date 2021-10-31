import { Switch } from 'antd'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  DashboardHeader,
  FollowersCount,
  MainPage,
  GlobalStyles,
  lightTheme,
  darkTheme,
  OverviewHeading,
} from './styles/skDashboard.styled'

import SocialMediaCard from '../../../components/skDashboard/SocialMediaCard'

const skDashboard = () => {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
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
          <SocialMediaCard followerCount={'1987'} names={'Facebook'} />
          <SocialMediaCard followerCount={'1044'} names={'Twitter'} />
          <OverviewHeading>Overview - Today</OverviewHeading>
        </MainPage>
      </>
    </ThemeProvider>
  )
}

export default skDashboard
