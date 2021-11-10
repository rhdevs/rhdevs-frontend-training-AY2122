import React, { ChangeEvent, useEffect, useState } from 'react'

import Background from '../../../components/SkIPAddress/Background'
import ContentBox from '../../../components/SkIPAddress/ContentBox'
import {
  BoxSeparator,
  DisplayContainer,
  InputContainer,
  MainContainer,
  MyMap,
  StyledButton,
  StyledHeader,
  StyledInput,
} from './styles/SkIPAddress.styled'
import { TileLayer, Marker, useMap } from 'react-leaflet'

type RequestData = {
  location?: Location
  ip: string
  isp: string
}
type Location = {
  city: string
  country: string
  region: string
  lat: number
  lng: number
  postalCode: string
  timezone: string
}

const SkIPAddress = () => {
  const [input, setInput] = useState('')
  const [info, setInfo] = useState<RequestData>({ ip: '', isp: '' })

  const url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_StGwLfCoqwr9pCBTJ7lw0vOT5Xubd&ipAddress='
  const handleSubmit = () => {
    const newURL = url + input
    fetch(newURL, {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setInfo({ location: data.location, ip: data.ip, isp: data.isp })
      })
      .catch((err) => alert(err))
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const ChangeView = () => {
    const map = useMap()
    if (info.location) {
      map.setView([info.location.lat, info.location.lng], 15)
    }
    return null
  }

  return (
    <>
      <Background />
      {info.location && (
        <MyMap center={[info.location.lat, info.location.lng]} zoom={15}>
          <ChangeView />
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[info.location.lat, info.location.lng]} />
        </MyMap>
      )}
      <MainContainer>
        <StyledHeader>IP Address Tracker</StyledHeader>
        <InputContainer>
          <StyledInput
            value={input}
            placeholder="Search for any IP address or domain"
            onChange={(e) => handleInputChange(e)}
          />
          <StyledButton onClick={() => handleSubmit()}>{'>'}</StyledButton>
        </InputContainer>
        <DisplayContainer>
          <ContentBox header="IP ADDRESS" body={info.ip} />
          <BoxSeparator />
          <ContentBox
            header="LOCATION"
            body={
              info.location ? info.location.city + ', ' + info.location.country + ' ' + info.location.postalCode : ''
            }
          />
          <BoxSeparator />
          <ContentBox header="TIMEZONE" body={info.location ? 'UTC ' + info.location.timezone : ''} />
          <BoxSeparator />
          <ContentBox header="ISP" body={info.isp} />
        </DisplayContainer>
      </MainContainer>
    </>
  )
}

export default SkIPAddress
