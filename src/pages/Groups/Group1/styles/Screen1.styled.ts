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
export const SucessfullyDeletedEvent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 26px;
  position: relative;
  width: 96%;
  margin: 15px 2%;
  height: 160px;
  background: #f6ffed;
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
  position: relative;
`
export const StyledTick = styled.img`
  width: 28px;
  position: relative;
  left: 0px;
  top: 25px;
`
export const DeletedEventTextContainer = styled.p`
  width: 70%;
  height: 70%;
  position: relative;
  display: flex;
  justify-content: space-apart;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
`
export const DeletedEventText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  position: relative;
  color: rgba(0, 0, 0, 0.85);
`
export const DeletedEventName = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  position: relative;
  color: rgba(0, 0, 0, 0.65);
`
export const DeletedEventTime = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  position: relative;
  color: rgba(0, 0, 0, 0.65);
`
export const UndoIcon = styled.div`
  color: rgba(256, 256, 256, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-items: center;
  width: 50px;
  height: 25px;
  top: 100px;
  background: #468751;
  /* Polar Green/3 */
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  border-radius: 5px;
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
  height: 70px;
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
  height: 6vh;
  width: 48%;
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
  height: 6vh;
  width: 48%;
  font-size: 10px;
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
  font-size: 20px;
  top: 1vh;
  color: rgba(25, 25, 25, 1);
  position: relative;
`
export const StyledGreybox = styled.img`
  width: 28px;
  position: relative;
`
export const BookingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 16px 26px;
  position: relative;
  width: 96%;
  margin: 15px 2%;
  height: 160px;
  background: #ffffff;
  border: 1px solid #b7eb8f;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
export const BookingLocation = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  position: relative;
  color: rgba(0, 0, 0, 0.85);
`
export const BookingCCA = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  position: relative;
  color: rgba(0, 0, 0, 0.65);
`
export const BookingTiming = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  position: relative;
  color: rgba(88, 185, 148, 1);
`
export const StyledCCAIcon = styled.img`
  position: absolute;
  left: 5.86%;
  right: 80.56%;
  top: 17.65%;
  bottom: 17.65%;
  width: 80px;
  height: auto;
`
export const StyledEdit = styled.img`
  position: absolute;
  left: 75%;
  right: 19.14%;
  top: 35.29%;
  bottom: 36.76%;
  width: 30px;
  height: auto;
`
export const StyledDustbin = styled.img`
  position: absolute;
  left: 87.96%;
  right: 7.48%;
  top: 33.29%;
  bottom: 36.76%;
  width: 28px;
  height: auto;
`
