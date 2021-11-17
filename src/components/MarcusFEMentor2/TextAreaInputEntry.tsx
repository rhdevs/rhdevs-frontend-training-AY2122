import React from 'react'

import { lightCoral } from '../../pages/FrontendMentor/MarcusFEMentor2/styles/Colours'
import {
  TextAreaInput,
  TextInputRequiredWarningLabel,
} from '../../pages/FrontendMentor/MarcusFEMentor2/styles/GlobalDivStyles.styled'

const TextAreaInputEntry = ({ entry }: { entry: string }) => {
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

export default TextAreaInputEntry
