import {useEffect, useState} from "react";
import {Link} from "@chakra-ui/react"

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

const Categories = () => {
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
                {categories.map((category) => (
                    <div className='link' key={category.categoryId}>
                        <Link>{category.categoryName}</Link>
                    </div>
                ))}

            </ul>
        </div>
    )
};

export default Categories;