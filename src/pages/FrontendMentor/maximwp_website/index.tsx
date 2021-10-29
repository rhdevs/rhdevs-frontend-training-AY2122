import React from 'react'

import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 3rem;
`

const StyledHeader = styled.h1`
  color: rgb(25, 25, 121);
  font-family: Arial, sans-serif;
  margin: 1rem auto;
`

const StyledParagraph = styled.p`
  text-align: justify;
`

const StyledSubheader = styled.h2`
  margin: 1rem 0 0 0;
  font-family: Arial, Helvetica, sans-serif;
`

const StyledImg = styled.img`
  border-radius: 10px;
`

const Lesson1Example = () => {
  return (
    <MainContainer>
      <StyledHeader>Welcome to the website</StyledHeader>
      <StyledImg src="https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png" alt="random" />
      <StyledParagraph>Description...</StyledParagraph>
      <br />
      <StyledSubheader>Directions</StyledSubheader>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ipsum lacinia, aliquam lectus sit amet, ultrices
        tellus. Fusce posuere risus est, eget tempus metus iaculis posuere. Quisque dui velit, scelerisque non lectus
        ut, mollis vulputate sapien. Curabitur sed mi tincidunt, convallis leo eu, iaculis ex. Aenean nec dui dolor.
        Mauris facilisis faucibus odio et tempor. Nam consequat lorem eu gravida sollicitudin. Phasellus facilisis
        iaculis neque eget luctus. Sed commodo dui sit amet viverra gravida. Cras sed lectus nisl.
        <br />
        <em>Come Join Us!</em>
      </StyledParagraph>
    </MainContainer>
  )
}

export default Lesson1Example
