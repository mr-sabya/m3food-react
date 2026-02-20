import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <Link href={`/product/${product.slug}`}>
                <img
                    src={product.image}
                    className="h-48 w-full object-cover rounded"
                    alt={product.name}
                />
                <h3 className="mt-2 font-medium">{product.name}</h3>
            </Link>

            <div className="mt-1">
                {product.oldPrice && (
                    <span className="line-through text-sm text-gray-400 mr-2">
                        ৳{product.oldPrice}
                    </span>
                )}
                <span className="text-green-600 font-bold">
                    ৳{product.price}
                </span>
            </div>

            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
}
