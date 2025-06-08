import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Local Food Critic',
      rating: 5,
      text: 'Bella Vista exceeded all my expectations. The truffle risotto was absolutely divine, and the service was impeccable. This is easily one of the best Italian restaurants in the city.',
      image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      location: 'Regular Customer',
      rating: 5,
      text: 'I\'ve been coming here for over 3 years, and the quality never disappoints. The pasta is always perfectly al dente, and the atmosphere is perfect for both romantic dinners and family celebrations.',
      image: 'https://images.pexels.com/photos/3775073/pexels-photo-3775073.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Anniversary Celebration',
      rating: 5,
      text: 'We celebrated our 10th anniversary here, and it was magical. The staff went above and beyond to make our evening special. The chef even came out to wish us well!',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Thompson',
      location: 'Business Client',
      rating: 5,
      text: 'I regularly bring clients here for business dinners. The ambiance is sophisticated, the food is exceptional, and it never fails to impress. Highly recommended for professional meetings.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Gonzalez',
      location: 'Food Enthusiast',
      rating: 5,
      text: 'As someone who\'s traveled extensively through Italy, I can say that Bella Vista captures the authentic Italian dining experience perfectly. The flavors are bold and the presentation is beautiful.',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <div className="py-20 bg-amber-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-300 font-semibold text-lg">What Our Guests Say</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            Customer Testimonials
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <Quote className="h-12 w-12 text-amber-600 mb-6" />
              
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-amber-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-amber-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-2">4.9/5</div>
            <div className="text-amber-100">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-2">2,500+</div>
            <div className="text-amber-100">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-2">98%</div>
            <div className="text-amber-100">Positive Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-300 mb-2">25+</div>
            <div className="text-amber-100">Years Serving</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;