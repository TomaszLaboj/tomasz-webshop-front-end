import './App.css'
import Products from "./components/products/Products";
import MainAppBar from "./components/mainAppBar/MainAppBar.tsx";
import CategoriesTree from "./components/categories/CategoriesTree.tsx";


function App() {

    const getProductsFromCategory = (categoryId: string) => {
        const url = new URL(window.location.href);
        if (categoryId === 'all') {
            url.searchParams.delete("categoryId");
        } else {
            url.searchParams.set("categoryId", categoryId);
        }
        window.location.href = url.toString();
    }

    return (
        <>
            <MainAppBar/>
            <div className="main-grid">
                <CategoriesTree getProductsFromCategory={getProductsFromCategory}/>
                <Products/>
            </div>
        </>
    )
}

export default App
