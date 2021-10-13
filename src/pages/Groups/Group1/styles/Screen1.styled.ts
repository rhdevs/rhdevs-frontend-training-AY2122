import styled from 'styled-components'
export const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
export const TopNav = styled.div`
  width: 100%;
  z-index: 5;
  height: 7vh;
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  row-gap: 50px;
  font-size: 28px;
  align-items: center;
  position: fixed;
  background: #ffffff;
`
export const SucessfullyDeletedEventContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  width: 96%;
  height: 150px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
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
  bottom: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const StyledButton = styled.img`
  width: 35px;
  height: auto;
  position: relative;
`
export const StyledTick = styled.img`
  width: 28px;
  top: 4px;
  position: relative;
`
export const DeletedEventTextContainer = styled.p`
  width: 70%;
  height: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  left: 2vw;
  color: rgba(0, 0, 0, 0.85);
`
export const DeletedEventText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: calc(16px + 0.3vw);
  position: relative;
  color: rgba(0, 0, 0, 0.85);
`
export const DeletedEventName = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: calc(13px + 0.3vw);
  position: relative;
  color: rgba(0, 0, 0, 0.65);
`
export const DeletedEventTime = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: calc(13px + 0.3vw);
  color: rgba(0, 0, 0, 0.65);
`
export const UndoIcon = styled.div`
  color: rgba(256, 256, 256, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-items: center;
  width: 45px;
  height: 28px;
  top: 95px;
  background: #468751;
  /* Polar Green/3 */
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  border-radius: 15px;
`
export const CenterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 84px;
  display: flex;
  justify-content: safe-start;
  align-items: center;
  position: relative;
  background: white;
`
export const OptionsBoxesContainer = styled.div`
  height: 40px;
  margin: 5px;
  width: 96%;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: white;
`
export const GreyBoxDelete = styled.div`
  height: 25px;
  width: 55%;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: top;
  position: relative;
  background: #cecece;
  border-radius: 10px;
`
export const GreyBoxSort = styled.div`
  height: 25px;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: top;
  position: relative;
  background: #cecece;
  border-radius: 10px;
`
export const GreyBoxText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: calc(15px + 0.4vw);
  color: rgba(25, 25, 25, 1);
  position: relative;
`
export const StyledGreybox = styled.img`
  width: 15px;
  height: auto;
  position: relative;
`
export const BookingCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 96%;
  height: 160px;
  gap: 14px;
  background: #ffffff;
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`
export const BookingCardTextContainer = styled.p`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  left: 2vw;
  color: rgba(0, 0, 0, 0.85);
`
export const BookingLocation = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: calc(18px + 0.4vw);
  position: relative;
  color: rgba(0, 0, 0, 0.85);
`
export const BookingCCA = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: calc(15px + 0.4vw);
  position: relative;
  color: rgba(0, 0, 0, 0.65);
`
export const BookingTiming = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: calc(15px + 0.4vw);
  position: relative;
  color: rgba(88, 185, 148, 1);
`
export const StyledCCAIcon = styled.img`
  position: relative;
  width: 80px;
  height: auto;
`
export const StyledEdit = styled.img`
  position: relative;
  width: 30px;
  height: auto;
`
export const StyledDustbin = styled.img`
  position: relative;
  width: 28px;
  height: auto;
`
