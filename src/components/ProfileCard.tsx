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
  Background: string
  ProfilePic: string
  Name: string
  Age: number
  Location: string
  Followers: number
  Likes: number
  Photos: number
}

const ProfileCard = (props: Props) => {
  return (
    <ProfileCardContainer>
      <ProfileCardBackground src={props.Background} />
      <ProfilePicContainer>
        <StyledImg src={props.ProfilePic} />
      </ProfilePicContainer>
      <NameAgeContainer>
        <text style={{ fontSize: 1.5 + 'rem', color: 'black', fontWeight: 'bold', fontFamily: 'Kumbh Sans' }}>
          {props.Name} <text style={{ color: 'grey' }}>{props.Age}</text>
        </text>
        <ProfileCardSmallWords fontSize="1rem">{props.Location}</ProfileCardSmallWords>
      </NameAgeContainer>
      <ProfileCardBottom>
        <ProfileCardWordsContainer>
          <ProfileCardBigWords>{props.Followers}k</ProfileCardBigWords>
          <ProfileCardSmallWords>Followers</ProfileCardSmallWords>
        </ProfileCardWordsContainer>
        <ProfileCardWordsContainer>
          <ProfileCardBigWords>{props.Likes}k</ProfileCardBigWords>
          <ProfileCardSmallWords>Likes</ProfileCardSmallWords>
        </ProfileCardWordsContainer>
        <ProfileCardWordsContainer>
          <ProfileCardBigWords>{props.Photos}k</ProfileCardBigWords>
          <ProfileCardSmallWords>Photos</ProfileCardSmallWords>
        </ProfileCardWordsContainer>
      </ProfileCardBottom>
    </ProfileCardContainer>
  )
}
export default ProfileCard
