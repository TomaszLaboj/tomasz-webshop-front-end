import {useEffect, useState} from "react";
import {Button} from "@chakra-ui/react";
import Category from './Category.tsx'

const fetchCategories = async () => {
    const response = await fetch("http://localhost:8080/categories-tree");
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Unexpected response status ${response.status}`);
    }
}

export interface CategoryType {
    categoryId: string;
    categoryName: string;
    subcategories: CategoryType[];
}

export interface CategoriesProps {
    getProductsFromCategory: (id: string) => void;
}

const CategoriesTree = ({getProductsFromCategory}: CategoriesProps) => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getCategories = async () => {
            return await fetchCategories();
        }
        getCategories().then((data) => setCategories(data));
    }, [])

    return (
        <div className='categories-sidebar'>
            <ul>
                <Button
                    variant='plain'
                    onClick={() => getProductsFromCategory('all')}
                >
                    All categories
                </Button>
                {categories.map((category) => (
                    <Category
                        category={category}
                        getProductsFromCategory={getProductsFromCategory}
                    />
                ))}

            </ul>
        </div>
    )
};

export default CategoriesTree;