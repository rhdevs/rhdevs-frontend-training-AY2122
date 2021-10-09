import styled from 'styled-components'

export const TopNav = styled.div`
  width: 100%;
  z-index: 5;
  height: 7vh;
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  row-gap: 50px;
  font-size: 28px;
  display: flex;
  justify-content: safe-start;
  align-items: center;
  position: fixed;
  background: #ffffff;
`
export const SucessfullyDeletedEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 26px;
  position: relative;
  width: 600px;
  margin: 15px 2%;
  height: 160px;
  background: #f6ffed;
  /* Polar Green/3 */
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
export const Header = styled.h1`
  left: 20vh;
  position: absolute;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
`
export const BotNav = styled.div`
  width: 100%;
  z-index: 5;
  height: 7vh;
  padding: 1em;
  font-size: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background: #ffffff;
  z-index: 800;
  overflow: hidden;
  bottom: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const StyledButton = styled.img`
  width: 35px;
  height: auto;
`
export const StyledTick = styled.img`
  width: 28px;
  position: absolute;
  left: 30px;
  top: 25px;
`
export const DeletedEventText = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 22px;
  position: absolute;
  left: 150px;
  color: rgba(0, 0, 0, 0.85);
`
export const EventName = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 110px;
  position: absolute;
  left: 150px;
  color: rgba(0, 0, 0, 0.65);
`
export const EventTime = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 200px;
  position: absolute;
  left: 150px;
  color: rgba(0, 0, 0, 0.65);
`
export const UndoIcon = styled.div<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  color: rgba(256, 256, 256, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  align-items: center;
  margin: 15px 10%;
  width: 50px;
  height: 25px;
  right: 22px;
  bottom: 10px;
  background: #468751;
  /* Polar Green/3 */
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  border-radius: 5px;
`
export const CentreNav = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  height: 84%;
  width: 100%;
  top: 84px;
  display: flex;
  justify-content: safe-start;
  gap: 0px;
  align-items: center;
  position: absolute;
  background: white;
`
export const OptionsBoxes = styled.div`
  display: inline-block;
  height: 70px;
  padding: 0;
  margin: 5px;
  width: 595px;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: white;
`
export const GreyBoxDelete = styled.div`
  height: 6vh;
  width: 200px;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: #cecece;
  border-radius: 10px;
`
export const GreyBoxSort = styled.div`
  width: 100%;
  height: 6vh;
  width: 200px;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: #cecece;
  border-radius: 10px;
`
export const GreyBoxText = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  height: 0vh;
  top: 10px;
  line-height: 0px;
  color: rgba(25, 25, 25, 1);
  justify-content: space-between;
  position: relative;
  align-items: stretch;
`
export const StyledGreybox = styled.img`
  width: 28px;
  position: relative;
`
export const Booking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 26px;
  position: relative;
  width: 600px;
  margin: 15px 2%;
  height: 160px;
  background: #ffffff;
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
export const BookingLocation = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 22px;
  position: absolute;
  left: 150px;
  color: rgba(0, 0, 0, 0.85);
`
export const BookingCCA = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 110px;
  position: absolute;
  left: 150px;
  color: rgba(0, 0, 0, 0.65);
`
export const BookingTiming = styled.p<{ fontSize?: string }>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 200px;
  position: absolute;
  left: 150px;
  color: rgba(88, 185, 148, 1);
`
export const StyledCCAIcon = styled.img`
  position: absolute;
  left: 5.86%;
  right: 80.56%;
  top: 17.65%;
  bottom: 17.65%;
  width: 100px;
  height: auto;
`
export const StyledEdit = styled.img`
  position: absolute;
  left: 75%;
  right: 19.14%;
  top: 35.29%;
  bottom: 36.76%;
  width: 40px;
  height: auto;
`
export const StyledDustbin = styled.img`
  position: absolute;
  left: 87.96%;
  right: 7.48%;
  top: 33.29%;
  bottom: 36.76%;
  width: 38px;
  height: auto;
`
