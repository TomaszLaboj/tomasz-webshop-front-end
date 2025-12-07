import './App.css'
import Products, {type Product} from "./components/products/Products";
import MainAppBar from "./components/mainAppBar/MainAppBar.tsx";
import Categories from "./components/categories/Categories.tsx";
import {useEffect, useState} from "react";

const fetchProducts = async () => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("categoryId");
    console.log(params.get("categoryId"));
    const url = new URL("http://localhost:8080/products")
    if (categoryId) {
        url.searchParams.set("categoryId", categoryId);
    }
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Unexpected response status ${response.status}`);
    }
}

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            return await fetchProducts();
        }
        getProducts().then((data) => setProducts(data));
    }, [])

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
                <Categories
                    getProductsFromCategory={getProductsFromCategory}
                />
                <Products
                    products={products}
                />
            </div>
        </>
    )
}

export default App
