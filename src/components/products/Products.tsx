import "./Products.css";
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

interface ProductsProps {
    products: Product[];
}

const Products = ({products}: ProductsProps) => {


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