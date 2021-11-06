import scissorsIcon from '../../assets/RockPaperScissors/icon-scissors.svg'
import spockIcon from '../../assets/RockPaperScissors/icon-spock.svg'
import paperIcon from '../../assets/RockPaperScissors/icon-paper.svg'
import lizardIcon from '../../assets/RockPaperScissors/icon-lizard.svg'
import rockIcon from '../../assets/RockPaperScissors/icon-rock.svg'

export type Option = { name: string; src: string | undefined; color: string }

export const optionList = [
  { name: 'scissors', src: scissorsIcon, color: `hsl(39, 89%, 49%)` },
  { name: 'spock', src: spockIcon, color: `hsl(189, 59%, 53%)` },
  { name: 'paper', src: paperIcon, color: `hsl(230, 89%, 62%)` },
  { name: 'lizard', src: lizardIcon, color: `hsl(261, 73%, 60%)` },
  { name: 'rock', src: rockIcon, color: `hsl(349, 71%, 52%)` },
]
export const getCPUSelection = (setComSelection: (name: string) => void) => {
  const choice = Math.floor(Math.random() * 5)
  switch (choice) {
    case 0:
      setComSelection(optionList[0].name)
      return
    case 1:
      setComSelection(optionList[1].name)
      return
    case 2:
      setComSelection(optionList[2].name)
      return
    case 3:
      setComSelection(optionList[3].name)
      return
    case 4:
      setComSelection(optionList[4].name)
      return
  }
  //return statement to handle linter error
  return ''
}

export const getResult = (current: string, com: string) => {
  if (current === com) {
    return 'draw'
  }
  if (current === 'paper' && com === 'rock') {
    return 'win'
  }
  if (current === 'rock' && com === 'scissors') {
    return 'win'
  }
  if (current === 'scissors' && com === 'paper') {
    return 'win'
  }
  if (current === 'rock' && com === 'lizard') {
    return 'win'
  }
  if (current === 'lizard' && com === 'spock') {
    return 'win'
  }
  if (current === 'spock' && com === 'scissors') {
    return 'win'
  }
  if (current === 'scissors' && com === 'lizard') {
    return 'win'
  }
  if (current === 'paper' && com === 'spock') {
    return 'win'
  }
  if (current === 'lizard' && com === 'paper') {
    return 'win'
  }
  if (current === 'spock' && com === 'rock') {
    return 'win'
  }
  if (getResult(com, current) === 'win') {
    return 'lose'
  }
  return 'draw'
}

export const getResultText = (result: string) => {
  if (result === 'win') {
    return 'YOU WIN'
  }
  if (result === 'draw') {
    return 'DRAW'
  }
  if (result === 'lose') {
    return 'YOU LOSE'
  }
}
