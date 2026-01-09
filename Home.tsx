
import React, { useState } from 'react';
import { Product, Page, PromotionalAd, CategoryKey } from '../../../types';
import { ProductCard } from '../../ProductCard';
import { useI18n } from './I18nContext';
import { COMPANY_INFO } from '../../constants';
import { DeliveryIcon, QualityIcon, SupportIcon, XIcon, SparklesIcon, ChartBarIcon, FingerprintIcon, StarIcon } from './Icons';
import { OperationsView } from '../../OperationsView';

export const Home: React.FC<{
    setPage: (p: Page, productId?: number, category?: CategoryKey) => void;
    addToCart: (p: Product) => void;
    products: Product[];
    promotions: PromotionalAd[];
}> = ({ setPage, addToCart, products, promotions }) => {
    const { t, language } = useI18n();
    const [showLiveMap, setShowLiveMap] = useState(false);

    const categories: CategoryKey[] = ['fruits', 'vegetables', 'herbs', 'qassim', 'dates', 'packages', 'seasonal', 'nuts', 'flowers'];

    const getCategoryEmoji = (cat: CategoryKey) => {
        // Fix: Added missing 'custom' key to match the CategoryKey type definition.
        const emojis: Record<CategoryKey, string> = {
            fruits: '🍎', vegetables: '🥦', herbs: '🌿', qassim: '🌾', dates: '🌴', packages: '📦', seasonal: '⏳', nuts: '🥜', flowers: '🌸',
            custom: '⚙️'
        };
        return emojis[cat] || '🍃';
    };

    const handleShare = (e: React.MouseEvent, title: string) => {
        e.stopPropagation();
        const shareUrl = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: title,
                text: language === 'ar' ? `اكتشف أقوى عروض نجوم دلتا للتجارة` : `Discover the best offers from Delta Stars Trading`,
                url: shareUrl
            }).catch((err) => console.debug('Share failed or cancelled:', err));
        }
    };

    return (
        <div className="space-y-16 pb-32 overflow-x-hidden selection:bg-secondary selection:text-white">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a1a0a]">
                <div className="absolute inset-0 opacity-40">
                    <img src={COMPANY_INFO.wide_banner_url} alt="Delta Stars Banner" className="w-full h-full object-cover animate-pulse-slow" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0a]/90 via-transparent to-[#0a1a0a]"></div>
                
                <div className="relative z-10 text-center text-white px-6 max-w-7xl animate-fade-in-up">
                    <div className="bg-secondary/10 backdrop-blur-3xl border border-secondary/30 text-secondary px-12 py-4 rounded-full inline-flex items-center gap-6 font-black text-sm mb-12 uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(255,146,43,0.2)]">
                         <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
                         </span>
                         {language === 'ar' ? 'أنظمة التوريد الذكية مفعّلة' : 'Smart Supply Systems Active'}
                    </div>
                    
                    <h1 className="text-7xl md:text-9xl font-black mb-12 leading-tight tracking-tighter uppercase drop-shadow-2xl">
                        {language === 'ar' ? 'نجوم دلتا' : 'Delta Stars'} <br/>
                        <span className="text-secondary italic">{language === 'ar' ? 'للتجارة والتموين' : 'Trading Co.'}</span>
                    </h1>
                    
                    <p className="text-2xl md:text-4xl font-bold opacity-80 mb-20 max-w-4xl mx-auto leading-relaxed text-gray-200">
                        {language === 'ar' ? COMPANY_INFO.slogan : COMPANY_INFO.slogan_en}
                    </p>

                    <div className="flex flex-wrap justify-center gap-10">
                        <button onClick={() => setPage('products')} className="bg-white text-primary px-20 py-8 rounded-[3rem] font-black text-3xl hover:scale-105 transition-all shadow-2xl flex items-center gap-5 border-b-[8px] border-gray-200 active:border-b-0 active:translate-y-2">
                           🛒 {t('home.hero.button')}
                        </button>
                        <button onClick={() => setPage('vipLogin')} className="bg-secondary text-white px-20 py-8 rounded-[3rem] font-black text-3xl hover:scale-105 transition-all shadow-[0_30px_70px_rgba(255,146,43,0.4)] border-b-[8px] border-secondary-dark active:border-b-0 active:translate-y-2">
                            {t('home.hero.vipButton')}
                        </button>
                    </div>
                </div>

                {/* Operations Radar HUD */}
                <div className="absolute bottom-12 right-12 z-40 hidden lg:block">
                    <button 
                        onClick={() => setShowLiveMap(true)}
                        className="bg-black/40 backdrop-blur-3xl border-2 border-white/10 p-12 rounded-[4.5rem] shadow-2xl flex items-center gap-10 hover:bg-black/60 transition-all group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative">
                            <div className="w-24 h-24 border-4 border-secondary/20 rounded-full flex items-center justify-center animate-spin-slow">
                                <DeliveryIcon className="w-12 h-12 text-secondary" />
                            </div>
                            <div className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-black animate-pulse"></div>
                        </div>
                        <div className="text-left relative z-10">
                            <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-2">Ops Radar HUD</p>
                            <p className="text-2xl font-black text-white">{language === 'ar' ? 'تتبع الأسطول الموحد' : 'Unified Fleet Radar'}</p>
                            <div className="flex gap-5 mt-3">
                                <span className="text-xs font-black text-green-400">ONLINE</span>
                                <span className="text-xs font-black text-white/40">32 ACTIVE UNITS</span>
                            </div>
                        </div>
                    </button>
                </div>
            </section>

            {/* Special Promotions Grid */}
            <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[-100px] relative z-20">
                <div onClick={() => setPage('vipLogin')} className="group relative h-[450px] bg-slate-900 rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] border-4 border-white/5 cursor-pointer hover:-translate-y-4 transition-all duration-700">
                    <img src="https://images.unsplash.com/photo-1624513142340-96d5570df44d?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                    <div className="absolute top-8 right-8 z-30">
                        <button onClick={(e) => handleShare(e, language === 'ar' ? 'بوابة كبار العملاء - نجوم دلتا' : 'VIP Corporate Portal - Delta Stars')} className="bg-white/10 hover:bg-secondary p-4 rounded-full transition-all text-white shadow-2xl">🚀</button>
                    </div>
                    <div className="absolute inset-0 p-16 flex flex-col justify-end items-start">
                        <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl mb-8 group-hover:bg-secondary transition-colors">
                            <FingerprintIcon className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                            {language === 'ar' ? 'انضم لبوابة كبار العملاء' : 'Join Delta VIP Portal'}
                        </h2>
                        <button className="bg-secondary text-white px-12 py-4 rounded-full font-black text-xl hover:scale-110 transition-all uppercase tracking-widest shadow-2xl">
                             {language === 'ar' ? 'دخول الشركات' : 'Corporate Entry'}
                        </button>
                    </div>
                </div>

                <div onClick={() => setPage('products')} className="group relative h-[450px] bg-primary-dark rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] border-4 border-secondary/20 cursor-pointer hover:-translate-y-4 transition-all duration-700">
                    <img src="https://images.unsplash.com/photo-1630138243676-e1792942049e?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
                    <div className="absolute top-8 left-8 z-30">
                        <button onClick={(e) => handleShare(e, language === 'ar' ? 'أجود أنواع التمور الملكية - نجوم دلتا' : 'Premium Royal Dates - Delta Stars')} className="bg-white/10 hover:bg-secondary p-4 rounded-full transition-all text-white shadow-2xl">🚀</button>
                    </div>
                    <div className="absolute inset-0 p-16 flex flex-col justify-end items-end text-right">
                        <div className="bg-secondary/20 backdrop-blur-xl p-5 rounded-3xl mb-8">
                            <StarIcon className="w-12 h-12 text-secondary" filled />
                        </div>
                        <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                            {language === 'ar' ? 'أجود أنواع التمور الملكية' : 'Premium Royal Dates'}
                        </h2>
                        <button className="bg-white text-primary px-12 py-4 rounded-full font-black text-xl hover:bg-secondary hover:text-white transition-all uppercase tracking-widest shadow-2xl">
                             {language === 'ar' ? 'تسوق التمور' : 'Shop Dates'}
                        </button>
                    </div>
                </div>
            </section>

            {/* Live Map Interface */}
            {showLiveMap && (
                <div className="fixed inset-0 z-[300] bg-[#050a05] p-6 md:p-12 animate-fade-in flex flex-col">
                    <div className="flex justify-between items-center mb-10 text-white">
                        <div className="flex items-center gap-8">
                            <ChartBarIcon className="w-16 h-16 text-secondary" />
                            <div>
                                <h2 className="text-5xl font-black uppercase tracking-tighter">Fleet Command Hub</h2>
                                <p className="text-secondary font-bold text-sm">Real-time GPS Tracking</p>
                            </div>
                        </div>
                        <button onClick={() => setShowLiveMap(false)} className="bg-white/10 p-8 rounded-full hover:bg-red-600 transition-all text-4xl shadow-2xl">&times;</button>
                    </div>
                    <div className="flex-1 rounded-[5rem] overflow-hidden border-4 border-white/10 shadow-[0_0_100px_rgba(26,58,26,0.4)]">
                        <OperationsView onBack={() => setShowLiveMap(false)} />
                    </div>
                </div>
            )}

            {/* Main Categories */}
            <section className="container mx-auto px-6 py-12 text-black">
                <div className="text-center mb-24">
                    <h2 className="text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">{t('home.categories.title')}</h2>
                    <p className="text-2xl font-bold text-gray-400 max-w-2xl mx-auto">{t('home.categories.subtitle')}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                    {categories.map(cat => (
                        <button 
                            key={cat} onClick={() => setPage('products')} 
                            className="bg-white p-14 rounded-[4.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(26,58,26,0.15)] hover:-translate-y-6 transition-all border border-gray-100 group flex flex-col items-center relative overflow-hidden"
                        >
                            <div className="text-8xl mb-10 group-hover:scale-125 transition-transform duration-700 drop-shadow-lg">
                                {getCategoryEmoji(cat)}
                            </div>
                            <h3 className="font-black text-3xl text-primary text-center group-hover:text-secondary transition-colors">{t(`categories.${cat}`)}</h3>
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};
