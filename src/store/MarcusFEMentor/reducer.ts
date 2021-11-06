import { Reducer } from 'redux'

import { ActionTypes, Country, COUNTRY_DATA_ACTIONS, Themes } from './types'

export const themeDark: Themes = {
  type: 'dark',
  background: '#202c36',
  titleBackground: '#2b3844',
  titleColor: '#ffffff',
  cardColor: '#2b3844',
  cardShadow: '2px 2px 5px black',
  inputColor: '#2b3844',
  textColor: '#ffffff',
}

export const themeLight: Themes = {
  type: 'light',
  background: '#f2f2f2',
  titleBackground: '#ffffff',
  titleColor: '#111517',
  cardColor: '#ffffff',
  cardShadow: '2px 2px 5px gray',
  inputColor: '#ffffff',
  textColor: '#000000',
}

const d = new Date()
const h = d.getHours() // get hour of day

const initialState: State = {
  allCountries: [],
  responseOk: false,
  themeMode: 6 < h && h < 19 ? themeLight : themeDark, // switch on dark mode (on load) by default between 1900 and 0659
}

type State = {
  allCountries: Country[]
  responseOk: boolean
  themeMode: Themes
}

export const marcusFEMentor: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA:
      return { ...state, allCountries: action.allCountries, responseOk: action.responseOk }
    case COUNTRY_DATA_ACTIONS.SET_THEME:
      return { ...state, themeMode: action.themeMode }
    default:
      return state
  }
}
