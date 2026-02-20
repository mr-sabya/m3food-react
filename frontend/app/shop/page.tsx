import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Shop</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
