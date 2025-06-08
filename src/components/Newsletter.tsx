import React, { useState } from 'react';
import { Mail, CheckCircle, Gift, Bell, Calendar } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    const newSubscriber = {
      email,
      id: Date.now(),
      subscribedAt: new Date().toISOString()
    };
    
    subscribers.push(newSubscriber);
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    
    setIsSubscribed(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Get special discounts and early access to new menu items'
    },
    {
      icon: Bell,
      title: 'Event Updates',
      description: 'Be the first to know about wine tastings and special events'
    },
    {
      icon: Calendar,
      title: 'Seasonal Menus',
      description: 'Discover our seasonal specialties and limited-time offerings'
    }
  ];

  if (isSubscribed) {
    return (
      <div className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <CheckCircle className="h-20 w-20 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-xl text-amber-100 mb-6">
              Thank you for subscribing! You'll receive our newsletter with exclusive offers and updates.
            </p>
            <p className="text-amber-200">
              Check your email for a special welcome offer!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Join our newsletter for exclusive offers, seasonal menu updates, and special event invitations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{benefit.title}</h3>
                    <p className="text-amber-100">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Subscribe Now
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="bg-amber-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Gift className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">Welcome Bonus!</span>
                </div>
                <p className="text-sm text-amber-700">
                  Get 15% off your next visit when you subscribe to our newsletter
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Subscribe & Get 15% Off
              </button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time. No spam, we promise!
              </p>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 pt-12 border-t border-amber-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-2">2,500+</div>
              <div className="text-amber-200">Newsletter Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Weekly</div>
              <div className="text-amber-200">Fresh Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Exclusive</div>
              <div className="text-amber-200">Member Benefits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;