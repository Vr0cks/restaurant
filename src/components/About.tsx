import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in Italian cuisine and service'
    },
    {
      icon: Users,
      title: 'Expert Chefs',
      description: 'Trained in authentic Italian cooking techniques'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Ingredients sourced fresh every morning'
    },
    {
      icon: Heart,
      title: 'Family Recipe',
      description: 'Traditional recipes passed down through generations'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-lg">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
               Where Tradition Meets Flavor
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Since opening our doors in 1998, Bella Vista has been more than just a restaurant — 
                it’s been a celebration of authentic Italian cuisine crafted with passion,
                 purpose, and a deep respect for tradition.
              </p>
              
              <p>
                Born from a dream to bring the soul of Italy to our local table, our journey has been shaped by rich culinary heritage and the pursuit of excellence. 
                At the heart of it all is Chef Yiğit Canlı, trained in Tuscany’s timeless kitchens,
                 who brings generations of Italian cooking to life with every plate.
              </p>
              
              <p>
                Blending traditional recipes with the freshest local ingredients, we create dishes that are both comforting and unforgettable. 
                From handmade pastas to wood-fired pizzas, every bite is a reflection of care, craft, and culture — 
                a little piece of Italy, served to your table..
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="Chef preparing food.jpeg"
                alt="Chef preparing food"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="Restaurant interior.jpg"
                alt="Restaurant interior"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="Fresh ingredients.jpg"
                alt="Fresh ingredients"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="Elegant dining.jpeg"
                alt="Elegant dining"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;