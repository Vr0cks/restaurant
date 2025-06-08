import React, { useState } from 'react';
import { Plus, Leaf, Wheat } from 'lucide-react';
import { menuData } from '../data/menuData';

const Menu = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'pasta', name: 'Pasta & Risotto', icon: '🍝' },
    { id: 'mains', name: 'Main Courses', icon: '🥩' },
    { id: 'pizza', name: 'Wood-Fired Pizza', icon: '🍕' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  return (
    <div className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-lg">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Culinary Masterpieces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every dish is crafted with passion, using the finest ingredients and traditional techniques
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-800'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {menuData[activeCategory]?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {item.vegetarian && (
                    <div className="bg-green-500 text-white p-1 rounded-full">
                      <Leaf className="h-4 w-4" />
                    </div>
                  )}
                  {item.glutenFree && (
                    <div className="bg-amber-500 text-white p-1 rounded-full">
                      <Wheat className="h-4 w-4" />
                    </div>
                  )}
                </div>
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;