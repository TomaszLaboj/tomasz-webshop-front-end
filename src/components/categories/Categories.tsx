import {useEffect, useState} from "react";
import {Button} from "@chakra-ui/react"

const fetchCategories = async () => {
    const response = await fetch("http://localhost:8080/categories");
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Unexpected response status ${response.status}`);
    }
}

interface Category {
    categoryId: string;
    categoryName: string;
}

interface CategoriesProps {
    getProductsFromCategory: (id: string) => void;
}

const Categories = ({getProductsFromCategory}: CategoriesProps) => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const getCategories = async () => {
            return await fetchCategories();
        }
        getCategories().then((data) => setCategories(data));
    }, [])


    return (
        <div className='sidebar'>
            <ul>
                <Button
                    variant='plain'
                    onClick={() => getProductsFromCategory('all')}
                >
                    All categories
                </Button>
                {categories.map((category) => (
                    <div className='link' key={category.categoryId}>
                        <Button
                            variant='plain'
                            onClick={() => getProductsFromCategory(category.categoryId)}
                        >
                            {category.categoryName}
                        </Button>
                    </div>
                ))}

            </ul>
        </div>
    )
};

export default Categories;