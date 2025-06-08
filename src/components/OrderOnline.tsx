import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import { menuData } from '../data/menuData';

const OrderOnline = ({ cartItems, addToCart, updateCartItem, onBackToHome }) => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [isCheckout, setIsCheckout] = useState(false);

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'pasta', name: 'Pasta & Risotto', icon: '🍝' },
    { id: 'mains', name: 'Main Courses', icon: '🥩' },
    { id: 'pizza', name: 'Wood-Fired Pizza', icon: '🍕' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (isCheckout) {
    return (
      <div className="min-h-screen py-24 bg-amber-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h2>
            
            {/* Order Summary */}
            <div className="border-b pb-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Address
                </label>
                <textarea
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setIsCheckout(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button
              onClick={onBackToHome}
              className="mr-4 p-2 hover:bg-white rounded-lg transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Order Online</h1>
              <p className="text-gray-600">Delivery or Pickup Available</p>
            </div>
          </div>
          
          {/* Cart Summary */}
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-4">
              <ShoppingCart className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-semibold">{totalItems} items</div>
                <div className="text-amber-600 font-bold">${totalAmount.toFixed(2)}</div>
              </div>
              {cartItems.length > 0 && (
                <button
                  onClick={() => setIsCheckout(true)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                      activeCategory === category.id
                        ? 'bg-amber-100 text-amber-800 font-semibold'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {menuData[activeCategory]?.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                        <span className="text-xl font-bold text-amber-600">${item.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <h3 className="font-bold text-lg mb-4">Your Order</h3>
              
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="border-b pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <button
                          onClick={() => updateCartItem(item.id, 0)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateCartItem(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateCartItem(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-amber-600">${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsCheckout(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold mt-4"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;