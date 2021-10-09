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
  ProfilePicture,
  PostTitle,
  Author,
  PostMessage,
} from './styles/Screen1.styled'

import profilePic from '../../../assets/frontend_webdev.svg'

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
            <Post>
              <ProfilePicture src={profilePic} alt="Profile Picture" />
              <PostTitle>
                Title 1<Author>Zhou Zhu Zhu, 8h ago</Author>
                <PostMessage>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </PostMessage>
              </PostTitle>
            </Post>
            <Post>
              <ProfilePicture src={profilePic} alt="Profile Picture" />
              <PostTitle>
                Title 2<Author>Zhou Zhu Zhu, 8h ago</Author>
                <PostMessage>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </PostMessage>
              </PostTitle>
            </Post>
          </PostsSection>

          <BottomNavBar>Navigation Bar</BottomNavBar>
        </Screen>
      </MainContainer>
    </>
  )
}

export default Screen1
