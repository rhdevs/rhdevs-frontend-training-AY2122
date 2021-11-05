import React, { useState } from 'react'
import { Switch } from 'antd'
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
import SocialOverviewCard from '../../../components/skDashboard/SocialOverviewCard'
import { MediaCard } from '../../../store/skDashboard/types'
import { OverviewCard } from '../../../store/skDashboard/types'
import { mediaCardsList } from '../../../store/skDashboard/stubs'
import { overviewCardsList } from '../../../store/skDashboard/stubs'

const skDashboard = () => {
  const [theme, setTheme] = useState('dark')
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
          <LineSeparator />
          <StyledDarkMode>
            Dark Mode
            <Switch defaultChecked onClick={themeToggler} />
          </StyledDarkMode>

          <CardSection>
            {mediaCardsList.map((e: MediaCard) => (
              <SocialMediaCard
                key={e.followerCount}
                names={e.names}
                icon={e.icon}
                followerCount={e.followerCount}
                increase={e.increase}
                change={e.change}
                borderColor={e.borderColor}
              />
            ))}
          </CardSection>
          <OverviewHeading>Overview - Today</OverviewHeading>
          <CardSection>
            {overviewCardsList.map((e: OverviewCard) => (
              <SocialOverviewCard
                key={e.stats}
                icon={e.icon}
                statsName={e.statsName}
                stats={e.stats}
                increase={e.increase}
                change={e.change}
              />
            ))}
          </CardSection>
        </MainPage>
      </>
    </ThemeProvider>
  )
}

export default skDashboard
