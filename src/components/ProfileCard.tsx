import React from 'react'
import {
  NameAgeContainer,
  ProfileCardBackground,
  ProfileCardBigWords,
  ProfileCardBottom,
  ProfileCardContainer,
  ProfileCardSmallWords,
  ProfileCardWordsContainer,
  ProfilePicContainer,
  StyledImg,
} from './styles/ProfileCard.styled'

type Props = {
  background: string
  profilePic: string
  name: string
  age: number
  location: string
  followers: number
  likes: number
  photos: number
}

const ProfileCard = (props: Props) => {
  return (
    <ProfileCardContainer>
      <ProfileCardBackground src={props.background} />
      <ProfilePicContainer>
        <StyledImg src={props.profilePic} />
      </ProfilePicContainer>
      <NameAgeContainer>
        <text style={{ fontSize: 1.5 + 'rem', color: 'black', fontWeight: 'bold', fontFamily: 'Kumbh Sans' }}>
          {props.name} <text style={{ color: 'grey' }}>{props.age}</text>
        </text>
        <ProfileCardSmallWords fontSize="1rem">{props.location}</ProfileCardSmallWords>
      </NameAgeContainer>
      <ProfileCardBottom>
        <ProfileCardWordsContainer>
          <ProfileCardBigWords>{props.followers}k</ProfileCardBigWords>
          <ProfileCardSmallWords>Followers</ProfileCardSmallWords>
        </ProfileCardWordsContainer>
        <ProfileCardWordsContainer>
          <ProfileCardBigWords>{props.likes}k</ProfileCardBigWords>
          <ProfileCardSmallWords>Likes</ProfileCardSmallWords>
        </ProfileCardWordsContainer>
        <ProfileCardWordsContainer>
          <ProfileCardBigWords>{props.photos}k</ProfileCardBigWords>
          <ProfileCardSmallWords>Photos</ProfileCardSmallWords>
        </ProfileCardWordsContainer>
      </ProfileCardBottom>
    </ProfileCardContainer>
  )
}
export default ProfileCard
