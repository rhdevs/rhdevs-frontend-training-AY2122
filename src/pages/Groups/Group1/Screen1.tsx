import React from 'react'
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined'
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined'
import {
  SucessfullyDeletedEvent,
  SuccessfullyDeletedContainer,
  TopNav,
  BotNav,
  Header,
  StyledButton,
} from './styles/Screen1.styled'
import homeIconUnselected from '../../../assets/Group1/homeIconUnselected.svg'
import facilitiesIconSelected from '../../../assets/Group1/facilitiesIconSelected.svg'
import calenderIconUnselected from '../../../assets/Group1/calenderIconUnselected.svg'
import profileIconUnselected from '../../../assets/Group1/profileIconUnselected.svg'

const Screen1 = () => {
  return (
    <>
      <TopNav>
        <LeftOutlined />
        <Header> My Bookings </Header>
      </TopNav>

      <SuccessfullyDeletedContainer>
        <SucessfullyDeletedEvent background="lightgreen"></SucessfullyDeletedEvent>
      </SuccessfullyDeletedContainer>

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
