export type ProductVariant = {
    name: string;
    price: number;
};

export type Product = {
    id: number;
    slug: string;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    description: string;
    variants: ProductVariant[];
};
