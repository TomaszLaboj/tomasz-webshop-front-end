import SearchBar from "../SearchBar.tsx";
import {Button, IconButton, Image} from "@chakra-ui/react";
import {LuSearch, LuShoppingBasket} from "react-icons/lu";
import logoImage from "../../assets/logo.png";
import './MainAppBar.css'

const MainAppBar = () => {
    return (
        <span className={"top-bar"}>
            <Image src={logoImage} className={'logo'}/>
            <SearchBar/>
            <IconButton aria-label='Search database' colorPalette='orange'>
                <LuSearch/>
            </IconButton>
            <Button background={'rgb(234, 88, 12)'} padding='2'>
                Your acccount
            </Button>
            <IconButton className={'basket-button'} padding='2'>
                Basket
                <LuShoppingBasket/>
            </IconButton>
        </span>

    )
};

export default MainAppBar;
