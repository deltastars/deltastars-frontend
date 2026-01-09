
import React, { useState, useMemo } from 'react';
import { useI18n } from './lib/contexts/I18nContext';
import { ShowroomItem, Page } from '../types';
import { COMPANY_INFO } from './constants';
import { PlayIcon, SparklesIcon } from './lib/contexts/Icons';

interface ShowroomPageProps {
  items: ShowroomItem[];
  showroomBanner: string;
  setPage: (page: Page) => void;
}

export const ShowroomPage: React.FC<ShowroomPageProps> = ({ items, showroomBanner, setPage }) => {
  const { t, language } = useI18n();
  const [activeSection, setActiveSection] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<ShowroomItem | null>(null);

  const sections = useMemo(() => {
    const s = Array.from(new Set(items.map(item => language === 'ar' ? item.section_ar : item.section_en)));
    return ['all', ...s.filter(Boolean) as string[]];
  }, [items, language]);

  const filteredItems = useMemo(() => {
    if (activeSection === 'all') return items;
    return items.filter(item => (language === 'ar' ? item.section_ar : item.section_en) === activeSection);
  }, [items, activeSection, language]);

  return (
    <div className="animate-fade-in pb-32 selection:bg-secondary selection:text-white">
        {/* Cinematic Hero */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#050a05]">
            <img src={showroomBanner} className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow" alt="Showroom Banner" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-black/60"></div>
            
            <div className="relative z-10 text-center px-6 max-w-5xl">
                <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-3xl px-8 py-3 rounded-full border border-white/20 text-white font-black text-sm mb-10 uppercase tracking-[0.3em] shadow-2xl">
                    <SparklesIcon className="w-5 h-5 text-secondary" />
                    {language === 'ar' ? 'عالم نجوم دلتا البصري' : 'Delta Stars Visual World'}
                </div>
                <h1 className="text-6xl md:text-9xl font-black text-primary mb-8 tracking-tighter uppercase leading-none drop-shadow-2xl">
                    {t('showroom.title')}
                </h1>
                <p className="text-2xl font-bold text-gray-600 max-w-2xl mx-auto mb-12">
                    {t('showroom.subtitle')}
                </p>
                <div className="flex justify-center">
                    <button 
                        onClick={() => setSelectedItem(items[0])}
                        className="bg-primary text-white px-12 py-6 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all flex items-center gap-4 shadow-2xl"
                    >
                        🎬 {t('showroom.watchVideo')}
                    </button>
                </div>
            </div>
        </section>

        {/* Section Navigation Tabs */}
        <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-2xl border-b border-gray-100 shadow-sm py-10">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 overflow-x-auto pb-4 no-scrollbar">
                    {sections.map(sec => (
                        <button
                            key={sec}
                            onClick={() => setActiveSection(sec)}
                            className={`px-12 py-4 rounded-[2rem] font-black transition-all border-4 text-xl whitespace-nowrap ${activeSection === sec ? 'bg-primary text-white border-primary shadow-2xl scale-110' : 'bg-white text-gray-400 border-gray-100 hover:border-primary/30'}`}
                        >
                            {sec === 'all' ? (language === 'ar' ? 'المعرض الكامل' : 'Full Gallery') : sec}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Enhanced Gallery Grid */}
        <section className="container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {filteredItems.map(item => (
                    <div 
                        key={item.id} 
                        onClick={() => setSelectedItem(item)}
                        className="bg-white rounded-[4rem] shadow-xl overflow-hidden group border border-gray-100 hover:-translate-y-6 transition-all duration-700 relative cursor-pointer"
                    >
                        <div className="relative h-[450px] overflow-hidden">
                            <img src={item.image} alt={item.title_en} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
                                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-2xl animate-bounce">
                                    <PlayIcon className="w-8 h-8" />
                                </div>
                                <p className="text-white font-bold text-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-all delay-100 translate-y-4 group-hover:translate-y-0">
                                    {language === 'ar' ? item.description_ar : item.description_en}
                                </p>
                            </div>
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl text-primary px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                                {language === 'ar' ? item.section_ar : item.section_en}
                            </div>
                        </div>
                        <div className="p-12 border-t border-gray-50">
                            <h3 className="text-3xl font-black text-slate-800 leading-tight tracking-tighter group-hover:text-primary transition-colors">
                                {language === 'ar' ? item.title_ar : item.title_en}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Business Contact Banner */}
            <div className="mt-40 bg-slate-900 text-white p-20 rounded-[5rem] flex flex-col md:flex-row justify-between items-center gap-12 shadow-3xl relative overflow-hidden border-4 border-white/5">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
                <div className="relative z-10 text-center md:text-right">
                    <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase leading-none">
                        {language === 'ar' ? 'هل تود تجربة هذه الجودة؟' : 'Want to Experience This Quality?'}
                    </h2>
                    <p className="text-2xl font-bold opacity-60 max-w-2xl">
                        {language === 'ar' ? 'نحن نورد لكبرى فنادق وشركات المملكة، كن جزءاً من قصتنا اليوم.' : 'We supply the Kingdoms top hotels. Be part of our story today.'}
                    </p>
                </div>
                <button onClick={() => setPage('vipLogin')} className="bg-secondary text-white px-16 py-8 rounded-[3rem] font-black text-3xl hover:scale-110 transition-all shadow-[0_30px_60px_rgba(255,146,43,0.3)] whitespace-nowrap active:scale-95">
                    {t('home.hero.vipButton')}
                </button>
            </div>
        </section>

        {/* Professional Lightbox Overlay */}
        {selectedItem && (
            <div className="fixed inset-0 bg-black/98 z-[200] flex justify-center items-center p-6 md:p-16 animate-fade-in backdrop-blur-3xl">
                <button onClick={() => setSelectedItem(null)} className="absolute top-10 right-10 text-white hover:text-secondary text-8xl font-black z-[210] transition-all hover:rotate-90">&times;</button>
                <div className="w-full max-w-7xl h-full flex flex-col justify-center items-center">
                    <div className="w-full aspect-video rounded-[5rem] overflow-hidden shadow-[0_0_150px_rgba(255,146,43,0.2)] bg-black border-8 border-white/5 relative">
                        {selectedItem.videoUrl ? (
                            <iframe 
                                src={`${selectedItem.videoUrl}?autoplay=1`}
                                className="w-full h-full" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen" 
                                allowFullScreen
                                title={selectedItem.title_en}
                            ></iframe>
                        ) : (
                            <img src={selectedItem.image} className="w-full h-full object-contain" alt={selectedItem.title_en} />
                        )}
                    </div>
                    <div className="mt-12 text-center text-white max-w-4xl">
                        <h2 className="text-5xl font-black mb-4 tracking-tighter">{language === 'ar' ? selectedItem.title_ar : selectedItem.title_en}</h2>
                        <p className="text-2xl font-bold opacity-70 leading-relaxed">{language === 'ar' ? selectedItem.description_ar : selectedItem.description_en}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};
