import styled from 'styled-components'
import bgbtm from '../images/bg-bottom.svg'
import bgtop from '../images/bg-top.svg'
import { Switch } from 'antd'

export const MainBox = styled.div`
  width: 100%;
  background: url(${bgbtm}), url(${bgtop});
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-color: rgb(247, 247, 255);
`
export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
`
export const Minibox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: justify;
  padding: 10px;
  column-gap: 20px;
  font-size: 30px;
`
export const Pricing = styled.div`
  text-align: center;
  margin: 1rem;
  font-size: 28px;
  font-weight: 700;
  color: rgb(110, 114, 143);
  font-family: 'Montserrat';
`
export const ToggleBetween = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: 'Montserrat';
  word-spacing: 14px;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: safe center;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

export const SwitchStyle1 = styled(Switch)`
  background-image: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  box-shadow: none;
  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: none;
  }
  :hover {
    color: #ffffff !important;
    background-image: linear-gradient(to right, hsl(236, 82%, 89%), hsl(237, 73%, 74%));
  }
`

export const Switchfail = styled(Switch)`
  width: 60px;
  height: 30px;
  .ant-switch-handle {
    width: 25px;
    height: 25px;
  }
  .ant-switch-checked .ant-switch-handle {
    left: calc(100% - 25px - 2px) !important;
  }
  .ant-switch:not(.ant-switch-disabled):active .ant-switch-handle::before {
    right: -50% !important;
    left: 0 !important;
  }
  .ant-switch:not(.ant-switch-disabled):active.ant-switch-checked .ant-switch-handle::before {
    right: 0 !important;
    left: -50% !important;
  }
  .ant-switch-handle::before {
    border-radius: 14px;
  }
`
