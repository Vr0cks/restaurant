import React, { useState, useEffect } from 'react';
import { Clock, Star, ChefHat } from 'lucide-react';

const ChefSpecial = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 30, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="h-8 w-8 text-amber-300 mr-3" />
            <span className="text-amber-300 font-semibold text-lg">Today's Special</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chef's Signature Creation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="Truffle Risotto alle Porcini.jpg"
              alt="Chef's Special Dish"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
              Limited Time
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="ml-3 text-amber-200">Customer Favorite</span>
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Truffle Risotto alle Porcini
            </h3>
            
            <p className="text-xl text-amber-100 mb-6 leading-relaxed">
              Creamy Arborio rice slowly cooked with wild porcini mushrooms, finished 
              with aged Parmigiano-Reggiano and a generous shaving of black truffle. 
              A true masterpiece of Italian cuisine.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-amber-300 mr-2" />
                <span className="text-amber-200">Available for limited time</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-300">{timeLeft.hours}</div>
                  <div className="text-sm text-amber-200">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-300">{timeLeft.minutes}</div>
                  <div className="text-sm text-amber-200">Minutes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-300">{timeLeft.seconds}</div>
                  <div className="text-sm text-amber-200">Seconds</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="text-3xl font-bold text-amber-400">$32</div>
              <div className="text-gray-300 line-through">$42</div>
            </div>

            <button 
              onClick={() => document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' })} 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Reserve Your Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSpecial;