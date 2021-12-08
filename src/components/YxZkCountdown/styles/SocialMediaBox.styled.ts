import styled from 'styled-components'

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  gap: 30px;
  bottom: 10vh;
`

export const SocialMediaIcon = styled.img`
  width: 2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`
