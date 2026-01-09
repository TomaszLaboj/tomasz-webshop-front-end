import {Button, IconButton} from "@chakra-ui/react";
import {LuChevronDown, LuChevronRight} from "react-icons/lu";
import type {CategoryType} from './CategoriesTree.tsx';
import {useRef, useState} from "react";
import './CategoriesTree.css';

interface CategoryProps {
    category: CategoryType;
    getProductsFromCategory: (id: string) => void;
}

const Category = ({category, getProductsFromCategory}: CategoryProps) => {
    const expanded = useRef(false);
    const [categoryExpanded, setCategoryExpanded] = useState(expanded.current);

    const handleExpandCategory = () => {
        setCategoryExpanded(!categoryExpanded)
        expanded.current = !categoryExpanded
    };
    
    return <div className='link subcategories-wrapper' key={category.categoryId}>
        <Button
            variant='plain'
            onClick={() => getProductsFromCategory(category.categoryId)}
        >
            {category.categoryName}
        </Button>
        {categoryExpanded ?
            <IconButton
                variant='ghost'
                className='chevron-down'
                onClick={handleExpandCategory}
            >
                <LuChevronDown/>
            </IconButton> :
            <IconButton
                variant='ghost'
                className='chevron-right'
                onClick={handleExpandCategory}
            >
                <LuChevronRight/>
            </IconButton>
        }
        {categoryExpanded &&
            <div className='subcategories'>
                {category.subcategories.length > 0 && (
                    <div>
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
        }
    </div>
};

export default Category;