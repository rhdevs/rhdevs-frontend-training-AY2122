import React from 'react'

import { BtnText, SubmitBtnDiv } from '../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'

const SubmitButton = ({ form }: { form?: string }) => {
  return (
    <SubmitBtnDiv type="submit" form={form}>
      <BtnText>submit</BtnText>
    </SubmitBtnDiv>
  )
}

export default SubmitButton
