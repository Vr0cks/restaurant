import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import ChefSpecial from './components/ChefSpecial';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// CartItem tipini tanımla
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// MenuItem tipini tanımla
interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartItem = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentView === 'order') {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header onNavigate={setCurrentView} scrollToSection={scrollToSection} />
        <OrderOnline
          cartItems={cartItems}
          addToCart={addToCart}
          updateCartItem={updateCartItem}
          onBackToHome={() => setCurrentView('home')}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header onNavigate={setCurrentView} scrollToSection={scrollToSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="chef-special">
          <ChefSpecial />
        </section>
        <section id="menu">
          <Menu addToCart={addToCart} />
        </section>
        <section id="reservations">
          <Reservations />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;