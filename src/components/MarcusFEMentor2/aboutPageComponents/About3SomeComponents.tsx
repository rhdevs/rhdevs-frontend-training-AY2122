import React from 'react'

import { About3ClientLogo, About3ClientsDiv, About3Title } from './styles/About3SomeComponents.styled'

import vergeLogo from '../../../assets/MarcusFEMentor2/logo-the-verge.png'
import jakartaLogo from '../../../assets/MarcusFEMentor2/logo-jakarta-post.png'
import guardianLogo from '../../../assets/MarcusFEMentor2/logo-the-guardian.png'
import radarLogo from '../../../assets/MarcusFEMentor2/logo-tech-radar.png'
import gadgetsLogo from '../../../assets/MarcusFEMentor2/logo-gadgets-now.png'

const clientLogos: string[] = [vergeLogo, jakartaLogo, guardianLogo, radarLogo, gadgetsLogo]

const About3SomeContents = () => {
  return (
    <>
      <About3Title>Some of our clients</About3Title>
      <About3ClientsDiv>
        {clientLogos.map((logo) => (
          <About3ClientLogo key={logo} src={logo} />
        ))}
      </About3ClientsDiv>
    </>
  )
}

export default About3SomeContents
