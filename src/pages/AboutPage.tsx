import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const images = [
    {
      src: '/tooWet.png',
      alt: 'My dog enjoying a relaxing moment - a reminder to slow down and appreciate simple pleasures'
    },
    {
      src: '/aboutCarmel.png',
      alt: 'A view I captured in Carmel during a peaceful walk'
    },
    {
      src: '/aboutAquarium.png',
      alt: 'Jellyfish at Monterey Bay Aquarium - mesmerizing and inspiring'
    },
    {
      src: '/standPenguin.png',
      alt: 'Penguins at their habitat - representing community, resilience, and the beauty of natural environments'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, images.length]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const nextImage = () => {
    pauseAutoPlay();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    pauseAutoPlay();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    pauseAutoPlay();
    setCurrentImageIndex(index);
  };

  // Calculate which images to show in the carousel
  const getVisibleImages = () => {
    const visibleImages = [];
    const totalImages = images.length;
    
    // Show 5 images on desktop, 3 on mobile
    const imagesToShow = window.innerWidth >= 1024 ? 5 : 3;
    const sideImages = Math.floor(imagesToShow / 2);
    
    for (let i = -sideImages; i <= sideImages; i++) {
      const index = (currentImageIndex + i + totalImages) % totalImages;
      visibleImages.push({
        ...images[index],
        index,
        position: i,
        isCenter: i === 0
      });
    }
    
    return visibleImages;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/mainlogo.png" 
                  alt="Osiris Stephenson Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* About Me Content */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              About Me
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          {/* Intro Row - Side by Side Layout */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-col items-center space-y-8">
              {/* Headshot Image */}
              <div className="flex justify-center">
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-gray-100">
                  <img 
                    src="/boyfren copy.png" 
                    alt="Osiris Stephenson headshot"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Headshot image failed to load, trying fallback');
                      const img = e.currentTarget;
                      if (img.src.includes('boyfren copy.png')) {
                        img.src = '/boyfren.png';
                      } else {
                        console.error('All headshot image options failed');
                      }
                    }}
                  />
                </div>
              </div>

              {/* Text Block */}
              <div className="space-y-6 text-center max-w-3xl">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    Who I am beyond research and design
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg text-left">
                    Outside of research, I focus on movement, family, and creativity. I run, lift, and spend time walking with a camera, paying close attention to light, sound, and rhythm. I enjoy photography and videography as a way to document the world and stay present in it. I value quiet moments, time with loved ones, and routines that keep me steady and curious. These habits help me stay thoughtful, observant, and engaged in whatever I take on.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inspirations & Interests Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  My inspirations and interests
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-12 max-w-3xl mx-auto">
                  I am inspired by trail hikes, long runs, biking, swimming, yoga, photography, and quiet moments with coffee or tea. These routines help me stay grounded, clear my mind, and make space for creative thinking.
                </p>
              </div>

              {/* Apple-Style Carousel */}
              <div 
                className="relative w-full overflow-hidden py-8"
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
                role="region"
                aria-label="Image carousel"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 via-white/50 to-gray-100/30"></div>
                
                {/* Carousel Container */}
                <div className="relative py-20 px-8">
                  <div className="flex items-center justify-center">
                    {getVisibleImages().map((image, idx) => {
                      const scale = image.isCenter ? 'scale-100' : 'scale-75';
                      const opacity = image.isCenter ? 'opacity-100' : 'opacity-40';
                      const zIndex = image.isCenter ? 'z-20' : 'z-10';
                      const translateX = image.position * (window.innerWidth >= 1024 ? -160 : -100);
                      const rotateY = image.isCenter ? 0 : image.position * 25;
                      
                      return (
                        <div
                          key={`${image.index}-${idx}`}
                          className={`absolute transition-all duration-700 ease-out cursor-pointer ${scale} ${opacity} ${zIndex}`}
                          style={{
                            transform: `translateX(${translateX}px) rotateY(${rotateY}deg)`,
                            transformStyle: 'preserve-3d'
                          }}
                          onClick={() => goToImage(image.index)}
                          role="button"
                          tabIndex={0}
                          aria-label={`View ${image.alt}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              goToImage(image.index);
                            }
                          }}
                        >
                          <div className="w-96 h-72 lg:w-[800px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white border border-gray-200/50">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              onError={(e) => {
                                console.error(`Image failed to load: ${image.src}`);
                                e.currentTarget.src = 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1';
                              }}
                            />
                          </div>
                          
                          {/* Center image indicator */}
                          {image.isCenter && (
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full shadow-md"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 lg:left-12 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-4 shadow-xl transition-all duration-300 backdrop-blur-md hover:scale-110 z-30 border border-gray-200/50"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 lg:right-12 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-4 shadow-xl transition-all duration-300 backdrop-blur-md hover:scale-110 z-30 border border-gray-200/50"
                    aria-label="Next image"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center space-x-4 mt-12">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-blue-600 scale-125 shadow-lg' 
                          : 'bg-gray-400 hover:bg-gray-500 hover:scale-110'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Auto-play indicator */}
                <div className="text-center mt-6">
                  <span className="text-base text-gray-600 font-medium">
                    {currentImageIndex + 1} of {images.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}