/* eslint-disable  @typescript-eslint/no-explicit-any */

/** Types */
type nativeName = {
  official: string
  common: string
}

type Name = {
  common: string
  official: string
  nativeName: Record<string, nativeName>
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
  cca2: string // country code
  languages: Record<string, string>
  [key: string]: any
}

export type Themes = {
  type: 'light' | 'dark'
  background: string
  titleBackground: string
  titleColor: string
  cardColor: string
  cardShadow: string
  inputColor: string
  textColor: string
}

export type SetCountries = {
  setCountries: React.Dispatch<React.SetStateAction<Country[] | undefined>>
}

/** Actions' types */
export enum COUNTRY_DATA_ACTIONS {
  GET_COUNTRIES_DATA = 'COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA',
  SET_THEME = 'COUNTRY_DATA_ACTIONS.SET_THEME',
}

/** Actions */
export type SetJson = {
  type: typeof COUNTRY_DATA_ACTIONS.GET_COUNTRIES_DATA
  allCountries: Country[]
  responseOk: boolean
}

export type SetTheme = {
  type: typeof COUNTRY_DATA_ACTIONS.SET_THEME
  themeMode: Themes
}

export type ActionTypes = SetJson | SetTheme
