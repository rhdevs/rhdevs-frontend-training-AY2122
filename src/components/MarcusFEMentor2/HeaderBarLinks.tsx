import React from 'react'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  return (
    <HeaderBarLinksStyled margin={margin} column={column} responsive={responsive}>
      <BarLink responsive={responsive} onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_HOME)}>
        home
      </BarLink>
      <BarLink responsive={responsive} onClick={() => history.push(PATHS.MARCUS_FE_MENTOR_2_ABOUT)}>
        about
      </BarLink>
    </HeaderBarLinksStyled>
  )
}

export default HeaderBarLinks
