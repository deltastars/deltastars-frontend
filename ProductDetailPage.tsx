
import React, { useState } from 'react';
import { Product, Page, Review } from '../../types';
import { useI18n } from './contexts/I18nContext';
import { useToast } from '../ToastContext';
import { StarIcon, ShoppingCartIcon } from './contexts/Icons';

interface ProductDetailPageProps {
    product: Product;
    setPage: (page: Page) => void;
    reviews: Review[];
    onAddReview: (review: any) => void;
    addToCart: (product: Product) => void;
    averageRating: { average: number; count: number };
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ 
    product, 
    setPage, 
    reviews, 
    onAddReview, 
    addToCart, 
    averageRating 
}) => {
  const { t, language, formatCurrency } = useI18n();
  const { addToast } = useToast();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleShare = () => {
    const shareUrl = window.location.href;
    if(navigator.share && shareUrl) {
        navigator.share({
            title: language === 'ar' ? product.name_ar : product.name_en,
            text: language === 'ar' ? `اطلب الآن ${product.name_ar} من متجر نجوم دلتا` : `Order ${product.name_en} now from Delta Stars Store`,
            url: shareUrl
        }).catch((err) => console.debug('Product share failed:', err));
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) {
      addToast(language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields', 'error');
      return;
    }
    const newReview = {
      id: Date.now().toString(),
      productId: product.id,
      author,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0]
    };
    onAddReview(newReview);
    setAuthor('');
    setComment('');
    addToast(language === 'ar' ? 'شكراً لتقييمك!' : 'Thank you for your review!', 'success');
  };

  return (
    <div className="container mx-auto px-4 py-12 text-black">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => setPage('products')} className="text-primary font-black hover:underline flex items-center gap-2 text-xl">
            &larr; {t('products.allCategories')}
        </button>
        <button onClick={handleShare} className="bg-gray-100 p-4 rounded-2xl font-black flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
            📤 {language === 'ar' ? 'مشاركة المنتج' : 'Share Product'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
        <div className="rounded-[2rem] overflow-hidden bg-gray-50 aspect-square">
          <img src={product.image} alt={product.name_ar} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        </div>
        
        <div className="flex flex-col">
          <span className="text-secondary font-black uppercase tracking-widest mb-2">{t(`categories.${product.category}`)}</span>
          <h1 className="text-4xl font-black mb-4">{language === 'ar' ? product.name_ar : product.name_en}</h1>
          <p className="text-5xl font-black text-primary mb-8">{formatCurrency(product.price)}</p>
          <button onClick={() => addToCart(product)} className="w-full bg-primary text-white py-6 rounded-2xl font-black text-2xl flex items-center justify-center gap-4 hover:bg-primary-light transition-all shadow-xl hover:scale-[1.02] active:scale-95">
            <ShoppingCartIcon className="w-8 h-8" /> {t('product.addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};
