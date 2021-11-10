import styled from 'styled-components'

// div styles

export const PageDiv = styled.div`
  position: relative;
  width: 100%;

  overflow: hidden; // cut off overflowing background logos
`

export const LineAbovePara = styled.div`
  /* Rectangle to be placed on top left corner within a div */

  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 4px;
`

export const FaceImage = styled.img`
  width: 62px;
  height: 62px;
  border: 2px solid #c4fffe;
  border-radius: 50%;
`

export const SocialMediaIconHover = styled.img`
  :hover {
    filter: brightness(0) saturate(100%) invert(65%) sepia(27%) saturate(1679%) hue-rotate(311deg) brightness(103%)
      contrast(93%);
  } // magic that converts icon from white to lightCoral on hover
`
