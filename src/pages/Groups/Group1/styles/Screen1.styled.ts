import styled from 'styled-components'

export const TopNav = styled.div`
  width: 100%;
  height: 7vh;
  padding: 1em;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background: #ffffff;
`
export const SucessfullyDeletedEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 26px;
  position: absolute;
  width: 600px;
  margin: 15px 2%;
  height: 160px;
  left: 22px;
  top: 70px;
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
  width: 28px;
  max-height: 28px;
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
export const CenterNav = styled.div`
  width: 100%;
  height: 7vh;
  padding: 1em;
  width: 595px;
  left: 40px;
  top: 260px;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background: #ff0000;
`
