import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Title from '../../../components/MarcusFEMentor/Title'
import BackButton from '../../../components/MarcusFEMentor/CountryPage/BackButton'
import CountryInfoBox from '../../../components/MarcusFEMentor/CountryPage/CountryInfoBox'
import FlagImage from '../../../components/MarcusFEMentor/CountryPage/FlagImage'
import { RootState } from '../../../store/types'
import { getContents } from '../../../store/MarcusFEMentor/actions'
import LoadingPage from './LoadingPage'

import { ThemeProvider } from 'styled-components'
import ThemedDiv from './styles/ThemedDiv.styled'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import { CountryPageContentDiv } from '../../../components/MarcusFEMentor/styles/CountryPage.styled'
import { Themes } from '../../../store/MarcusFEMentor/types'

const CountryPage = ({ countryName }: { countryName: string }) => {
  const dispatch = useDispatch()

  const { allCountries, themeMode } = useSelector((state: RootState) => state.marcusFEMentor)
  const country = allCountries?.find((cnt) => cnt.name.common === countryName)

  useEffect(() => {
    allCountries.length === 0 && dispatch(getContents())
  }, [])

  useEffect(() => {
    setTheme(themeMode)
  }, [themeMode])

  const [theme, setTheme] = useState<Themes>(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <ThemedDiv>
        {country ? (
          <>
            <Title text="Where in the world?" />
            <TitleContainerBuffer />
            <BackButton />
            <CountryPageContentDiv>
              <FlagImage country={country} />
              <CountryInfoBox country={country} />
            </CountryPageContentDiv>
          </>
        ) : (
          <LoadingPage location="country-page" />
        )}
      </ThemedDiv>
    </ThemeProvider>
  )
}

export default CountryPage
