import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { Country } from '../../store/MarcusFEMentor/types'
import { RootState } from '../../store/types'
import { StyledRegionsDropdown } from './styles/FiltersDiv.styled'

type Props = {
  setCountries: React.Dispatch<React.SetStateAction<Country[] | undefined>>
}

const RegionsDropdown = (props: Props) => {
  const { json } = useSelector((state: RootState) => state.marcusFEMentor)
  const setCountries = props.setCountries
  const regions = ['All', 'Africa', 'Asia', 'Europe', 'Americas', 'Oceania']
  const menu = (
    <Menu>
      {regions.map((region) => (
        <Menu.Item key={region}>
          <a
            onClick={() =>
              setCountries(region === 'All' ? json : json?.filter((country) => country.region === region) ?? [])
            }
          >
            {region}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <StyledRegionsDropdown overlay={menu}>
      <Button>
        Filter by Region
        <DownOutlined />
      </Button>
    </StyledRegionsDropdown>
  )
}

export default RegionsDropdown
