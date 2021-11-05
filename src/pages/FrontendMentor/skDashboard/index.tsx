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
  names: string
  platform: string
  icon: string
  followerCount: string
  increase: boolean
  change: string
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
    {
      icon: FacebookIcon,
      names: '@shaokiat',
      followerCount: '1987',
      increase: true,
      change: '12',
      platform: 'hsl(208, 92%, 53%)',
    },
    {
      icon: TwitterIcon,
      names: '@shaokiat',
      followerCount: '1044',
      increase: true,
      change: '99',
      platform: 'hsl(203, 89%, 53%)',
    },
    {
      icon: InstagramIcon,
      names: '@shaokiat',
      followerCount: '11k',
      increase: true,
      change: '1000',
      platform: 'linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
    },
    {
      icon: YoutubeIcon,
      names: '@shaokiat',
      followerCount: '8239',
      increase: false,
      change: '144',
      platform: 'hsl(348, 97%, 39%)',
    },
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
              <SocialMediaCard
                key={e.followerCount}
                names={e.names}
                icon={e.icon}
                followerCount={e.followerCount}
                increase={e.increase}
                change={e.change}
                platform={e.platform}
              />
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
