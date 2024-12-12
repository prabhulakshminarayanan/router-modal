import React from 'react';
const CartModal = ({ cartItems, onClose, onRemoveFromCart }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-md font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );

  export default CartModal;