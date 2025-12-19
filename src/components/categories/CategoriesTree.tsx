import {useEffect, useState} from "react";
import {Button} from "@chakra-ui/react"
import type {Category} from "./Categories.tsx";

const fetchCategories = async () => {
    const response = await fetch("http://localhost:8080/categories-tree");
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Unexpected response status ${response.status}`);
    }
}

interface CategoriesProps {
    getProductsFromCategory: (id: string) => void;
}

interface CategoryWithSubcategories extends Category {
    subcategories: Category[];
}

const Categories = ({getProductsFromCategory}: CategoriesProps) => {
    const [categories, setCategories] = useState<CategoryWithSubcategories[]>([]);
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
                    <div className='link subcategories-wrapper' key={category.categoryId}>
                        <Button
                            variant='plain'
                            onClick={() => getProductsFromCategory(category.categoryId)}
                        >
                            {category.categoryName}
                        </Button>
                        {category.subcategories.length > 0 && (
                            <div className='hide'>
                                {category.subcategories.map((subcategory) => (
                                    <div className='link' key={subcategory.categoryId}>

                                        <Button
                                            variant='plain'
                                            onClick={() => getProductsFromCategory(subcategory.categoryId)}
                                        >
                                            {subcategory.categoryName}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

            </ul>
        </div>
    )
};

export default Categories;