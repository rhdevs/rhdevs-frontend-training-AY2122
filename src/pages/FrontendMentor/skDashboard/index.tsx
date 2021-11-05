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
  CardSection,
  StyledDarkMode,
  LineSeparator,
} from './styles/skDashboard.styled'

import SocialMediaCard from '../../../components/skDashboard/SocialMediaCard'
import FacebookIcon from '../../../assets/skDashboard/icon-facebook.svg'
import TwitterIcon from '../../../assets/skDashboard/icon-twitter.svg'
import InstagramIcon from '../../../assets/skDashboard/icon-instagram.svg'
import YoutubeIcon from '../../../assets/skDashboard/icon-youtube.svg'
import SocialOverviewCard from '../../../components/skDashboard/SocialOverviewCard'

interface MediaCard {
  icon: string
  followerCount: string
}

interface OverviewCard {
  icon: string
  statsName: string
  stats: string
}

const skDashboard = () => {
  const [theme, setTheme] = useState('dark')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const MediaCardsList = [
    { icon: FacebookIcon, followerCount: '1987' },
    { icon: TwitterIcon, followerCount: '1044' },
    { icon: InstagramIcon, followerCount: '11k' },
    { icon: YoutubeIcon, followerCount: '8239' },
  ]
  const OverviewCardsList = [
    { icon: FacebookIcon, statsName: 'Pageviews', stats: '87' },
    { icon: FacebookIcon, statsName: 'Likes', stats: '52' },
    { icon: InstagramIcon, statsName: 'Likes', stats: '5462' },
    { icon: InstagramIcon, statsName: 'Profile Views', stats: '52k' },
    { icon: TwitterIcon, statsName: 'Retweets', stats: '117' },
    { icon: TwitterIcon, statsName: 'Likes', stats: '507' },
    { icon: YoutubeIcon, statsName: 'Likes', stats: '107' },
    { icon: YoutubeIcon, statsName: 'Total Likes', stats: '1407' },
  ]

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <MainPage>
          <DashboardHeader>
            Social Media Dashboard
            <FollowersCount>Total Followers: 23,000</FollowersCount>
          </DashboardHeader>
          <LineSeparator />
          <StyledDarkMode>
            Dark Mode
            <Switch defaultChecked onClick={themeToggler} />
          </StyledDarkMode>

          <CardSection>
            {MediaCardsList.map((e: MediaCard) => (
              <SocialMediaCard key={e.followerCount} names="" icon={e.icon} followerCount={e.followerCount} />
            ))}
          </CardSection>
          <OverviewHeading>Overview - Today</OverviewHeading>
          <CardSection>
            {OverviewCardsList.map((e: OverviewCard) => (
              <SocialOverviewCard key={e.stats} icon={e.icon} statsName={e.statsName} stats={e.stats} />
            ))}
          </CardSection>
        </MainPage>
      </>
    </ThemeProvider>
  )
}

export default skDashboard
