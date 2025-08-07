import { Heading } from "@chakra-ui/react"
import './App.css'
import SearchBar from "./components/SearchBar";
import Products from "./components/products/Products";
function App() {
  return (
      <>
        <Heading size="2xl" letterSpacing="wide">Tomasz's Webshop</Heading>
        <SearchBar />
          <Products />
      </>
  )
}

export default App
