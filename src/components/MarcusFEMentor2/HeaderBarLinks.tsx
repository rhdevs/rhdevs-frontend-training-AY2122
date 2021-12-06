import React from 'react'
import { useNavigate } from 'react-router-dom'

import { PATHS } from '../../routes/PATHS'
import { BarLink, HeaderBarLinksStyled } from './styles/GlobalComponents.styled'

const HeaderBarLinks = ({
  margin,
  column,
  responsive,
}: {
  margin?: string
  column?: boolean
  responsive?: boolean
}) => {
  const navigate = useNavigate()
  return (
    <HeaderBarLinksStyled margin={margin} column={column} responsive={responsive}>
      <BarLink responsive={responsive} onClick={() => navigate(PATHS.MARCUS_FE_MENTOR_2_HOME)}>
        home
      </BarLink>
      <BarLink responsive={responsive} onClick={() => navigate(PATHS.MARCUS_FE_MENTOR_2_ABOUT)}>
        about
      </BarLink>
    </HeaderBarLinksStyled>
  )
}

export default HeaderBarLinks
