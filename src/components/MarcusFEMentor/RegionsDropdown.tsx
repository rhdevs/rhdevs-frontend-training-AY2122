import React from 'react'
import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { RegionsDropdownStyle } from './styles/FiltersDiv.styled'

const RegionsDropdown = () => {
  const regions = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']
  const menu = (
    <Menu>
      {regions.map((region) => (
        <Menu.Item key={region}>
          <a>{region}</a>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <RegionsDropdownStyle>
      <Dropdown overlay={menu}>
        <Button>
          Filter by Region
          <DownOutlined />
        </Button>
      </Dropdown>
    </RegionsDropdownStyle>
  )
}

export default RegionsDropdown
