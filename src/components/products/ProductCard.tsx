import {Button, Card, Image, Separator, Stack, Text} from "@chakra-ui/react";

interface MeasureProps {
    typeOfMeasure: string;
    count: number;
    unitOfMeasure: string;
}

interface ShelfLifeProps {
    count: number;
    unitOfMeasure: string;
}

interface PricePerUnitProps {
    price: number;
    numeric: number;
    unitOfMeasure: string;
}

interface ProductProps {
    name: string;
    image: string;
    categoryPath: string;
    measure: MeasureProps;
    shelfLife: ShelfLifeProps;
    price: number;
    pricePerUnit: PricePerUnitProps;
    rating: number;
    dietaryIcons: string[];
    stockQuantity: number;
}

interface Product {
    product: ProductProps;
}

const ProductCard = ({ product }: Product) => {
    const {
        name,
        image,
        categoryPath,
        measure,
        shelfLife,
        price,
        pricePerUnit,
        rating,
        dietaryIcons,
        stockQuantity
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
                        <Text>category: {categoryPath}</Text>
                        <Separator />
                        <Text>{`${measure.typeOfMeasure}: ${measure.count} ${measure.unitOfMeasure}`}</Text>
                        <Separator />
                        <Text>{`Shelf life: ${shelfLife.count} ${shelfLife.unitOfMeasure}`}</Text>
                        <Separator />
                        <Text>{`Price per unit: ${pricePerUnit.price} per ${pricePerUnit.numeric} ${pricePerUnit.unitOfMeasure}`}</Text>
                        <Separator />
                        <Text>{`Rating: ${rating}`}</Text>
                        <Separator />
                        <Text>{dietaryIcons.map((value) => `${value}, `)}</Text>
                        <Separator />
                        <Text>{`Number of units in stock: ${stockQuantity}`}</Text>
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