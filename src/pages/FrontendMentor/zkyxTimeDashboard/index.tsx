import React from 'react'

import {
  Background,
  DashboardContainer,
  HourText,
  FooterText,
  UserCard,
  UserInfoCard,
  LegendCard,
  LegendText,
  UserCardImage,
  LegendTextSelector,
  UserReportContainer,
} from './styles/TimeDashboard.styled'
import WorkIcon from './images/icon-work.svg'
import PlayIcon from './images/icon-play.svg'
import StudyIcon from './images/icon-study.svg'
import ExerciseIcon from './images/icon-exercise.svg'
import SocialIcon from './images/icon-social.svg'
import SelfCareIcon from './images/icon-self-care.svg'
import UserProfilePic from './images/image-jeremy.png'
import TimeCard from '../../../components/zkyxFrontendMentor/TimeCard'

const TimeDashBoardPage = () => {
  const [period, setPeriod] = React.useState('Daily')
  const [pastPeriod, setPastPeriod] = React.useState('Last day')

  type Card = {
    key: number
    titleText: string
    hourText: string
    footerText: string
    backgroundColor: string
    icon: string
  }

  const placeholderCards = [
    {
      key: 1,
      titleText: 'Work',
      hourText: '2hrs',
      footerText: ' - 1hrs',
      backgroundColor: '#ff8c66',
      icon: WorkIcon,
    },
    {
      key: 2,
      titleText: 'Play',
      hourText: '0.5hrs',
      footerText: ' - 6hrs',
      backgroundColor: '#56e2c6',
      icon: PlayIcon,
    },
    {
      key: 3,
      titleText: 'Study',
      hourText: '5hrs',
      footerText: ' - 3hrs',
      backgroundColor: '#ff7591',
      icon: StudyIcon,
    },
    {
      key: 4,
      titleText: 'Exercise',
      hourText: '8hrs',
      footerText: ' - 2hrs',
      backgroundColor: '#4ac481',
      icon: ExerciseIcon,
    },
    {
      key: 5,
      titleText: 'Social',
      hourText: '10hrs',
      footerText: ' - 9hrs',
      backgroundColor: '#7536d3',
      icon: SocialIcon,
    },
    {
      key: 6,
      titleText: 'Self Care',
      hourText: '4hrs',
      footerText: ' - 1hrs',
      backgroundColor: '#f1c65b',
      icon: SelfCareIcon,
    },
  ]

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
            </LegendCard>
          </UserCard>
          {placeholderCards.map((card: Card) => (
            <TimeCard
              key={card.key}
              titleText={card.titleText}
              hourText={card.hourText}
              footerText={card.footerText}
              pastPeriod={pastPeriod}
              backgroundColor={card.backgroundColor}
              icon={card.icon}
            />
          ))}
        </DashboardContainer>
      </Background>
    </>
  )
}

export default TimeDashBoardPage
