import React from 'react'
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined'
import {
  SucessfullyDeletedEvent,
  TopNav,
  BotNav,
  Header,
  StyledButton,
  StyledTick,
  DeletedEventText,
  EventName,
  EventTime,
  UndoIcon,
  CenterNav,
  GreyBoxDelete,
  GreyBoxSort,
  GreyBoxText,
  StyledGreybox,
  Booking,
  BookingLocation,
  BookingCCA,
  BookingTiming,
  StyledEdit,
  StyledDustbin,
  StyledCCAIcon,
} from './styles/Screen1.styled'
import homeIconUnselected from '../../../assets/Group1/homeIconUnselected.svg'
import facilitiesIconSelected from '../../../assets/Group1/facilitiesIconSelected.svg'
import calenderIconUnselected from '../../../assets/Group1/calenderIconUnselected.svg'
import profileIconUnselected from '../../../assets/Group1/profileIconUnselected.svg'
import tickIconRH from '../../../assets/Group1/tickIconRH.svg'
import dustbinIconBlack from '../../../assets/Group1/dustbinIconBlack.svg'
import Schedule from '../../../assets/Group1/Schedule.svg'
import greendustbin from '../../../assets/Group1/dustbinIconGreen.svg'
import greenedit from '../../../assets/Group1/editIconGreen.svg'
import bandroom from '../../../assets/Group1/bandroomIcon.svg'

const Screen1 = () => {
  return (
    <>
      <div>
        <TopNav>
          <LeftOutlined />
          My Bookings
        </TopNav>
      </div>
      <div>
        <SucessfullyDeletedEvent>
          <StyledTick src={tickIconRH} />
          <DeletedEventText>Successfully Deleted Event!</DeletedEventText>
          <EventName>Voices Bonding Camp</EventName>
          <EventTime>16/12/21 1:00 PM to 3:00PM</EventTime>
          <UndoIcon>undo</UndoIcon>
        </SucessfullyDeletedEvent>

        <CenterNav>
          <GreyBoxDelete>
            <GreyBoxText>Recently Deleted</GreyBoxText>
            <StyledGreybox src={dustbinIconBlack} />
          </GreyBoxDelete>
          <GreyBoxSort>
            <GreyBoxText>Sort By</GreyBoxText>
            <StyledGreybox src={Schedule} />
          </GreyBoxSort>
        </CenterNav>

        <Booking>
          <StyledCCAIcon src={bandroom} />
          <BookingLocation>Bandroom</BookingLocation>
          <BookingCCA> Rhebels Practice</BookingCCA>
          <BookingTiming> 16/01/20 12:00 PM - 1:00 PM </BookingTiming>
          <StyledEdit src={greenedit} />
          <StyledDustbin src={greendustbin} />
        </Booking>

        <BotNav>
          <StyledButton src={homeIconUnselected} />
          <StyledButton src={facilitiesIconSelected} />
          <StyledButton src={calenderIconUnselected} />
          <StyledButton src={profileIconUnselected} />
        </BotNav>
      </div>
    </>
  )
}

export default Screen1
