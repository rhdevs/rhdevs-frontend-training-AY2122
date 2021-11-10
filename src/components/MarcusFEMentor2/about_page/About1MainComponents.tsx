import React from 'react'

import { HeaderBar } from '../Header'
import {
  About1ContentsDiv,
  About1LineAbovePara,
  About1Para,
  About1ParaDiv,
  About1Title,
} from './styles/About1MainComponents.styled'

export const About1MainContents = () => {
  return (
    <>
      <HeaderBar />
      <About1ContentsDiv>
        <About1Title>About</About1Title>
        <About1ParaDiv>
          <About1LineAbovePara />
          <About1Para>
            We help companies build dynamic teams made up of top global talent. Using our network of passionate
            professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best
            products and experiences. We’ll bring those teams to you.
          </About1Para>
        </About1ParaDiv>
      </About1ContentsDiv>
    </>
  )
}
