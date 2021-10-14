import styled from 'styled-components'

export const MainContainer = styled.div`
  font-size: 3vh;
  border: 1px black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rbga(224, 101, 83, 0.86);
`

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rbga(224, 101, 83, 0.86);
`

export const SearchBar = styled.div`
  top: 0;
  height: 10vh;
  width: 100%;
  border: 1px solid green;
  border-radius: 0 0 15px 15px;
  background-color: #468751;
  display: inline-block;
  padding-left: 5%;
  padding-right: 5%;
  line-height: 10vh;
`

export const TextSection = styled.div`
  height: 10vh;
  background-color: rbga(224, 101, 83, 0.86);
`

export const HomeTitle = styled.div`
  font-size: 3vh;
  text-align: center;
`

export const ButtonsSection = styled.div`
  height: auto;
  width: 100%;
  border: 1px solid #468751;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: scroll;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const PostsSection = styled.div`
  border: 1px solid #468751;
`

export const FilterBar = styled.div`
  border: 1px solid #468751;
  border-radius: 15px 15px 15px 15px;
  display: flex;
  justify-contents: center;
`

export const FilterBarComponent = styled.div`
  flex: auto;
  width: 30vw;
  text-align: center;
  border-right: 1px solid #468751;
  &:hover {
    background-color: #468751;
  }
`

export const FilterBarComponentMostRight = styled.div`
  flex: auto;
  width: 30vw;
  text-align: center;
  &:hover {
    background-color: #468751;
  }
`

export const Post = styled.div`
  display: flex;
  width: 90%;
  height: 20vh;
  border-radius: 30px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 10px;
`

export const ProfilePicture = styled.img`
  max-width: 400px;
  width: 8vh;
  height: 8vh;
  object-fit: fit;
  margin-top: 2vw;
  margin-left: 1vw;
  border-radius: 50%;
  border: 2px solid green;
`
export const PostTitle = styled.div`
  width: 80%;
  font-size: 3vh;
  color: green;
  margin-left: 2vw;
`

export const AuthorNameText = styled.div`
  font-size: 1.5vh;
  color: grey;
  margin-top: -0.8vh;
`

export const PostMessage = styled.div`
  background-color: rgba(0, 255, 0, 0.05);
  font-size: 1.7vh;
  border: 2px solid green;
  border-radius: 10px;
  max-height: 400px;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 5px;
`

export const BottomNavBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8vh;
  text-align: center;
  background-color: #468751;
  border-radius: 15px 15px 0 0;
`
export const SearchIconContainer = styled.img`
  width: 3%;
  height: 100%;
  vertical-align: middle;
  float: right;
`

export const MenuButton = styled.div`
  height: 60px;
  line-height: 60px;
  width: 120px;
  border: 1px solid #468751;
  margin: 3px 30px 0px 30px;
  &:hover {
    background-color: #468751;
  }
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-left: 3px;
  padding-right: 3px;


  export const BotNav = styled.div`
width: 100 %;
z - index: 5;
height: 7vh;
padding: 1em;
font - size: 28px;
display: flex;
justify - content: space - around;
align - items: center;
position: fixed;
background: #ffffff;
z - index: 800;
bottom: 0;
filter: drop - shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const StyledButton = styled.img`
width: 35px;
height: auto;
position: relative;