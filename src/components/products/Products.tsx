import ProductCard from "./ProductCard";
import product from "./../../resources/product.json";
import "./Products.css";

const Products = () => {
    return (
        <>
            <div className="products-container">
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
            </div>
        </>
    )
};

export default Products;