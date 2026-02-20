import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id: 1,
        slug: "chuijhal",
        name: "চুইঝাল",
        price: 990,
        image: "/images/chuijhal.jpg",
        description: "Fresh and authentic chuijhal directly from farm.",
        variants: [
            { name: "চিকন", price: 990 },
            { name: "মোটা", price: 1290 },
        ],
    },
    {
        id: 2,
        slug: "chuijhal-achar",
        name: "চুইঝাল আচার (১+১)",
        price: 1090,
        oldPrice: 1290,
        image: "/images/chuijhal-achar.jpg",
        description: "Homemade spicy chuijhal pickle combo.",
        variants: [],
    },
];
