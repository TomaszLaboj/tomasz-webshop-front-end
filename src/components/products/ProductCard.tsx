import {Button, Card, Image, Stack, Text} from "@chakra-ui/react";
import type {Product} from "./Products.tsx";
import Rating from "./components/Rating.tsx";
import './Products.css';

type ProductCardProps = {
    product: Product;
}

const MeasureType = {
    WEIGHT: "Weight",
    VOLUME: "Volume",
    ITEM: "Quantity",
}

const ProductCard = ({product}: ProductCardProps) => {
    const {
        name, image, category, measure, shelfLife, price, pricePerUnit, rating, dietaryIcons, stockCount
    } = product;
    const {numberOfItemsInPack} = measure;
    const measureType = MeasureType[measure.measureType as keyof typeof MeasureType];
    const measureCountInfo = `${measure.measureCount} ${
        measureType == MeasureType.ITEM
            ? 'items'
            : measure.unitOfMeasure}`
    return (
        <div className="product">
            <Card.Root variant="elevated" width="320px">
                <Card.Body gap="2">
                    <div>
                        <Image src={image} className="product-image"/>
                    </div>
                    <Card.Title mt="2">
                        {name}
                    </Card.Title>
                    <Text>{numberOfItemsInPack > 1 && `${numberOfItemsInPack} x ${measureCountInfo}`}</Text>
                    <Stack gap={'61'}>
                        <Text fontWeight="medium" letterSpacing="tight" mt="2">
                            {`Price: £ ${Number(price).toFixed(2)}`}
                        </Text>
                        <span className="product-category">
                            <Text>
                                Category: {category.categoryName}
                            </Text>
                        </span>
                        <Text>
                            {`${measureType}: ${measureCountInfo}`}

                        </Text>
                        <Text>
                            {`Price per unit: £${pricePerUnit.pricePerUnit} per ${pricePerUnit.unitCount} ${pricePerUnit.unitOfMeasure}`}
                        </Text>
                        <Text>
                            {`Shelf life: ${shelfLife.shelfLifeCount} ${shelfLife.shelfLifeUnit}`}
                        </Text>
                        <div className='rating-div'>
                            <Text>
                                Rating:
                            </Text>
                            <Rating rating={rating}/>
                        </div>
                        <Text>
                            {dietaryIcons && dietaryIcons.map((value) => `${value}, `)}
                        </Text>
                        <Text>
                            {`Number of units in stock: ${stockCount}`}
                        </Text>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    {stockCount && stockCount > 0 ?
                        <Button variant="solid" colorPalette="green" size="xs">Add to basket</Button> :
                        <Button disabled size="xs">Out of stock</Button>}
                </Card.Footer>
            </Card.Root>
        </div>
    )
};

export default ProductCard;