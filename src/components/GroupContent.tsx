import React from 'react'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../App'
import { ComponentsContainer, MainContainer, StyledDiv, StyledImg, StyledText } from './styles/GroupContent.styled'

type Props = {
  groupNumber: number
  oldScreen1ImgSrc: string
  oldScreen2ImgSrc: string
}

const GroupContent = (props: Props) => {
  const history = useHistory()
  return (
    <MainContainer>
      <h1>Group 0</h1>
      <StyledText>your name, another name</StyledText>
      <ComponentsContainer>
        <StyledDiv>
          <StyledImg
            src={props.oldScreen1ImgSrc}
            alt="old screen 1"
            onClick={() => history.push(`${PATHS.GROUP_ROUTE}/${props.groupNumber}/screen/1`)}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledImg
            src={props.oldScreen2ImgSrc}
            alt="old screen 2"
            onClick={() => history.push(`${PATHS.GROUP_ROUTE}/${props.groupNumber}/screen/2`)}
          />
        </StyledDiv>
      </ComponentsContainer>
    </MainContainer>
  )
}

export default GroupContent
