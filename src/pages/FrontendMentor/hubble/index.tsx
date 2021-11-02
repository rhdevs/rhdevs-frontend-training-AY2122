import React from 'react'
import {
  MainContainer,
  LColumn,
  LogoBox,
  Rows,
  HeaderText,
  BodyText,
  ButtonContainer,
  SocialIcons,
  IconRows,
} from './hubble.styled'
//import HubbleCard from '../../../components/HubbleCard'
import comp from '../../../assets/hubble/illustration-mockups.svg'
import logo from '../../../assets/hubble/logo.svg'

const Hubble = () => {
  return (
    <>
      <MainContainer>
        <Rows>
          <LogoBox>
            <img src={logo} />
          </LogoBox>
        </Rows>
        <Rows>
          <LColumn>
            <img src={comp} />
          </LColumn>

          <LColumn>
            <HeaderText>Build the community your fans will love</HeaderText>
            <BodyText>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
              connections with your users as you engage in genuine connection.
            </BodyText>
            <ButtonContainer>Register</ButtonContainer>
          </LColumn>
        </Rows>

        <IconRows>
          <SocialIcons>hellloo</SocialIcons>
          <SocialIcons>hellloo</SocialIcons>
          <SocialIcons>hellloo</SocialIcons>
        </IconRows>
      </MainContainer>
    </>
  )
}

export default Hubble
