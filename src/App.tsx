import './App.css'
import Products from "./components/products/Products";
import MainAppBar from "./components/mainAppBar/MainAppBar.tsx";
import Categories from "./components/categories/Categories.tsx";

function App() {
    return (
        <>
            <MainAppBar/>
            <div className="main-grid">
                <Categories/>
                <Products/>
            </div>
        </>
    )
}

export default App
