import React from 'react'

import {
  Page3ContentDiv,
  Page3StoriesDiv,
  Page3StoryDiv,
  Page3StoryImage,
  Page3StoryName,
  Page3StoryPara,
  Page3StoryTitle,
  Page3TitleEm,
  Page3TitleStyled,
} from './styles/Page3DeliveringComponents.styled'

import kadyPic from '../../assets/MarcusFEMentor2/avatar-kady.jpg'
import aiyshaPic from '../../assets/MarcusFEMentor2/avatar-aiysha.jpg'
import arthurPic from '../../assets/MarcusFEMentor2/avatar-arthur.jpg'

type successStory = {
  quote: string
  name: string
  title: string
  pic: string
}

const successStories: successStory[] = [
  {
    quote:
      'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
    name: 'Kady Baker',
    title: 'Product Manager at Bookmark',
    pic: kadyPic,
  },
  {
    quote:
      'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
    name: 'Aiysha Reese',
    title: 'Founder of Manage',
    pic: aiyshaPic,
  },
  {
    quote:
      'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
    name: 'Arthur Clarke',
    title: 'Co-founder of MyPhysio',
    pic: arthurPic,
  },
]

export const Page3Content = () => {
  return (
    <Page3ContentDiv>
      <Page3TitleStyled>
        Delivering real results for top companies. Some of our <Page3TitleEm>success stories.</Page3TitleEm>
      </Page3TitleStyled>
      <Page3StoriesDiv>
        {successStories.map((story) => (
          <Page3Story key={story.name} story={story} />
        ))}
      </Page3StoriesDiv>
    </Page3ContentDiv>
  )
}

export const Page3Story = ({ story }: { story: successStory }) => {
  return (
    <Page3StoryDiv>
      <Page3StoryPara>{`"${story.quote}"`}</Page3StoryPara>
      <Page3StoryName>{story.name}</Page3StoryName>
      <Page3StoryTitle>{story.title}</Page3StoryTitle>
      <Page3StoryImage src={story.pic} width="62px" height="62px" />
    </Page3StoryDiv>
  )
}
