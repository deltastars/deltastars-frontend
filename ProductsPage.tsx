
import React, { useState, useMemo, useEffect } from 'react';
import { Product, Page, Review } from '../../../types';
import { ProductCard } from '../../ProductCard';
import { useI18n } from './I18nContext';
import { StarIcon } from './Icons';

interface ProductsPageProps {
  addToCart: (product: Product, quantity: number) => void;
  products: Product[];
  toggleWishlist: (product: Product) => void;
  isProductInWishlist: (productId: number) => boolean;
  setPage: (page: Page, productId?: number, category?: string) => void;
  getAverageRating: (productId: number) => { average: number; count: number };
  reviews: Review[];
  initialCategory?: string;
}

const ALL_CATEGORIES_KEY = 'all';
const PRODUCTS_PER_PAGE = 12;

const ReviewsModal: React.FC<{
  product: Product;
  reviews: Review[];
  onClose: () => void;
}> = ({ product, reviews, onClose }) => {
  const { t, language } = useI18n();

  return (
    <div className="fixed inset-0 bg-black/60 z-[110] flex justify-center items-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg relative max-h-[85vh] overflow-hidden flex flex-col">
        <button onClick={onClose} className="absolute top-6 end-6 text-gray-400 hover:text-black text-4xl font-black z-20">&times;</button>
        <div className="p-10 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-2xl font-black text-primary mb-2">{t('reviews.title')}</h2>
          <h3 className="text-lg font-bold text-gray-500">{language === 'ar' ? product.name_ar : product.name_en}</h3>
        </div>
        <div className="p-10 overflow-y-auto flex-grow space-y-6">
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" filled={i < review.rating} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-bold">{new Date(review.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}</span>
                </div>
                <h4 className="font-black text-black mb-2">{review.author}</h4>
                <p className="text-gray-600 font-bold text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-gray-400 font-black">
                <span className="text-6xl block mb-4">💬</span>
                {t('reviews.noReviews')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart, products, toggleWishlist, isProductInWishlist, setPage, getAverageRating, reviews, initialCategory }) => {
  const { t, language } = useI18n();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || ALL_CATEGORIES_KEY);
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductForReviews, setSelectedProductForReviews] = useState<Product | null>(null);

  // تحديث القسم المختار في حال تغير الـ initialCategory من الأب
  useEffect(() => {
    if (initialCategory) {
        setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);
  
  const uniqueCategories = useMemo(() => {
    const categories = Array.from(new Set(products.map(p => p.category)));
    return [ALL_CATEGORIES_KEY, ...categories];
  }, [products]);

  const sortedAndFilteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === ALL_CATEGORIES_KEY || product.category === selectedCategory;
      const productName = language === 'ar' ? product.name_ar : product.name_en;
      return matchesCategory && productName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const sortableProducts = [...filtered];
    switch (sortOption) {
      case 'priceAsc': sortableProducts.sort((a, b) => a.price - b.price); break;
      case 'priceDesc': sortableProducts.sort((a, b) => b.price - a.price); break;
      case 'nameAsc': 
        sortableProducts.sort((a, b) => {
          const nA = language === 'ar' ? a.name_ar : a.name_en;
          const nB = language === 'ar' ? b.name_ar : b.name_en;
          return nA.localeCompare(nB);
        }); break;
      case 'ratingDesc': sortableProducts.sort((a, b) => getAverageRating(b.id).average - getAverageRating(a.id).average); break;
    }
    return sortableProducts;
  }, [searchTerm, selectedCategory, sortOption, language, products, getAverageRating]);

  useEffect(() => { setCurrentPage(1); }, [searchTerm, selectedCategory, sortOption]);

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = sortedAndFilteredProducts.slice((currentPage-1)*PRODUCTS_PER_PAGE, currentPage*PRODUCTS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-16">
      {selectedProductForReviews && (
          <ReviewsModal
              product={selectedProductForReviews}
              reviews={reviews.filter(r => r.productId === selectedProductForReviews.id)}
              onClose={() => setSelectedProductForReviews(null)}
          />
      )}
      
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-primary mb-4">{t('products.title')}</h1>
        <p className="text-xl text-gray-500 font-bold">{t('products.subtitle')}</p>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl mb-12 flex flex-col lg:flex-row gap-6 border border-gray-100">
        <input
          type="text"
          placeholder={t('products.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="lg:flex-grow p-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary font-bold transition-all"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-5 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-primary cursor-pointer"
            >
              {uniqueCategories.map(cat => (
                <option key={cat} value={cat}>{cat === ALL_CATEGORIES_KEY ? t('products.allCategories') : t(`categories.${cat}`)}</option>
              ))}
            </select>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-5 bg-gray-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-primary cursor-pointer"
            >
              <option value="default">{t('products.sort.default')}</option>
              <option value="priceAsc">{t('products.sort.priceAsc')}</option>
              <option value="priceDesc">{t('products.sort.priceDesc')}</option>
              <option value="ratingDesc">{t('products.sort.ratingDesc')}</option>
            </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {currentProducts.length > 0 ? (
          currentProducts.map(p => (
            <ProductCard 
              key={p.id} product={p} 
              onAddToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={isProductInWishlist(p.id)}
              setPage={setPage}
              rating={getAverageRating(p.id)}
              onViewReviews={() => setSelectedProductForReviews(p)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-24 bg-white rounded-[3rem] shadow-sm">
            <span className="text-8xl block mb-6">🔍</span>
            <p className="text-2xl font-black text-gray-400">{t('products.noResults')}</p>
          </div>
        )}
      </div>
      
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-8 py-3 bg-white border border-gray-100 rounded-2xl font-black disabled:opacity-30 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              {t('pagination.previous')}
            </button>
            <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                    <button 
                        key={i} onClick={() => setCurrentPage(i+1)}
                        className={`w-12 h-12 rounded-2xl font-black transition-all ${currentPage === i+1 ? 'bg-primary text-white shadow-lg scale-110' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-8 py-3 bg-white border border-gray-100 rounded-2xl font-black disabled:opacity-30 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              {t('pagination.next')}
            </button>
        </div>
      )}
    </div>
  );
};
