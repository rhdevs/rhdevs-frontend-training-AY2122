import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../../components/Card'
import PageHeader from '../../components/PageHeader'
import { PATHS } from '../../routes/PATHS'
import { InformationCardSection, MembersSection, MembersSectionHeader } from '../LandingPage/styles/LandingPage.styled'

const FrontendMentor = () => {
  const history = useHistory()
  return (
    <MembersSection>
      <PageHeader
        title="Frontend Mentor Practices"
        description={
          <>
            {'frontend mentor practices, challenges taken from '}
            <a target="_blank" rel="noopener noreferrer" href={'https://frontendmentor.io'}>
              frontendmentor.io
            </a>
          </>
        }
      />
      <MembersSectionHeader>Challenge Name</MembersSectionHeader>
      <InformationCardSection>
        {/* Example; title: challenge name, description: your name, onclick: go to new page with attempt*/}
        <Card
          title="3-Column Preview Card"
          description="Maxim and Wei Pin"
          onClick={() => history.push(PATHS.MAXIM_WEIPIN_WEBSITE)}
        />
        <Card title="Meet landing page" description="your name" />
        <Card
          title="Stats card component"
          description="Kiyong"
          onClick={() => history.push(PATHS.KY_STATS_CARD_COMPONENT)}
        />
        <Card title="Job Listings" description="Kiyong" onClick={() => history.push(PATHS.KY_JOB_LISTING)} />
        <Card
          title="Single price grid component"
          description="Elva & Yongbin"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_ELVA_YONGBIN_PRACTICE)}
        />
        <Card
          title="Time tracking dashboard"
          description="zhikai-yixuan"
          onClick={() => history.push(PATHS.TIME_DASHBOARD)}
        />
        <Card
          title="Launch Countdown Timer"
          description="zhikai-yixuan"
          onClick={() => history.push(PATHS.YX_ZK_COUNTDOWN)}
        />
        <Card title="Social Media Dashboard" description="Shao Kiat" onClick={() => history.push(PATHS.SK_DASHBOARD)} />
        <Card title="REST Countries API" description="Marcus" onClick={() => history.push(PATHS.MARCUS_FE_MENTOR)} />
        <Card
          title="myteam multi-page website"
          description="Marcus"
          onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_HOME)}
        />
        <Card
          title="Tip Calculator App"
          description="Jason"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_TIP_CALCULATOR_APP)}
        />
        <Card
          title="Profile card component"
          description="Prince, Enhao"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_PRINCE_ENHAO)}
        />
        <Card
          title="Rock, Paper, Scissors"
          description="Chun Yu"
          onClick={() => history.push(PATHS.ROCK_PAPER_SCISSORS)}
        />
        <Card title="Pricing with toggle" description="Max and WP" onClick={() => history.push(PATHS.MAXIMWP_PROJ2)} />
        <Card
          title="Calculator App"
          description="Prince, Enhao"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_PRINCE_ENHAO_CALC)}
        />
        <Card
          title="Pricing Component with toggle"
          description="Jason"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_PRICE_TOGGLE_JASON)}
        />
        <Card title="IP Address Tracker" description="Shao Kiat" onClick={() => history.push(PATHS.SK_IPADDRESS)} />
      </InformationCardSection>
      <InformationCardSection>
        <Card
          title="Hubble"
          description="Tai and Yong Zhong"
          onClick={() => history.push(PATHS.FRONTEND_MENTOR_HUBBLE)}
        />
        <Card title="Pomodoro App" description="Chun Yu" onClick={() => history.push(PATHS.POMODORO)} />
      </InformationCardSection>
      <InformationCardSection>
        <Card title="To-do" description="Tai" onClick={() => history.push(PATHS.FRONTEND_MENTOR_TODO)} />
      </InformationCardSection>
    </MembersSection>
  )
}
export default FrontendMentor
