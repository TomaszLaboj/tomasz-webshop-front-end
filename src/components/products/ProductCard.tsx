import {Button, Card, Image, Stack, Text} from "@chakra-ui/react";
import type { Product } from "./Products.tsx";
import './Products.css';

type ProductCardProps = {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
   const {
       name, image, category, measure, shelfLife, price, pricePerUnit, rating, dietaryIcons, stockCount
   } = product;
    return (
        <div className="product">
            <Card.Root variant="elevated" width="320px">
                <Card.Body gap="2">
                    <div>
                        <Image src={image} className={"product-image"} />
                    </div>
                    <Card.Title mt="2">{name}</Card.Title>
                    <Stack gap={'61'}>
                        <Text fontWeight="medium" letterSpacing="tight" mt="2">{`Price: £ ${Number(price).toFixed(2)}`}
                        </Text>
                        <div className={"product-category"}>
                            <Text className={"product-category"}>category:</Text>
                            <Text>{category}</Text>
                        </div>
                        <Text>{`${measure.measureType}: ${measure.measureCount} ${measure.unitOfMeasure}`}</Text>
                        <Text>{`Shelf life: ${shelfLife.shelfLifeCount} ${shelfLife.shelfLifeUnit}`}</Text>
                        <Text>{`Price per unit: ${pricePerUnit.pricePerUnit} per ${pricePerUnit.unitCount} ${pricePerUnit.unitOfMeasure}`}</Text>
                        <Text>{`Rating: ${rating}`}</Text>
                        <Text>{dietaryIcons.map((value) => `${value}, `)}</Text>
                        <Text>{`Number of units in stock: ${stockCount}`}</Text>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    {stockCount && stockCount > 0 ? <Button variant="solid" colorPalette="green" size="xs">Add to basket</Button> : <Button disabled size="xs">Out of stock</Button>}
                </Card.Footer>
            </Card.Root>
        </div>
    )
};

export default ProductCard;