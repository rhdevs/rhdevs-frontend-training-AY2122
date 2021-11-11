import React from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import { lightCoral } from '../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours.styled'
import {
  BtnText,
  SubmitBtnDiv,
  TextAreaInput,
  TextInput,
  TextInputRequiredWarningLabel,
} from '../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { BarLink, ContactBtnDiv, HeaderBarLinksStyled, MyTeamLogoStyled } from './styles/GlobalComponents.styled'

import logo from '../../assets/MarcusFEMentor2/logo.svg'

export const MyTeamLogo = () => {
  return <MyTeamLogoStyled src={logo} />
}

export const HeaderBarLinks = ({ left, top, responsive }: { left?: string; top?: string; responsive?: boolean }) => {
  const history = useHistory()
  return (
    <HeaderBarLinksStyled left={left} top={top} responsive={responsive}>
      <BarLink onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_HOME)}>home</BarLink>
      <BarLink onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_ABOUT)}>about</BarLink>
    </HeaderBarLinksStyled>
  )
}

export const ContactButton = ({ color }: { color: 'light' | 'dark' }) => {
  const history = useHistory()
  return (
    <ContactBtnDiv color={color} onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_CONTACT)}>
      <BtnText>contact us</BtnText>
    </ContactBtnDiv>
  )
}

export const SubmitButton = ({ form }: { form?: string }) => {
  return (
    <SubmitBtnDiv type="submit" form={form}>
      <BtnText>submit</BtnText>
    </SubmitBtnDiv>
  )
}

export const TextInputEntry = ({ entry }: { entry: string }) => {
  const warningText = 'This field is required'
  return (
    <>
      <TextInput
        id={`input-${entry}`}
        placeholder={entry}
        onInput={() => {
          const label = document.getElementById(`input-${entry}-label`)
          if (label) label.style.color = 'transparent'
        }}
        onInvalid={() => {
          const label = document.getElementById(`input-${entry}-label`)
          if (label) label.style.color = lightCoral
        }}
        required
      />
      <TextInputRequiredWarningLabel id={`input-${entry}-label`} htmlFor={`input-${entry}`}>
        {warningText}
      </TextInputRequiredWarningLabel>
    </>
  )
}

export const TextAreaInputEntry = ({ entry }: { entry: string }) => {
  const warningText = 'This field is required'
  return (
    <>
      <TextAreaInput
        id={`input-${entry}`}
        placeholder={entry}
        onInput={() => {
          const label = document.getElementById(`input-${entry}-label`)
          if (label) label.style.color = 'transparent'
        }}
        onInvalid={() => {
          const label = document.getElementById(`input-${entry}-label`)
          if (label) label.style.color = lightCoral
        }}
        required
      />
      <TextInputRequiredWarningLabel id={`input-${entry}-label`} htmlFor={`input-${entry}`}>
        {warningText}
      </TextInputRequiredWarningLabel>
    </>
  )
}
