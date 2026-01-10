import './App.css'
import Products from "./components/products/Products";
import MainAppBar from "./components/mainAppBar/MainAppBar.tsx";
import CategoriesTree from "./components/categories/CategoriesTree.tsx";
import {useState} from "react";


function App() {
    const [categoryId, setCategoryId] = useState('0');
    
    const getProductsFromCategory = (categoryId: string) => {

        if (categoryId === 'all') {
            setCategoryId('0')
        } else {
            setCategoryId(categoryId);
        }

    }

    return (
        <>
            <MainAppBar/>
            <div className="main-grid">
                <CategoriesTree getProductsFromCategory={getProductsFromCategory}/>
                <Products
                    categoryId={categoryId}
                />
            </div>
        </>
    )
}

export default App
