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
  StyledUndo,
  DeletedEventText,
  EventName,
  EventTime,
} from './styles/Screen1.styled'
import homeIconUnselected from '../../../assets/Group1/homeIconUnselected.svg'
import facilitiesIconSelected from '../../../assets/Group1/facilitiesIconSelected.svg'
import calenderIconUnselected from '../../../assets/Group1/calenderIconUnselected.svg'
import profileIconUnselected from '../../../assets/Group1/profileIconUnselected.svg'
import tickIconRH from '../../../assets/Group1/tickIconRH.svg'
import undoButtonIcon from '../../../assets/Group1/undoButtonIcon.svg'

const Screen1 = () => {
  return (
    <>
      <TopNav>
        <LeftOutlined />
        <Header> My Bookings </Header>
      </TopNav>

      <SucessfullyDeletedEvent>
        <StyledTick src={tickIconRH} />
        <DeletedEventText>Successfully Deleted Event!</DeletedEventText>
        <EventName>Voices Bonding Camp</EventName>
        <EventTime>16/12/21 1:00 PM to 3:00PM</EventTime>
        <StyledUndo src={undoButtonIcon} />
        {/* ask design team to sketch undo button */}
      </SucessfullyDeletedEvent>

      <BotNav>
        <StyledButton src={homeIconUnselected} />
        <StyledButton src={facilitiesIconSelected} />
        <StyledButton src={calenderIconUnselected} />
        <StyledButton src={profileIconUnselected} />
      </BotNav>
    </>
  )
}

export default Screen1
