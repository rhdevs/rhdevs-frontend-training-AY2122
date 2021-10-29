import React from 'react'
import { DashboardHeader, FollowersCount, MainPage } from './skDashboard.styled'

const skDashboard = () => {
  return (
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
    </MainPage>
  )
}

export default skDashboard
