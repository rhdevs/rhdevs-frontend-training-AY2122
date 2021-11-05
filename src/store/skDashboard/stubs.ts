import FacebookIcon from '../../../assets/skDashboard/icon-facebook.svg'
import TwitterIcon from '../../../assets/skDashboard/icon-twitter.svg'
import InstagramIcon from '../../../assets/skDashboard/icon-instagram.svg'
import YoutubeIcon from '../../../assets/skDashboard/icon-youtube.svg'

export const mediaCardsList = [
  {
    icon: FacebookIcon,
    names: '@shaokiat',
    followerCount: '1987',
    increase: true,
    change: '12',
    borderColor: 'hsl(208, 92%, 53%)',
  },
  {
    icon: TwitterIcon,
    names: '@shaokiat',
    followerCount: '1044',
    increase: true,
    change: '99',
    borderColor: 'hsl(203, 89%, 53%)',
  },
  {
    icon: InstagramIcon,
    names: '@shaokiat',
    followerCount: '11k',
    increase: true,
    change: '1000',
    borderColor: 'linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
  },
  {
    icon: YoutubeIcon,
    names: '@shaokiat',
    followerCount: '8239',
    increase: false,
    change: '144',
    borderColor: 'hsl(348, 97%, 39%)',
  },
]

export const overviewCardsList = [
  { icon: FacebookIcon, statsName: 'Pageviews', stats: '87', increase: true, change: '3' },
  { icon: FacebookIcon, statsName: 'Likes', stats: '52', increase: false, change: '2' },
  { icon: InstagramIcon, statsName: 'Likes', stats: '5462', increase: true, change: '2257' },
  { icon: InstagramIcon, statsName: 'Profile Views', stats: '52k', increase: true, change: '1375' },
  { icon: TwitterIcon, statsName: 'Retweets', stats: '117', increase: true, change: '303' },
  { icon: TwitterIcon, statsName: 'Likes', stats: '507', increase: true, change: '553' },
  { icon: YoutubeIcon, statsName: 'Likes', stats: '107', increase: false, change: '19' },
  { icon: YoutubeIcon, statsName: 'Total Likes', stats: '1407', increase: false, change: '12' },
]
