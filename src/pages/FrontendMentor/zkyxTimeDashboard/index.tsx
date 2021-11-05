import React from 'react'

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
  TitleBox,
  EllipsisImage,
  FooterContainer,
  UserReportContainer,
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
  const [pastPeriod, setPastPeriod] = React.useState('Last day')

  return (
    <>
      <Background>
        <DashboardContainer>
          <UserCard>
            <UserInfoCard>
              <UserCardImage src={UserProfilePic} />
              <UserReportContainer>
                <FooterText>Report for</FooterText>
                <HourText>Jeremy Robson</HourText>
              </UserReportContainer>
            </UserInfoCard>
            <LegendCard>
              {period === 'Daily' ? (
                <LegendTextSelector>Daily</LegendTextSelector>
              ) : (
                <LegendText
                  onClick={() => {
                    setPeriod('Daily')
                    setPastPeriod('Last day')
                  }}
                >
                  Daily
                </LegendText>
              )}
              {period === 'Weekly' ? (
                <LegendTextSelector>Weekly</LegendTextSelector>
              ) : (
                <LegendText
                  onClick={() => {
                    setPeriod('Weekly')
                    setPastPeriod('Last week')
                  }}
                >
                  Weekly
                </LegendText>
              )}
              {period === 'Monthly' ? (
                <LegendTextSelector>Monthly</LegendTextSelector>
              ) : (
                <LegendText
                  onClick={() => {
                    setPeriod('Monthly')
                    setPastPeriod('Last month')
                  }}
                >
                  Monthly
                </LegendText>
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
              <TitleBox>
                <TitleText>Work</TitleText>
                <EllipsisImage src={EllipsisIcon} />
              </TitleBox>
              <FooterContainer>
                <HourText>1Hrs</HourText>
                <FooterText>{pastPeriod} - 0hr</FooterText>
              </FooterContainer>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#56c2e6' }}>
              <BackgroundIcon src={PlayIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <TitleBox>
                <TitleText>Play</TitleText>
                <EllipsisImage src={EllipsisIcon} />
              </TitleBox>
              <HourText>2Hrs</HourText>
              <FooterText>{pastPeriod} - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#ff7591' }}>
              <BackgroundIcon src={StudyIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <TitleBox>
                <TitleText>Study</TitleText>
                <EllipsisImage src={EllipsisIcon} />
              </TitleBox>
              <HourText>3Hrs</HourText>
              <FooterText>{pastPeriod} - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#4ac481' }}>
              <BackgroundIcon src={ExerciseIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <TitleBox>
                <TitleText>Exercise</TitleText>
                <EllipsisImage src={EllipsisIcon} />
              </TitleBox>
              <HourText>4Hrs</HourText>
              <FooterText>{pastPeriod} - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#7536d3' }}>
              <BackgroundIcon src={SocialIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <TitleBox>
                <TitleText>Social</TitleText>
                <EllipsisImage src={EllipsisIcon} />
              </TitleBox>
              <HourText>5Hrs</HourText>
              <FooterText>{pastPeriod} - 0hr</FooterText>
            </TimeInfoCard>
          </TimeCard>
          <TimeCard>
            <BackgroundCardTop style={{ backgroundColor: '#f1c65b' }}>
              <BackgroundIcon src={SelfCareIcon} />
            </BackgroundCardTop>
            <TimeInfoCard>
              <TitleBox>
                <TitleText>Self-Care</TitleText>
                <EllipsisImage src={EllipsisIcon} />
              </TitleBox>
              <HourText>6Hrs</HourText>
              <FooterText>{pastPeriod} - 0hr</FooterText>
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
