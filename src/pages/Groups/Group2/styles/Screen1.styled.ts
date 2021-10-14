import styled from 'styled-components'

export const MainContainer = styled.div`
  font-size: 3vh;
  border: 1px black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
`

export const SearchBar = styled.div`
  top: 0;
  height: 10vh;
  border: 1px solid green;
  border-radius: 0 0 15px 15px;
  background-color: #7fff00;
  display: flex;
  flex-direction: row;
`

export const SearchButton = styled.div`
  float: right;
  background-color: #0000ff;
`

export const TextSection = styled.div`
  height: 10vh;
  background-color: lightblue;
  border: 1px solid green;
`

export const Title = styled.div`
  font-size: 3vh;
  text-align: center;
`

export const ButtonsSection = styled.div`
  height: 10vh;
  width: 100%;
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`

export const PostsSection = styled.div`
  border: 1px solid green;
`

export const FilterBar = styled.div`
  text-align: center;
  background-color: #7fff00;
  border: 1px solid green;
  border-radius: 15px 15px 15px 15px;
`
export const Post = styled.div`
  display: flex;
  width: 90%;
  height: 20vh;
  border: 1px solid green;
  border-radius: 30px;
  margin: auto;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  margin-top: -10px;
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
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 10vh;
  text-align: center;
  border: 1px solid red;
`
export const SearchIconContainer = styled.img`
  width: auto;
`
export const MenuButton = styled.div`
  height: 60px;
  width: 120px;
  border: 1px solid #468751;
  margin-left: 30px;
  margin-right: 30px;
`
