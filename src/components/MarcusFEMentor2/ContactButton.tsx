import React from 'react'
import { useHistory } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import { BtnText } from '../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'
import { ContactBtnDiv } from './styles/GlobalComponents.styled'

const ContactButton = ({ color, margin }: { color: 'light' | 'dark'; margin?: string }) => {
  const history = useHistory()
  return (
    <ContactBtnDiv color={color} margin={margin} onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_CONTACT)}>
      <BtnText>contact us</BtnText>
    </ContactBtnDiv>
  )
}

export default ContactButton
