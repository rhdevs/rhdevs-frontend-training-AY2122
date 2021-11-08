import React from 'react'
import {
  BackgroundCardTop,
  BackgroundIcon,
  EllipsisImage,
  FooterContainer,
  FooterText,
  HourText,
  TimeInfoCard,
  TitleBox,
  TitleText,
} from './styles/TimeCard.styled'

import EllipsisIcon from '../../pages/FrontendMentor/zkyxTimeDashboard/images/icon-ellipsis.svg'

type Props = {
  titleText: string
  hourText: number
  footerText: number
  pastPeriod: string
  backgroundColor: string
  icon: string
}

const TimeCardStyles = {
  overflow: 'hidden',
  display: 'grid',
  borderRadius: '20px',
  width: '100%',
  height: '100%',
  backgroundColor: '#1c1f4a',
  backgroundSize: 'fill',
}

const TimeCard = (props: Props) => {
  return (
    <div style={TimeCardStyles}>
      <BackgroundCardTop style={{ backgroundColor: props.backgroundColor }}>
        <BackgroundIcon src={props.icon} />
      </BackgroundCardTop>
      <TimeInfoCard>
        <TitleBox>
          <TitleText>{props.titleText}</TitleText>
          <EllipsisImage src={EllipsisIcon} />
        </TitleBox>
        <FooterContainer>
          <HourText>{props.hourText}hrs</HourText>
          <FooterText>
            {props.pastPeriod} - {props.footerText}hrs
          </FooterText>
        </FooterContainer>
      </TimeInfoCard>
    </div>
  )
}

export default TimeCard
