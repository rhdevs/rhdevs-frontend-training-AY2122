/** Types */
export type Job = {
  key: string
  image: string
  company: string
  jobTitle: string
  tags: JobTagEnum[]
  time: string
  jobType: JobTypeEnum
  location: string
  skills: SkillsEnum[]
  active: boolean
}

export enum JobTagEnum {
  NEW = 'NEW!',
  FEATURED = 'FEATURED',
}

export enum JobTypeEnum {
  FULL_TIME = 'Full Time',
  PART_TIME = 'Part Time',
  CONTRACT = 'Contract',
}

export enum SkillsEnum {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  FULLSTACK = 'Fullstack',
  SENIOR = 'Senior',
  JUNIOR = 'Junior',
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'Javascript',
  MIDWEIGHT = 'Midweight',
  PYTHON = 'Python',
  REACT = 'React',
  SASS = 'Sass',
  RUBY = 'Ruby',
  ROR = 'RoR',
  VUE = 'Vue',
  DJANGO = 'Django',
}

/** Actions' types */
export enum JOB_LISTING_ACTIONS {
  ADD_FILTER = 'JOB_LISTING_ACTIONS.ADD_FILTER',
  REMOVE_FILTER = 'JOB_LISTING_ACTIONS.REMOVE_FILTER',
  CLEAR_ALL_FILTERS = 'JOB_LISTING_ACTIONS.CLEAR_ALL_FILTERS',
}

/** Actions */
type AddFilter = {
  type: typeof JOB_LISTING_ACTIONS.ADD_FILTER
  jobs: Job[]
  filters: SkillsEnum[]
  showFilter: boolean
}

type RemoveFilter = {
  type: typeof JOB_LISTING_ACTIONS.REMOVE_FILTER
  jobs: Job[]
  filters: SkillsEnum[]
  showFilter: boolean
}

type ClearAllFilters = {
  type: typeof JOB_LISTING_ACTIONS.CLEAR_ALL_FILTERS
  jobs: Job[]
  filters: SkillsEnum[]
  showFilter: boolean
}

export type ActionTypes = AddFilter | RemoveFilter | ClearAllFilters
