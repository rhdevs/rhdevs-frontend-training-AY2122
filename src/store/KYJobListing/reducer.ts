import { Reducer } from 'redux'
import { SkillsEnum, Job, ActionTypes, JOB_LISTING_ACTIONS, JobTagEnum, JobTypeEnum } from './types'

import photosnap from '../../assets/kyfrontendmentor/JobListing/photosnap.svg'
import manage from '../../assets/kyfrontendmentor/JobListing/manage.svg'
import account from '../../assets/kyfrontendmentor/JobListing/account.svg'
import myhome from '../../assets/kyfrontendmentor/JobListing/myhome.svg'
import loopStudios from '../../assets/kyfrontendmentor/JobListing/loop-studios.svg'
import faceit from '../../assets/kyfrontendmentor/JobListing/faceit.svg'
import shortly from '../../assets/kyfrontendmentor/JobListing/shortly.svg'
import insure from '../../assets/kyfrontendmentor/JobListing/insure.svg'
import eyecamCo from '../../assets/kyfrontendmentor/JobListing/eyecam-co.svg'
import airFilter from '../../assets/kyfrontendmentor/JobListing/the-air-filter-company.svg'

const initialState = {
  jobs: initJobs(),
  allJobs: initJobs(),
  filters: [],
  showFilter: false,
}

type State = {
  jobs: Job[]
  allJobs: Job[]
  filters: SkillsEnum[]
  showFilter: boolean
}

export const kyJobListing: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case JOB_LISTING_ACTIONS.ADD_FILTER:
    case JOB_LISTING_ACTIONS.REMOVE_FILTER:
    case JOB_LISTING_ACTIONS.CLEAR_ALL_FILTERS: {
      return { ...state, jobs: action.jobs, filters: action.filters, showFilter: action.showFilter }
    }
    default:
      return state
  }
}

function initJobs() {
  return [
    {
      key: 'photosnap',
      image: photosnap,
      company: 'Photosnap',
      jobTitle: 'Senior Frontend Developer',
      tags: [JobTagEnum.NEW, JobTagEnum.FEATURED],
      time: '1d',
      jobType: JobTypeEnum.FULL_TIME,
      location: 'USA only',
      skills: [SkillsEnum.FRONTEND, SkillsEnum.SENIOR, SkillsEnum.HTML, SkillsEnum.CSS, SkillsEnum.JAVASCRIPT],
      active: true,
    },
    {
      key: 'manage',
      image: manage,
      company: 'Manage',
      jobTitle: 'Fullstack Developer',
      tags: [JobTagEnum.NEW, JobTagEnum.FEATURED],
      time: '1d',
      jobType: JobTypeEnum.PART_TIME,
      location: 'Remote',
      skills: [SkillsEnum.FULLSTACK, SkillsEnum.MIDWEIGHT, SkillsEnum.PYTHON, SkillsEnum.REACT],
      active: true,
    },
    {
      key: 'account',
      image: account,
      company: 'Account',
      jobTitle: 'Junior Frontend Developer',
      tags: [JobTagEnum.NEW],
      time: '2d',
      jobType: JobTypeEnum.PART_TIME,
      location: 'USA only',
      skills: [SkillsEnum.FRONTEND, SkillsEnum.JUNIOR, SkillsEnum.REACT, SkillsEnum.SASS, SkillsEnum.JAVASCRIPT],
      active: false,
    },
    {
      key: 'myhome',
      image: myhome,
      company: 'MyHome',
      jobTitle: 'Junior Frontend Developer',
      tags: [],
      time: '5d',
      jobType: JobTypeEnum.CONTRACT,
      location: 'USA only',
      skills: [SkillsEnum.FRONTEND, SkillsEnum.JUNIOR, SkillsEnum.CSS, SkillsEnum.JAVASCRIPT],
      active: false,
    },
    {
      key: 'loopstudios',
      image: loopStudios,
      company: 'Loop Studios',
      jobTitle: 'Software Engineer',
      tags: [],
      time: '1w',
      jobType: JobTypeEnum.FULL_TIME,
      location: 'Worldwide',
      skills: [SkillsEnum.FULLSTACK, SkillsEnum.MIDWEIGHT, SkillsEnum.JAVASCRIPT, SkillsEnum.SASS, SkillsEnum.RUBY],
      active: false,
    },
    {
      key: 'faceit',
      image: faceit,
      company: 'FaceTt',
      jobTitle: 'Junior Backend Developer',
      tags: [],
      time: '2w',
      jobType: JobTypeEnum.FULL_TIME,
      location: 'UK only',
      skills: [SkillsEnum.BACKEND, SkillsEnum.JUNIOR, SkillsEnum.RUBY, SkillsEnum.ROR],
      active: false,
    },
    {
      key: 'shortly',
      image: shortly,
      company: 'Shortly',
      jobTitle: 'Junior Developer',
      tags: [],
      time: '2w',
      jobType: JobTypeEnum.FULL_TIME,
      location: 'Worldwide',
      skills: [SkillsEnum.FRONTEND, SkillsEnum.JUNIOR, SkillsEnum.HTML, SkillsEnum.SASS, SkillsEnum.JAVASCRIPT],
      active: false,
    },
    {
      key: 'insure',
      image: insure,
      company: 'Insure',
      jobTitle: 'Junior Frontend Developer',
      tags: [],
      time: '2w',
      jobType: JobTypeEnum.FULL_TIME,
      location: 'USA only',
      skills: [SkillsEnum.FRONTEND, SkillsEnum.JUNIOR, SkillsEnum.VUE, SkillsEnum.JAVASCRIPT, SkillsEnum.SASS],
      active: false,
    },
    {
      key: 'eyecamco',
      image: eyecamCo,
      company: 'Eyecam Co.',
      jobTitle: 'Software Engineer',
      tags: [],
      time: '3w',
      jobType: JobTypeEnum.FULL_TIME,
      location: 'USA only',
      skills: [SkillsEnum.FULLSTACK, SkillsEnum.MIDWEIGHT, SkillsEnum.JAVASCRIPT, SkillsEnum.DJANGO, SkillsEnum.PYTHON],
      active: false,
    },
    {
      key: 'airfilter',
      image: airFilter,
      company: 'Air Filter',
      jobTitle: 'Front-end Dev',
      tags: [],
      time: '1mo',
      jobType: JobTypeEnum.PART_TIME,
      location: 'Worldwide',
      skills: [SkillsEnum.FRONTEND, SkillsEnum.JUNIOR, SkillsEnum.REACT, SkillsEnum.SASS, SkillsEnum.JAVASCRIPT],
      active: false,
    },
  ]
}
