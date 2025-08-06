import { Heading } from "@chakra-ui/react"
import './App.css'
import SearchBar from "./components/SearchBar";
function App() {

  return (
      <>
        <Heading size="2xl" letterSpacing="wide">Tomasz's Webshop</Heading>
        <SearchBar />
      </>
  )
}

export default App
