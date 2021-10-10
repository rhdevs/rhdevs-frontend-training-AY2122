import styled from 'styled-components'

export const MainContainer = styled.div`
  font-size: 1.5rem;
  border: 1px black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 100vh;
`

export const SearchBar = styled.div`
  top: 0;
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 70px;
  border: 1px solid green;
  border-radius: 0 0 15px 15px;
  background-color: lightgreen;
`

export const SearchButton = styled.div`
  position: fixed;
  top: 0;
  right: 38%; /*Not too sure about this*/
  background-color: blue;
`

export const TextSection = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 10vw;
  background-color: lightblue;
  border: 1px solid green;
`

export const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`

export const ButtonsSection = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  height: 5vw;
  border: 1px solid green;
`

export const PostsSection = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 50vw;
  // height: 20vw;
  border: 1px solid green;
`

export const FilterBar = styled.div`
  text-align: center;
  background-color: lightgreen;
  border: 1px solid green;
  border-radius: 15px 15px 15px 15px;
`
// would it be better to abstract this Post into another component?
export const Post = styled.div`
  display: flex;
  max-width: 350px;
  min-width: 250px;
  width: 40vw;
  height: 8vw;
  border: 1px solid green;
  border-radius: 30px;
  margin: auto;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const ProfilePicture = styled.img`
  max-width: 400px;
  width: 15%;
  height: 50%;
  object-fit: cover;
  margin: 10px;
  border-radius: 50%;
  border: 2px solid green;
`
export const PostTitle = styled.div`
  width: 60%;
  font-size: 1.5rem;
  color: green;
  margin-left: 30px;
  // border: 1px solid green;
`

export const Author = styled.div`
  font-size: 1rem;
  color: grey;
  // border: 1px solid green;
  margin-top: -10px;
`

export const PostMessage = styled.div`
  background-color: rgba(0, 255, 0, 0.05);
  font-size: 13px;
  border: 2px solid green;
  border-radius: 10px;
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
  height: 50px;
  text-align: center;
  border: 1px solid red;
`
