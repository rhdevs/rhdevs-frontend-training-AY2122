import React from 'react'

import { SocialMediaContainer, SocialMediaIcon } from './styles/SocialMediaBox.styled'
import PinterestIcon from '../../assets/YxZkCountdown/icon-pinterest.svg'
import FacebookIcon from '../../assets/YxZkCountdown/icon-facebook.svg'
import InstagramIcon from '../../assets/YxZkCountdown/icon-instagram.svg'

const SocialMediaBox = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaIcon src={FacebookIcon} />
      <SocialMediaIcon src={PinterestIcon} />
      <SocialMediaIcon src={InstagramIcon} />
    </SocialMediaContainer>
  )
}

export default SocialMediaBox
