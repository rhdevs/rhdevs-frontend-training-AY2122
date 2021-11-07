import React from 'react'
import { useSelector } from 'react-redux'

import { SetCountries } from '../../store/MarcusFEMentor/types'
import { RootState } from '../../store/types'
import { Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { StyledRegionsDropdown } from './styles/FiltersDiv.styled'

const RegionsDropdown = ({ setCountries }: SetCountries) => {
  const { allCountries } = useSelector((state: RootState) => state.marcusFEMentor)
  const regions = ['All', 'Africa', 'Asia', 'Europe', 'Americas', 'Oceania']
  const menu = (
    <Menu>
      {regions.map((region) => (
        <Menu.Item key={region}>
          <a
            onClick={() =>
              setCountries(
                region === 'All' ? allCountries : allCountries?.filter((country) => country.region === region) ?? [],
              )
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
