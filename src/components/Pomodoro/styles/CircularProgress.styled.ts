import styled from 'styled-components'

export const StyledSvg = styled.svg`
  position: absolute;
  z-index: 1000;
  transform: rotate(-90deg);
  @media (min-width: 601px) {
    width: 366px;
    height: 366px;
  }
  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`

export const StyledCircle = styled.circle<{ percentage: number }>`
  @media (min-width: 601px) {
    cx: 183;
    cy: 183;
    r: 168;
  }
  @media (max-width: 600px) {
    cx: 125;
    cy: 125;
    r: 120;
  }
  fill: transparent;
  stroke: #f87070;
  stroke-width: 11;
  stroke-linecap: round;
  @media (min-width: 601px) {
    stroke-dasharray: 1055;
    stroke-dashoffset: ${(props) => props.percentage && props.percentage * 1055};
  }
  @media (max-width: 600px) {
    stroke-dasharray: 753;
    stroke-dashoffset: ${(props) => props.percentage && props.percentage * 753};
  }
`
