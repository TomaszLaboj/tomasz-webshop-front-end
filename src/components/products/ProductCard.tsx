import {Button, Card, Image, Separator, Stack, Text} from "@chakra-ui/react";
import type { Product } from "./Products.tsx";

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
                    <Image src={image}/>
                    <Card.Title mt="2">{name}</Card.Title>
                    <Stack>
                        <Text fontWeight="medium" letterSpacing="tight" mt="2">{`Price: £ ${Number(price).toFixed(2)}`}
                        </Text>
                        <Text>category: {category}</Text>
                        <Separator />
                        <Text>{`${measure.measureType}: ${measure.measureCount} ${measure.unitOfMeasure}`}</Text>
                        <Separator />
                        <Text>{`Shelf life: ${shelfLife.shelfLifeCount} ${shelfLife.shelfLifeUnit}`}</Text>
                        <Separator />
                        <Text>{`Price per unit: ${pricePerUnit.pricePerUnit} per ${pricePerUnit.unitCount} ${pricePerUnit.unitOfMeasure}`}</Text>
                        <Separator />
                        <Text>{`Rating: ${rating}`}</Text>
                        <Separator />
                        <Text>{dietaryIcons.map((value) => `${value}, `)}</Text>
                        <Separator />
                        <Text>{`Number of units in stock: ${stockCount}`}</Text>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="solid" colorPalette="green" size="xl">Add to basket</Button>
                </Card.Footer>
            </Card.Root>
        </div>
    )
};

export default ProductCard;