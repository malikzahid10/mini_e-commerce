import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-44 w-full object-contain p-4 sm:h-52"
        />
      </Link>

      <div className="p-4">
        <p className="mb-1 text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mb-1 line-clamp-2 min-h-12 font-semibold text-gray-800 hover:text-blue-600">
            {product.title}
          </h3>
        </Link>

        <div className="mb-4 flex items-center justify-between gap-2">
          <p className="font-bold text-gray-900">${product.price}</p>

          <p className="text-sm text-yellow-600">★ {product.rating}</p>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="block rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
