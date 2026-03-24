export interface Product {
    id: number;
    name: string;
    slug: string;
    image: string;      // comes from thumbnail_url
    thumbnail: string;      // comes from thumbnail_url
    price: number;      // comes from effective_price
    oldPrice: number | null;
    tag: string | null;
    is_featured: boolean;
    is_new: boolean;
    stock: number;
}