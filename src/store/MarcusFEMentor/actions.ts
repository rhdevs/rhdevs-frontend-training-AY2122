import { Dispatch, GetState } from '../types'
import { ActionTypes, COUNTRY_DATA_ACTIONS } from './types'
import { themeDark, themeLight } from './reducer'

export const getContents = () => (dispatch: Dispatch<ActionTypes>) => {
  const url = 'https://restcountries.com/v3.1/all'
  fetch(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({
        type: COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA,
        allCountries: data,
        responseOk: true,
      })
    })
    .catch((err) => alert(err))
}

export const switchMode = () => (dispatch: Dispatch<ActionTypes>, getState: GetState) => {
  const { themeMode } = getState().marcusFEMentor

  dispatch({
    type: COUNTRY_DATA_ACTIONS.SET_THEME,
    themeMode: themeMode.type === 'light' ? themeDark : themeLight,
  })
}
