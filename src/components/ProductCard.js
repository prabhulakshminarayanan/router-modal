import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="border rounded-md p-4 shadow-md hover:shadow-lg">
    <img
      src={product.image}
      alt={product.title}
      className="h-40 mx-auto"
    />
    <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
    <p className="text-blue-500 text-lg font-bold">${product.price.toFixed(2)}</p>
    <button
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      onClick={() => onAddToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;