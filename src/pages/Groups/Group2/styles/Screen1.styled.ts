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
  height: 20vw;
  border: 1px solid green;
`

export const FilterBar = styled.div`
  text-align: center;
  background-color: lightgreen;
  border: 1px solid green;
  border-radius: 0 0 15px 15px;
`
// would it be better to abstract this Post into another component?
export const Post = styled.div`
  max-width: 350px;
  min-width: 250px;
  width: 40vw;
  height: 5vw;
  border: 1px solid green;
  margin: auto;
  margin-bottom: 10px;
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
