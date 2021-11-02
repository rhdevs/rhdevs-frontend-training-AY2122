import { Reducer } from 'redux'
import { ActionTypes, Country, COUNTRY_DATA_ACTIONS } from './types'

//set an initial state for your variable
const initialState = {
  json: [],
  response_ok: false,
}

//declare your variable type
type State = {
  json: Country[]
  response_ok: boolean
}

export const marcusFEMentor: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA:
      return { ...state, json: action.json, response_ok: true }
    default:
      return state
  }
}
