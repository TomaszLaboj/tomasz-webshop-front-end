// import ProductCard from "./ProductCard";
import "./Products.css";
import {useEffect, useState} from "react";
import ProductCard from "./ProductCard";

export interface MeasureProps {
    measureType: string;
    measureCount: number;
    unitOfMeasure: string;
}

export interface ShelfLifeProps {
    shelfLifeCount: number;
    shelfLifeUnit: string;
}

export interface PricePerUnitProps {
    pricePerUnit: number;
    unitCount: number;
    unitOfMeasure: string;
}

export interface Category {
    categoryId: number;
    categoryName: string;
}

export interface Product {
    id: number,
    name: string,
    image: string,
    category: Category,
    measure: MeasureProps,
    shelfLife: ShelfLifeProps,
    price: number,
    pricePerUnit: PricePerUnitProps,
    rating: number,
    dietaryIcons: string[],
    stockCount: number,
    product?: Product
}

const fetchProducts = async () => {
    const url = window.location.href;
    let params = new URLSearchParams(document.location.search);
    let name = params.get("categoryId");
    console.log(name);
    console.log(url);
    const response = await fetch("http://localhost:8080/products");
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Unexpected response status ${response.status}`);
    }
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            return await fetchProducts();
        }
        getProducts().then((data) => setProducts(data));
    }, [])

    return (
        <>
            <div className="products-container">
                {products.map((product) => {
                    return (
                        <ProductCard product={product} key={product.id}/>
                    )
                })}
            </div>
        </>
    )
};

export default Products;