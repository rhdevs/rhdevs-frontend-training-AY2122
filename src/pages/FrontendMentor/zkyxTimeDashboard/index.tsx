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
  BackgroundIcon,
  TimeInfoCard,
  BackgroundCardTop,
  LegendTextSelector,
} from './styles/TimeDashboard.styled'
import WorkIcon from './images/icon-work.svg'
import PlayIcon from './images/icon-play.svg'
import StudyIcon from './images/icon-study.svg'
import ExerciseIcon from './images/icon-exercise.svg'
import SocialIcon from './images/icon-social.svg'
import SelfCareIcon from './images/icon-self-care.svg'
import UserProfilePic from './images/image-jeremy.png'
import EllipsisIcon from './images/icon-ellipsis.svg'

const TimeDashBoardPage = () => {
  const [period, setPeriod] = React.useState('Daily')
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
              {period === 'Daily' ? (
                <LegendTextSelector>Daily</LegendTextSelector>
              ) : (
                <LegendText onClick={() => setPeriod('Daily')}>Daily</LegendText>
              )}
              {period === 'Weekly' ? (
                <LegendTextSelector>Weekly</LegendTextSelector>
              ) : (
                <LegendText onClick={() => setPeriod('Weekly')}>Weekly</LegendText>
              )}
              {period === 'Monthly' ? (
                <LegendTextSelector>Monthly</LegendTextSelector>
              ) : (
                <LegendText onClick={() => setPeriod('Monthly')}>Monthly</LegendText>
              )}

              {/*<LegendText>Daily</LegendText>
              <LegendText>Weekly</LegendText>
              <LegendText>Monthly</LegendText>*/}
            </LegendCard>
          </UserCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#ff8c66' }}>
              <BackgroundIcon src={WorkIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TitleText>Work</TitleText>
                <img src={EllipsisIcon} style={{ width: '21px', height: '5px' }} />
              </div>
              <HourText>1Hrs</HourText>
              <FooterText>Last day - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#56c2e6' }}>
              <BackgroundIcon src={PlayIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TitleText>Play</TitleText>
                <img src={EllipsisIcon} style={{ width: '21px', height: '5px' }} />
              </div>
              <HourText>2Hrs</HourText>
              {period === 'Daily' ? (
                <FooterText>Last day - 0hr</FooterText>
              ) : period === 'Weekly' ? (
                <FooterText>Last week - 0hr</FooterText>
              ) : (
                <FooterText>Last month - 0hr</FooterText>
              )}
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#ff7591' }}>
              <BackgroundIcon src={StudyIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TitleText>Study</TitleText>
                <img src={EllipsisIcon} style={{ width: '21px', height: '5px' }} />
              </div>
              <HourText>3Hrs</HourText>
              <FooterText>Last day - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#4ac481' }}>
              <BackgroundIcon src={ExerciseIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TitleText>Exercise</TitleText>
                <img src={EllipsisIcon} style={{ width: '21px', height: '5px' }} />
              </div>
              <HourText>4Hrs</HourText>
              <FooterText>Last day - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#7536d3' }}>
              <BackgroundIcon src={SocialIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TitleText>Social</TitleText>
                <img src={EllipsisIcon} style={{ width: '21px', height: '5px' }} />
              </div>
              <HourText>5Hrs</HourText>
              <FooterText>Last day - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#f1c65b' }}>
              <BackgroundIcon src={SelfCareIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TitleText>Self-Care</TitleText>
                <img src={EllipsisIcon} style={{ width: '21px', height: '5px' }} />
              </div>
              <HourText>6Hrs</HourText>
              <FooterText>Last day - 0hr</FooterText>
            </TimeInfoCard>
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
