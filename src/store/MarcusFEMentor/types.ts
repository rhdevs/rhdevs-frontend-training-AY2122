/** Types */
//create your own type!
type Name = {
  common: string
  [key: string]: any
}

type Flags = {
  png: string
  svg: string
}

export type Country = {
  name: Name
  flags: Flags
  population: number
  region: string
  capital?: string[]
  cca2: string
  [key: string]: any
}

/** Actions' types */
export enum COUNTRY_DATA_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  GET_COUNTRIES_DATA = 'COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA',
}

/** Actions */

export type SetJson = {
  type: typeof COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA
  json: Country[]
  response_ok: boolean
}

export type ActionTypes = SetJson
