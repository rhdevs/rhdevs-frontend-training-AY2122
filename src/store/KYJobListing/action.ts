import { Dispatch, GetState } from '../types'
import { ActionTypes, SkillsEnum, JOB_LISTING_ACTIONS } from './types'

export const AddFilter = (skill: SkillsEnum) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { jobs, filters } = getState().kyJobListing
  if (!filters.includes(skill)) {
    filters.push(skill)
  }
  let filteredJobs = jobs
  filters.forEach((selectedFilter) => {
    filteredJobs = filteredJobs.filter((job) => {
      return job.skills.includes(selectedFilter)
    })
  })
  dispatch({
    type: JOB_LISTING_ACTIONS.ADD_FILTER,
    jobs: filteredJobs,
    filters: filters,
    showFilter: true,
  })
}

export const RemoveFilter = (skill: SkillsEnum) => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { allJobs, filters } = getState().kyJobListing
  const index = filters.indexOf(skill)
  filters.splice(index, 1)
  let filteredJobs = allJobs
  filters.forEach((selectedFilter) => {
    filteredJobs = filteredJobs.filter((job) => {
      return job.skills.includes(selectedFilter)
    })
  })
  dispatch({
    type: JOB_LISTING_ACTIONS.REMOVE_FILTER,
    jobs: filteredJobs,
    filters: filters,
    showFilter: filters.length > 0 ? true : false,
  })
}

export const ClearAllFilters = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { allJobs } = getState().kyJobListing
  dispatch({
    type: JOB_LISTING_ACTIONS.CLEAR_ALL_FILTERS,
    jobs: allJobs,
    filters: [],
    showFilter: false,
  })
}
