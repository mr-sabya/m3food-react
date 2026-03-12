export interface Product {
    id: number;
    name: string;
    price: number;       // ক্যালকুলেশনের জন্য নাম্বার রাখা সেরা
    oldPrice?: number;
    image: string;
    tag?: string;
    slug: string;
    category: string;    // এটি ফিল্টারের জন্য অবশ্যই লাগবে
}