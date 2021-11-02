import { Dispatch } from '../types'
import { ActionTypes, COUNTRY_DATA_ACTIONS } from './types'

export const getContents = () => async (dispatch: Dispatch<ActionTypes>) => {
  const url = `https://restcountries.com/v3.1/all`
  const response = await fetch(url)
  const json = await response.json()
  dispatch({
    type: COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA,
    json: json,
    response_ok: response.ok,
  })
}
