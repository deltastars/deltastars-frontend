
import React, { useState, useEffect, useCallback } from 'react';
import { Product, Page, CategoryKey } from '../../types';
import { ProductCard } from '../ProductCard';
import { QualityIcon, DeliveryIcon, SupportIcon, UserIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { useI18n } from '../../contexts/I18nContext';
import { COMPANY_INFO } from '../../constants';

interface HomeProps {
  setPage: (page: Page, productId?: number) => void;
  addToCart: (product: Product) => void;
  products: Product[];
  heroImage: string;
  toggleWishlist: (product: Product) => void;
  isProductInWishlist: (productId: number) => boolean;
  onZoom?: (src: string) => void;
}

const CATEGORIES: { nameKey: string; icon: string; color: string; key: CategoryKey }[] = [
    { nameKey: 'categories.fruits', icon: '🍎', color: 'bg-red-100', key: 'fruits' },
    { nameKey: 'categories.vegetables', icon: '🥦', color: 'bg-green-100', key: 'vegetables' },
    { nameKey: 'categories.dates', icon: '🌴', color: 'bg-yellow-100', key: 'dates' },
    { nameKey: 'categories.eggs', icon: '🥚', color: 'bg-blue-100', key: 'eggs' },
];

const ImageCarousel: React.FC = () => {
    const { t } = useI18n();
    const images = [
        { src: 'https://i.imgur.com/uR25Q38.jpeg', alt: t('home.gallery.alt.fruitsWarehouse') },
        { src: 'https://i.imgur.com/8Q2pT6A.jpeg', alt: t('home.gallery.alt.datesWarehouse') },
        { src: 'https://i.imgur.com/lJ4m0gP.jpeg', alt: t('home.gallery.alt.mobileApp') }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section className="container mx-auto px-4">
            <div className="text-center">
                <h3 className="text-3xl font-black text-primary mb-4">{t('home.gallery.title')}</h3>
                <p className="text-black font-extrabold max-w-3xl mx-auto mb-8">{t('home.gallery.subtitle')}</p>
            </div>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full m-auto relative group">
                <div
                    style={{ backgroundImage: `url(${images[currentIndex].src})` }}
                    className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    role="img"
                    aria-label={images[currentIndex].alt}
                ></div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <ChevronLeftIcon onClick={prevSlide} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <ChevronRightIcon onClick={nextSlide} />
                </div>
                <div className="flex top-4 justify-center py-2">
                    {images.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`text-2xl cursor-pointer p-1 font-black ${currentIndex === slideIndex ? 'text-primary' : 'text-gray-400'}`}
                        >
                            ●
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Home: React.FC<HomeProps> = ({ setPage, addToCart, products, heroImage, toggleWishlist, isProductInWishlist, onZoom }) => {
  const featuredProducts = products.slice(0, 8);
  const newArrivals = products.slice(-8).reverse();
  const specialOffers = products.filter(p => p.original_price).slice(0, 8);
  const { t, language } = useI18n();

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative text-white text-center py-20 px-4 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={heroImage ? { backgroundImage: `url('${heroImage}')` } : { backgroundColor: 'var(--color-primary-dark)' }}
          aria-label={t('home.hero.title')}
          role="img"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-70 z-10"></div>
        <div className="container mx-auto relative z-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">{t('home.hero.title')}</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-black text-white">{t('home.hero.subtitle')}</p>
            <button 
                onClick={() => setPage('products')}
                className="bg-secondary text-white font-black py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
            >
                {t('home.hero.button')}
            </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <h3 className="text-3xl font-black text-center text-primary mb-8">{t('home.categories.title')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className={`p-6 rounded-lg text-center cursor-pointer hover:shadow-lg hover:scale-105 transform transition-all duration-300 ${cat.color}`}>
              <div className="text-5xl mb-2">{cat.icon}</div>
              <h4 className="font-black text-black">{t(cat.nameKey)}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-black text-primary">{t('home.featured.title')}</h3>
          <button onClick={() => setPage('products')} className="text-primary font-black hover:text-secondary">
            {t('home.featured.seeAll')}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
              toggleWishlist={toggleWishlist}
              isInWishlist={isProductInWishlist(product.id)}
              setPage={setPage}
              onViewReviews={() => setPage('productDetail', product.id)}
              onZoom={onZoom}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      {newArrivals.length > 0 && (
        <section className="container mx-auto px-4">
          <h3 className="text-3xl font-black text-primary mb-8">{t('home.newArrivals.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
                toggleWishlist={toggleWishlist}
                isInWishlist={isProductInWishlist(product.id)}
                setPage={setPage}
                onViewReviews={() => setPage('productDetail', product.id)}
                onZoom={onZoom}
              />
            ))}
          </div>
        </section>
      )}

      {/* Special Offers Section */}
      {specialOffers.length > 0 && (
        <section className="container mx-auto px-4">
          <h3 className="text-3xl font-black text-primary mb-8">{t('home.specialOffers.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specialOffers.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
                toggleWishlist={toggleWishlist}
                isInWishlist={isProductInWishlist(product.id)}
                setPage={setPage}
                onViewReviews={() => setPage('productDetail', product.id)}
                onZoom={onZoom}
              />
            ))}
          </div>
        </section>
      )}

      {/* Image Gallery Section */}
      <ImageCarousel />

      {/* Quality Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
                <div className="bg-primary text-white rounded-full p-4 mb-4"><QualityIcon /></div>
                <h4 className="text-xl font-black text-primary mb-2">{t('home.quality.title')}</h4>
                <p className="text-black font-extrabold leading-relaxed">{t('home.quality.description')}</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-primary text-white rounded-full p-4 mb-4"><DeliveryIcon /></div>
                <h4 className="text-xl font-black text-primary mb-2">{t('home.delivery.title')}</h4>
                <p className="text-black font-extrabold leading-relaxed">{t('home.delivery.description')}</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-primary text-white rounded-full p-4 mb-4"><SupportIcon /></div>
                <h4 className="text-xl font-black text-primary mb-2">{t('home.support.title')}</h4>
                <p className="text-black font-extrabold leading-relaxed">{t('home.support.description')}</p>
            </div>
        </div>
      </section>

      {/* Location Section */}
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h3 className="text-3xl font-black text-black mb-4">{t('home.location.title')}</h3>
                    <p className="text-black font-extrabold max-w-3xl mx-auto mb-8">{t('home.location.subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="overflow-hidden rounded-lg shadow-lg border-2 border-primary-light h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.865488107576!2d39.22013837588724!3d21.55243897008537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d9a100000001%3A0x3f5b721e0a6d0c9f!2sDelta%20Stars%20Trading%20Company!5e0!3m2!1sen!2sae!4v1716986629168!5m2!1sen!2sae"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={t('footer.location')}
                        ></iframe>
                    </div>
                    <div className="space-y-4 text-center md:text-right bg-gray-50 p-8 rounded-lg shadow-md">
                        <h4 className="text-2xl font-black text-black">{t('footer.contact')}</h4>
                        <p className="text-lg text-black font-extrabold"><strong className="font-black text-primary-dark">{t('footer.address')}:</strong> {language === 'ar' ? COMPANY_INFO.address: COMPANY_INFO.address_en}</p>
                        <p className="text-lg text-black font-extrabold"><strong className="font-black text-primary-dark">{t('footer.phone')}:</strong> <a href={`tel:${COMPANY_INFO.phone}`} aria-label={t('footer.callUs')} className="hover:underline font-bold">{COMPANY_INFO.phone}</a></p>
                        <p className="text-lg text-black font-extrabold"><strong className="font-black text-primary-dark">{t('footer.whatsapp')}:</strong> <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} aria-label={t('footer.whatsappUs')} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">{COMPANY_INFO.whatsapp}</a></p>
                        <p className="text-lg text-black font-extrabold"><strong className="font-black text-primary-dark">{t('footer.email')}:</strong> <a href={`mailto:${COMPANY_INFO.email}`} aria-label={t('footer.emailUs')} className="hover:underline font-bold">{COMPANY_INFO.email}</a></p>
                        <a 
                            href={COMPANY_INFO.map_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-secondary text-white font-black py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
                        >
                            {t('home.location.getDirections')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
      
      {/* Our Clients Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-3xl font-black text-primary mb-4">{t('home.clients.title')}</h3>
              <p className="text-black font-extrabold max-w-3xl mx-auto mb-8">{t('home.clients.subtitle')}</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/d/1ZxOTVQCjdFZBBUY0DxSIH_f3hO4v7AiI"
                alt={t('home.clients.title')}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
        </div>
      </section>

      {/* VIP Portal Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary text-white rounded-lg shadow-xl p-8 md:p-12 text-center flex flex-col items-center">
          <UserIcon />
          <h3 className="text-3xl font-black mt-4 mb-4">{t('home.vip.title')}</h3>
          <p className="max-w-2xl mb-8 font-extrabold">{t('home.vip.description')}</p>
          <button
            onClick={() => setPage('vipLogin')}
            className="bg-secondary text-white font-black py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            {t('home.vip.button')}
          </button>
        </div>
      </section>
    </div>
  );
};
