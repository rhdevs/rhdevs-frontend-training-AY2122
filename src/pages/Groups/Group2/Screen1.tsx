import React from 'react'
import {
  MainContainer,
  Screen,
  BottomNavBar,
  SearchBar,
  TextSection,
  Title,
  ButtonsSection,
  PostsSection,
  FilterBar,
  Post,
  ProfilePicture,
  PostTitle,
  PostMessage,
  AuthorNameText,
  SearchIconContainer,
  MenuButton,
} from './styles/Screen1.styled'

import profilePic from '../../../assets/Group2/cats.jpg'
import SearchIcon from '../../../assets/Group2/SearchIcon.svg'

const Screen1 = () => {
  return (
    <MainContainer>
      <Screen>
        <SearchBar>
          Good Afternoon Mao Mao,
          <SearchIconContainer src={SearchIcon} alt="Clock logo" />
        </SearchBar>
        <TextSection>
          <Title>Meow Meow Porridge</Title>
          <div style={{ textAlign: 'center' }}>Text text text...</div>
        </TextSection>
        <ButtonsSection>
          <MenuButton>Facilities</MenuButton>
          <MenuButton>Calander</MenuButton>
          <MenuButton>Laundry</MenuButton>
          <MenuButton>Supper</MenuButton>
        </ButtonsSection>
        <PostsSection>
          {"What's Happening..."}
          <FilterBar>FilterBar</FilterBar>
          <Post>
            <ProfilePicture src={profilePic} alt="Profile Picture" />
            <PostTitle>
              Title 1<AuthorNameText>Zhou Zhu Zhu, 8h ago</AuthorNameText>
              <PostMessage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </PostMessage>
            </PostTitle>
          </Post>
          <Post>
            <ProfilePicture src={profilePic} alt="Profile Picture" />
            <PostTitle>
              Title 2<AuthorNameText>Zhou Zhu Zhu, 8h ago</AuthorNameText>
              <PostMessage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </PostMessage>
            </PostTitle>
          </Post>
          <Post>
            <ProfilePicture src={profilePic} alt="Profile Picture" />
            <PostTitle>
              Title 2<AuthorNameText>Zhou Zhu Zhu, 8h ago</AuthorNameText>
              <PostMessage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </PostMessage>
            </PostTitle>
          </Post>
          <Post>
            <ProfilePicture src={profilePic} alt="Profile Picture" />
            <PostTitle>
              Title 2<AuthorNameText>Zhou Zhu Zhu, 8h ago</AuthorNameText>
              <PostMessage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </PostMessage>
            </PostTitle>
          </Post>
        </PostsSection>

        <BottomNavBar>Navigation Bar</BottomNavBar>
      </Screen>
    </MainContainer>
  )
}

export default Screen1
