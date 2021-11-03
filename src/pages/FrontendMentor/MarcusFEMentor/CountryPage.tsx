import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Title from '../../../components/MarcusFEMentor/Title'
import BackButton from '../../../components/MarcusFEMentor/CountryPage/BackButton'
import CountryInfoBox from '../../../components/MarcusFEMentor/CountryPage/CountryInfoBox'
import FlagImage from '../../../components/MarcusFEMentor/CountryPage/FlagImage'
import ErrorPage from './ErrorPage'
import { RootState } from '../../../store/types'
import { getContents } from '../../../store/MarcusFEMentor/actions'

import setTheme from './styles/setTheme'
import { TitleContainerBuffer } from '../../../components/MarcusFEMentor/styles/Title.styled'
import { CountryPageContentDiv } from '../../../components/MarcusFEMentor/styles/CountryPage.styled'

type Props = {
  countryName: string
}

const CountryPage = (props: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // To bring user to the top of the page on first render
    window.scrollTo(0, 0)
  }, [])

  const { all_countries } = useSelector((state: RootState) => state.marcusFEMentor)
  const country = all_countries?.find((cnt) => cnt.name.common === props.countryName)

  useEffect(() => {
    !all_countries && dispatch(getContents())
  }, [])

  useEffect(() => {
    setTheme('theme-light'), []
  })

  return (
    <div id="toggle-theme">
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
        <ErrorPage />
      )}
    </div>
  )
}

export default CountryPage
