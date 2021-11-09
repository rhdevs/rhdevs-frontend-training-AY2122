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
import { TileLayer, Marker, Tooltip } from 'react-leaflet'
interface RequestData {
  location?: Location
  ip: string
  isp: string
}
interface Location {
  city: string
  country: string
  region: string
  lat: number
  lng: number
  postalCode: string
  timezone: string
}

const SkIPAddress = () => {
  const [Input, setInput] = useState('')
  const [Info, setInfo] = useState<RequestData>({ ip: '', isp: '' })

  const url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_StGwLfCoqwr9pCBTJ7lw0vOT5Xubd&ipAddress='
  const handleSubmit = () => {
    const newURL = url + Input
    console.log(newURL)
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
    console.log(Info)
  }, [Info])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <>
      <Background />
      {Info.location && (
        <MyMap height={'500px'} center={[Info.location?.lat, Info.location?.lng]} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={Info.location ? [Info.location?.lat, Info.location?.lng] : [0, 0]} />
        </MyMap>
      )}
      <MainContainer>
        <StyledHeader>IP Address Tracker</StyledHeader>
        <InputContainer>
          <StyledInput value={Input} placeholder="Input IP Address" onChange={(e) => handleInputChange(e)} />
          <StyledButton onClick={() => handleSubmit()}>{'>'}</StyledButton>
        </InputContainer>
        <DisplayContainer>
          <ContentBox header="IP ADDRESS" body={Info.ip} />
          <BoxSeparator />
          <ContentBox
            header="LOCATION"
            body={
              Info.location ? Info.location.city + ', ' + Info.location.country + ' ' + Info.location.postalCode : ''
            }
          />
          <BoxSeparator />
          <ContentBox header="TIMEZONE" body={Info.location ? 'UTC' + Info.location.timezone : ''} />
          <BoxSeparator />
          <ContentBox header="ISP" body={Info.isp} />
        </DisplayContainer>
      </MainContainer>
    </>
  )
}

export default SkIPAddress
