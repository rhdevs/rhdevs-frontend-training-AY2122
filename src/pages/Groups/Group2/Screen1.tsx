import React from 'react'
import {
  MainContainer,
  Screen,
  BottomNavBar,
  SearchBar,
  SearchButton,
  TextSection,
  Title,
  ButtonsSection,
  PostsSection,
  FilterBar,
  Post,
} from './styles/Screen1.styled'

const Screen1 = () => {
  return (
    <>
      <MainContainer>
        <Screen>
          <SearchBar>
            Good Afternoon Mao Mao,
            <SearchButton>Icon</SearchButton>
          </SearchBar>
          <TextSection>
            <Title>Meow Meow Porridge</Title>
            <div style={{ textAlign: 'center' }}>Text text text...</div>
          </TextSection>
          <ButtonsSection>Buttons</ButtonsSection>
          <PostsSection>
            {"What's Happening..."}
            <FilterBar>FilterBar</FilterBar>
            <Post>Post1</Post>
            <Post>Post2</Post>
          </PostsSection>

          <BottomNavBar>Navigation Bar</BottomNavBar>
        </Screen>
      </MainContainer>
    </>
  )
}

export default Screen1
