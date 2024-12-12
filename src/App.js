import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';





const BASE_URL = 'https://fakestoreapi.com';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} onCartClick={toggleModal} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {isModalOpen && (
        <CartModal
          cartItems={cart}
          onClose={toggleModal}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default App;
