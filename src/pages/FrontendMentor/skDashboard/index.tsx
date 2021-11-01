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
import FacebookIcon from '../../../assets/skDashboard/icon-facebook.svg'
import TwitterIcon from '../../../assets/skDashboard/icon-twitter.svg'
import InstagramIcon from '../../../assets/skDashboard/icon-instagram.svg'
import YoutubeIcon from '../../../assets/skDashboard/icon-youtube.svg'
import SocialOverviewCard from '../../../components/skDashboard/SocialOverviewCard'

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
          <SocialMediaCard icon={FacebookIcon} followerCount={'1987'} names={''} />
          <SocialMediaCard icon={TwitterIcon} followerCount={'1044'} names={''} />
          <SocialMediaCard icon={InstagramIcon} followerCount={'11k'} names={''} />
          <SocialMediaCard icon={YoutubeIcon} followerCount={'8239'} names={''} />
          <OverviewHeading>Overview - Today</OverviewHeading>
          <SocialOverviewCard icon={FacebookIcon} statsName="PageViews" stats={'87'} />
          <SocialOverviewCard icon={FacebookIcon} statsName="Likes" stats={'52'} />
          <SocialOverviewCard icon={InstagramIcon} statsName="Likes" stats={'5462'} />
          <SocialOverviewCard icon={InstagramIcon} statsName="Profile Views" stats={'52k'} />
          <SocialOverviewCard icon={TwitterIcon} statsName="Retweets" stats={'117'} />
          <SocialOverviewCard icon={TwitterIcon} statsName="Likes" stats={'507'} />
          <SocialOverviewCard icon={YoutubeIcon} statsName="Likes" stats={'107'} />
          <SocialOverviewCard icon={YoutubeIcon} statsName="Total Views" stats={'1407'} />
        </MainPage>
      </>
    </ThemeProvider>
  )
}

export default skDashboard
