import React from 'react'
import {
  MainContainer,
  Screen,
  BottomNavBar,
  SearchBar,
  TextSection,
  HomeTitle,
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
  FilterBarComponent,
  FilterBarComponentMostRight,
  BotNav,
  StyledButton,
} from './styles/Screen1.styled'

import profilePic from '../../../assets/Group2/cats.jpg'
import SearchIcon from '../../../assets/Group2/SearchIcon.svg'
import BotCalendarIcon from '../../../assets/Group2/BottomNavCalendarIcon.svg'
import BotFacilitiesIcon from '../../../assets/Group2/BottomNavFacilitiesIcon.svg'
import BotHomeIcon from '../../../assets/Group2/BottomNavHomeIcon.svg'
import BotProfileIcon from '../../../assets/Group2/BottomNavProfileIcon.svg'

const Screen1 = () => {
  return (
    <MainContainer>
      <Screen>
        <SearchBar>
          Good Afternoon Mao Mao,
          <SearchIconContainer src={SearchIcon} alt="Search icon" />
        </SearchBar>
        <TextSection>
          <HomeTitle>Meow Meow Porridge</HomeTitle>
          <div style={{ textAlign: 'center' }}>Text text text...</div>
        </TextSection>
        <ButtonsSection>
          <MenuButton>Facilities</MenuButton>
          <MenuButton>Calendar</MenuButton>
          <MenuButton>Laundry</MenuButton>
          <MenuButton>Supper</MenuButton>
        </ButtonsSection>
        <PostsSection>
          {"What's Happening..."}
          <FilterBar>
            <FilterBarComponent>All</FilterBarComponent>
            <FilterBarComponent>Official</FilterBarComponent>
            <FilterBarComponentMostRight>Friends</FilterBarComponentMostRight>
          </FilterBar>
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

        <BotNav>
          <StyledButton src={BotHomeIcon} />
          <StyledButton src={BotFacilitiesIcon} />
          <StyledButton src={BotCalendarIcon} />
          <StyledButton src={BotProfileIcon} />
        </BotNav>
      </Screen>
    </MainContainer>
  )
}

export default Screen1
