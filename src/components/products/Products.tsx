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

export interface Product {
    id: number,
    name: string,
    image: string,
    category: string,
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
    console.log(products[0]);

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