import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const images = [
    {
      image: './images/Osso Buco alla Milanese.jpeg',
      alt: 'Signature Pasta Dish',
      category: 'Food'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      alt: 'Restaurant Interior',
      category: 'Interior'
    },
    {
      image: './images/chef preparing food.jpeg',
      alt: 'Chef at Work',
      category: 'Kitchen'
    },
    {
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800',
      alt: 'Fresh Ingredients',
      category: 'Ingredients'
    },
    {
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
      alt: 'Elegant Dining Area',
      category: 'Interior'
    },
    {
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
      alt: 'Wood-Fired Pizza',
      category: 'Food'
    },
    {
      image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800',
      alt: 'Fine Italian Wine',
      category: 'Beverages'
    },
    {
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
      alt: 'Dessert Presentation',
      category: 'Food'
    },
    {
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800',
      alt: 'Outdoor Seating',
      category: 'Interior'
    },
    {
      image: 'Pappardelle al Cinghiale.jpeg',
      alt: 'Handmade Pasta',
      category: 'Food'
    },
    {
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800',
      alt: 'Italian Espresso',
      category: 'Beverages'
    },
    {
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800',
      alt: 'Kitchen Brigade',
      category: 'Kitchen'
    }
  ];

  const categories = ['All', 'Food', 'Interior', 'Kitchen', 'Ingredients', 'Beverages'];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore body scroll
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-lg tracking-wide uppercase">
            Esperienza Visiva
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">
            Galleria
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dünyamızdan dikkatle yakalanmış anlar aracılığıyla mutfak dünyamıza göz atın
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.image}
                alt={image.alt || 'Gallery image'}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback image if load fails
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/10">
                    <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white font-bold text-lg">{image.alt || 'Unnamed'}</p>
                    <p className="text-amber-300 text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-bold text-white mb-2">Bu kategoride görsel bulunamadı</h3>
            <p className="text-gray-400">Farklı bir kategori seçmeyi deneyin</p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-amber-400 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:bg-black/70"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:bg-black/70"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:bg-black/70"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.alt || 'Gallery image'}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <p className="font-bold text-xl mb-1">{selectedImage.alt || 'Unnamed'}</p>
                <p className="text-amber-300 font-medium mb-2">{selectedImage.category}</p>
                <p className="text-sm text-gray-300">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Use ← → keys or click buttons to navigate • ESC to close
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;