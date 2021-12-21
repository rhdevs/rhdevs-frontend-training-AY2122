import React, { useEffect, useState } from 'react'
import raw from 'raw.macro'

import challenge1 from '../assets/CSSBattle/1_SimplySquare.png'
import challenge2 from '../assets/CSSBattle/2_Carrom.png'
import challenge3 from '../assets/CSSBattle/3_PushButton.png'
import challenge4 from '../assets/CSSBattle/4_UpsNDowns.png'
import challenge5 from '../assets/CSSBattle/5_AcidRain.png'
import challenge6 from '../assets/CSSBattle/6_MissingSlice.png'
import challenge7 from '../assets/CSSBattle/7_LeafyTrail.png'
import challenge8 from '../assets/CSSBattle/8_ForkingCrazy.png'
import challenge9 from '../assets/CSSBattle/9_Tesseract.png'
import challenge10 from '../assets/CSSBattle/10_CloakedSpirits.png'
import challenge11 from '../assets/CSSBattle/11_EyeOfSauron.png'
import challenge12 from '../assets/CSSBattle/12_WigglyMoustache.png'
import challenge36 from '../assets/CSSBattle/36_Interleaved.png'
import challenge93 from '../assets/CSSBattle/93_GreatWall.png'
import challenge95 from '../assets/CSSBattle/95_Pokeball.png'

import {
  BattleInfoContainer,
  BoldText,
  ErrorText,
  FinalImg,
  HeaderText,
  MainContainer,
  StyledFrame,
  StyledText,
  VisualContainer,
} from './styles/CSSBattle'

interface CSSBattleProps {
  name: string
  challengeName: CSSBattleChallenges
}

export enum CSSBattleChallenges {
  SIMPLY_SQUARE_1 = '1_SimplySquare',
  CARROM_2 = '2_Carrom',
  PUSH_BUTTON_3 = '3_PushButton',
  UPS_N_DOWNS_4 = '4_UpsNDowns',
  ACID_RAIN_5 = '5_AcidRain',
  MISSING_SLICE_6 = '6_MissingSlice',
  LEAFY_TRAIL_7 = '7_LeafyTrail',
  FORKING_CRAZY_8 = '8_ForkingCrazy',
  TESSERACT_9 = '9_Tesseract',
  CLOAKED_SPIRITS_10 = '10_CloakedSpirits',
  EYE_OF_SAURON_11 = '11_EyeOfSauron',
  WIGGLY_MOUSTACHE_12 = '12_WigglyMoustache',
  INTERLEAVED_36 = '36_Interleaved',
  GREAT_WALL_93 = '93_GreatWall',
  POKEBALL_95 = '95_Pokeball',
}

const CSSBattleSection = (props: CSSBattleProps) => {
  const [fileText, setFileText] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    const folderName = props.challengeName
    const fileName = props.name

    try {
      const content = raw(`../CSSBattle/${folderName}/${fileName}.html`)
      setFileText(content)
      if (!content) {
        setHasError(true)
      }
    } catch {
      setHasError(true)
    }

    switch (props.challengeName) {
      case CSSBattleChallenges.SIMPLY_SQUARE_1:
        setImage(challenge1)
        break
      case CSSBattleChallenges.CARROM_2:
        setImage(challenge2)
        break
      case CSSBattleChallenges.PUSH_BUTTON_3:
        setImage(challenge3)
        break
      case CSSBattleChallenges.UPS_N_DOWNS_4:
        setImage(challenge4)
        break
      case CSSBattleChallenges.ACID_RAIN_5:
        setImage(challenge5)
        break
      case CSSBattleChallenges.MISSING_SLICE_6:
        setImage(challenge6)
        break
      case CSSBattleChallenges.LEAFY_TRAIL_7:
        setImage(challenge7)
        break
      case CSSBattleChallenges.FORKING_CRAZY_8:
        setImage(challenge8)
        break
      case CSSBattleChallenges.TESSERACT_9:
        setImage(challenge9)
        break
      case CSSBattleChallenges.CLOAKED_SPIRITS_10:
        setImage(challenge10)
        break
      case CSSBattleChallenges.EYE_OF_SAURON_11:
        setImage(challenge11)
        break
      case CSSBattleChallenges.WIGGLY_MOUSTACHE_12:
        setImage(challenge12)
        break
      case CSSBattleChallenges.INTERLEAVED_36:
        setImage(challenge36)
        break
      case CSSBattleChallenges.GREAT_WALL_93:
        setImage(challenge93)
        break
      case CSSBattleChallenges.POKEBALL_95:
        setImage(challenge95)
        break
      default:
        break
    }
  }, [])

  return (
    <MainContainer>
      <HeaderText>
        <BoldText>Default:</BoldText> Image taken from{' '}
        <a href={`https://cssbattle.dev/play/${props.challengeName.split('_')[0]}`}>
          cssbattle #{props.challengeName.split('_')[0]}
        </a>
        <br />
        <BoldText>Hover:</BoldText> Image created by {props.name}
      </HeaderText>
      <BattleInfoContainer>
        <VisualContainer>
          <FinalImg src={image} alt="challenge photo taken from cssbattle site" />
          {!hasError && (
            <StyledFrame
              frameBorder="0"
              id={`frameId_${props.challengeName.split('_')[0]}`}
              srcDoc={`<html><head><style>body{overflow:hidden}</style></head><body>${fileText}</body></html>`}
            />
          )}
        </VisualContainer>
        {hasError ? (
          <ErrorText>No file found (file might be named wrongly)</ErrorText>
        ) : (
          <StyledText>{fileText}</StyledText>
        )}
      </BattleInfoContainer>
      <br />
    </MainContainer>
  )
}

export default CSSBattleSection
