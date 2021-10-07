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
} from './styles/Screen1.styled'
import homeIconUnselected from '../../../assets/Group1/homeIconUnselected.svg'
import facilitiesIconSelected from '../../../assets/Group1/facilitiesIconSelected.svg'
import calenderIconUnselected from '../../../assets/Group1/calenderIconUnselected.svg'
import profileIconUnselected from '../../../assets/Group1/profileIconUnselected.svg'
import tickIconRH from '../../../assets/Group1/tickIconRH.svg'

const Screen1 = () => {
  return (
    <>
      <div>
        <TopNav>
          <LeftOutlined />
          <Header> My Bookings </Header>
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

        <CenterNav></CenterNav>

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
