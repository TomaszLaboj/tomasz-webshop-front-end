import {Button, IconButton, Image} from "@chakra-ui/react"
import {LuSearch, LuShoppingBasket} from 'react-icons/lu'
import './App.css'
import SearchBar from "./components/SearchBar";
import Products from "./components/products/Products";
import logoImage from "./assets/logo.png"

function App() {
  return (
      <>
        <span className={"top-bar"}>
            <Image src={logoImage} className={'logo'}></Image>
            <SearchBar />
            <IconButton aria-label='Search database' colorPalette='orange'>
                <LuSearch />
            </IconButton>
            <Button background={'rgb(234, 88, 12)'} padding='2'>Your acccount</Button>
            <IconButton className={'basket-button'} padding='2'>
                Basket
                <LuShoppingBasket />
            </IconButton>
        </span>
        <Products />
      </>
  )
}

export default App
