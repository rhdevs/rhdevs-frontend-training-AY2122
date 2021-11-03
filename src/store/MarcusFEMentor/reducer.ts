import { Reducer } from 'redux'
import { ActionTypes, Country, COUNTRY_DATA_ACTIONS } from './types'

//set an initial state for your variable
const initialState = {
  all_countries: [],
  response_ok: false,
}

//declare your variable type
type State = {
  all_countries: Country[]
  response_ok: boolean
}

export const marcusFEMentor: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA:
      return { ...state, all_countries: action.all_countries, response_ok: true }
    default:
      return state
  }
}
