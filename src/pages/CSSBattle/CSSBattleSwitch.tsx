import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CSSBattleSection, { CSSBattleChallenges } from '../../components/CSSBattleSection'
import PageHeader from '../../components/PageHeader'

import { MembersSection, MembersSectionHeader } from '../LandingPage/styles/LandingPage.styled'

const CSSBattleSwitch = () => {
  const params = useParams<'name' | 'challenges'>()
  const [challenges, setChallenges] = useState<string[]>(params.challenges?.split(',') ?? [])

  useEffect(() => {
    const battle1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    challenges?.shift()
    setChallenges(battle1.concat(challenges))
  }, [])

  return (
    <MembersSection>
      <PageHeader
        title={`CSS Battles by ${params.name}`}
        description={
          <>
            {'css practices, challenges taken from '}
            <a target="_blank" rel="noopener noreferrer" href={'https://cssbattle.dev'}>
              cssbattle.dev
            </a>
          </>
        }
      />
      <MembersSectionHeader>Attempts</MembersSectionHeader>
      {challenges?.map((challengeNumber, index) => {
        console.log(challengeNumber)
        let challengeName = CSSBattleChallenges.SIMPLY_SQUARE_1
        switch (challengeNumber) {
          case '1':
            challengeName = CSSBattleChallenges.SIMPLY_SQUARE_1
            break
          case '2':
            challengeName = CSSBattleChallenges.CARROM_2
            break
          case '3':
            challengeName = CSSBattleChallenges.PUSH_BUTTON_3
            break
          case '4':
            challengeName = CSSBattleChallenges.UPS_N_DOWNS_4
            break
          case '5':
            challengeName = CSSBattleChallenges.ACID_RAIN_5
            break
          case '6':
            challengeName = CSSBattleChallenges.MISSING_SLICE_6
            break
          case '7':
            challengeName = CSSBattleChallenges.LEAFY_TRAIL_7
            break
          case '8':
            challengeName = CSSBattleChallenges.FORKING_CRAZY_8
            break
          case '9':
            challengeName = CSSBattleChallenges.TESSERACT_9
            break
          case '10':
            challengeName = CSSBattleChallenges.CLOAKED_SPIRITS_10
            break
          case '11':
            challengeName = CSSBattleChallenges.EYE_OF_SAURON_11
            break
          case '12':
            challengeName = CSSBattleChallenges.WIGGLY_MOUSTACHE_12
            break
          case '36':
            challengeName = CSSBattleChallenges.INTERLEAVED_36
            break
          case '93':
            challengeName = CSSBattleChallenges.GREAT_WALL_93
            break
          case '95':
            challengeName = CSSBattleChallenges.POKEBALL_95
            break
          default:
            break
        }
        return (
          <div key={challengeNumber}>
            <CSSBattleSection name={params.name ?? ''} challengeName={challengeName} />
            {index !== challenges.length - 1 && <hr />}
          </div>
        )
      })}
    </MembersSection>
  )
}

export default CSSBattleSwitch
