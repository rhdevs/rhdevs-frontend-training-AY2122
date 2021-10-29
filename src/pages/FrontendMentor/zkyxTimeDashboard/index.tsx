import React from 'react'
import { Card } from 'antd'

import {
  Background,
  DashboardContainer,
  CardContainer,
  CardBody,
  CardImage,
  TitleText,
  HourText,
  FooterText,
  TimeCard,
  UserCard,
  UserInfoCard,
  LegendCard,
  LegendText,
  UserCardImage,
} from './styles/TimeDashboard.styled'
import WorkBackground from './images/icon-work.svg'
import UserProfilePic from './images/image-jeremy.png'

const TimeDashBoardPage = () => {
  return (
    <>
      <Background>
        <DashboardContainer>
          <UserCard>
            <UserInfoCard>
              <UserCardImage src={UserProfilePic} />
              <FooterText>Report for</FooterText>
              <HourText>
                Jeremy
                <br />
                Robson
              </HourText>
            </UserInfoCard>
            <LegendCard>
              <LegendText>Daily</LegendText>
              <LegendText>Weekly</LegendText>
              <LegendText>Monthly</LegendText>
            </LegendCard>
          </UserCard>
          <TimeCard>
            <TitleText>Play</TitleText>
            <HourText>42Hrs</HourText>
            <FooterText>Last day - 0hr</FooterText>
          </TimeCard>
          <TimeCard>
            <TitleText>Work</TitleText>
            <HourText>60Hrs</HourText>
            <FooterText>Last day - 0hr</FooterText>
          </TimeCard>
          <TimeCard>
            <TitleText>Abit</TitleText>
            <HourText>60Hrs</HourText>
            <FooterText>Last day - 0hr</FooterText>
          </TimeCard>
          <TimeCard>
            <TitleText>Choy</TitleText>
            <HourText>60Hrs</HourText>
            <FooterText>Last day - 0hr</FooterText>
          </TimeCard>
          <TimeCard>
            <TitleText>Only</TitleText>
            <HourText>60Hrs</HourText>
            <FooterText>Last day - 0hr</FooterText>
          </TimeCard>
          <TimeCard>
            <TitleText>FFFF</TitleText>
            <HourText>60Hrs</HourText>
            <FooterText>Last day - 0hr</FooterText>
          </TimeCard>
          {/*<CardContainer>
            <CardBody>
              <CardImage src={WorkBackground} alt="work" />
              <TimeCard>
                <TitleText>Play</TitleText>
                <HourText>42Hrs</HourText>
                <FooterText>Last day - 0hr</FooterText>
              </TimeCard>
            </CardBody>
          </CardContainer>*/}
          {/*<Card style={{ width: '30%', display: 'flex' }}>
            <p>Time DashBoard</p>
          </Card>
          <Card style={{ width: '30%', display: 'flex' }}>
            <p>Time DashBoard</p>
  </Card>*/}
        </DashboardContainer>
      </Background>
    </>
  )
}

export default TimeDashBoardPage
