import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => (
  <nav className="flex justify-between items-center bg-blue-500 text-white px-6 py-4">
    <h1 className="text-xl font-bold">Fake Store</h1>
    <button
      className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800"
      onClick={onCartClick}
    >
      Cart ({cartCount})
    </button>
  </nav>
);

export default Navbar;