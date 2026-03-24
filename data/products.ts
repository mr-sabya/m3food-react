import { Product } from '../types/product';

export const featuredProducts: Product[] = [
    {
        id: 1,
        name: "চুইঝাল (Chuijhal) - প্রিমিয়াম কোয়ালিটি",
        slug: "premium-chuijhal",
        price: 990,
        oldPrice: 1290,
        image: "https://m3food.com/wp-content/uploads/2024/06/Screenshot_200-600x601.png",
        thumbnail: "https://m3food.com/wp-content/uploads/2024/06/Screenshot_200-600x601.png",
        tag: "Sale!",
        is_featured: true,
        is_new: true,
        stock: 50,
        categories: ["Chuijhal", "Premium"] // Array format
    },
    {
        id: 2,
        name: "চুইঝাল আচার কম্বো ১+১ = ২টি",
        slug: "chuijhal-achar-combo",
        price: 1090,
        oldPrice: 1200,
        image: "https://m3food.com/wp-content/uploads/2024/06/Screenshot_202.png",
        thumbnail: "https://m3food.com/wp-content/uploads/2024/06/Screenshot_202.png",
        tag: "Sale!",
        is_featured: true,
        is_new: false,
        stock: 20,
        categories: ["Combo", "Achar"] // Array format
    },
    {
        id: 3,
        name: "স্পেশাল চুইঝাল আচার (Chuijhal Achar)",
        slug: "special-chuijhal-achar",
        price: 495,
        oldPrice: 790,
        image: "https://m3food.com/wp-content/uploads/2025/03/132-768x768.jpg",
        thumbnail: "https://m3food.com/wp-content/uploads/2025/03/132-768x768.jpg",
        tag: "Sale!",
        is_featured: false,
        is_new: true,
        stock: 100,
        categories: ["Achar"] // Array format
    },
];