
import React, { useState, useEffect } from 'react';
import { ShoppingCartIcon, UserIcon, MenuIcon, XIcon, LogoutIcon, LogoIcon, SparklesIcon, PlusIcon, HeartIcon } from './contexts/Icons';
import { User, Page } from '../../types';
import { useI18n } from './contexts/I18nContext';

interface HeaderProps {
  setPage: (page: Page) => void;
  cartItemCount: number;
  wishlistItemCount: number;
  user: User | null;
  onLogout: () => void;
  onToggleAiAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({ setPage, cartItemCount, wishlistItemCount, user, onLogout, onToggleAiAssistant }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useI18n();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  
  const navLinks = [
    { label: t('header.navLinks.home'), page: 'home' as const },
    { label: t('header.navLinks.products'), page: 'products' as const },
    { label: t('header.navLinks.showroom'), page: 'showroom' as const },
    ...(user ? [
        { 
          label: user.type === 'vip' ? t('header.navLinks.vipPortal') : t('header.navLinks.dashboard'), 
          page: user.type === 'vip' ? 'vipDashboard' as const : 'dashboard' as const 
        }
    ] : []),
  ];

  return (
    <header className="bg-primary shadow-2xl sticky top-0 z-[100] border-b border-white/5">
      <div className="bg-primary-dark py-3">
         <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-[10px] text-white/50 font-black tracking-widest uppercase">
                {new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center gap-6">
                {deferredPrompt && (
                    <button 
                      onClick={handleInstall} 
                      className="text-xs bg-secondary text-white px-6 py-2 rounded-full font-black shadow-lg hover:scale-105 transition-all flex items-center gap-2 border-2 border-white/20 animate-pulse"
                    >
                       📲 {language === 'ar' ? 'تثبيت تطبيق المتجر' : 'Install Store App'}
                    </button>
                )}
                <div className="text-xs text-white/70 font-bold hidden sm:block">المورد المعتمد للفنادق والشركات الكبرى</div>
            </div>
         </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center gap-6">
            <button onClick={() => setPage('home')} className="flex items-center gap-4 group">
              <LogoIcon className="w-16 h-16 group-hover:scale-110 transition-transform drop-shadow-xl" />
              <div className="hidden sm:block text-right">
                <h1 className="text-white text-3xl font-black leading-none">{t('header.storeName')}</h1>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mt-1">Trading & Logistics Co.</p>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map(link => (
                <button 
                  key={link.page} 
                  onClick={() => { setPage(link.page); setIsMenuOpen(false); }} 
                  className="text-white hover:text-secondary transition-all text-xl font-black relative group/link"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-secondary group-hover/link:w-full transition-all"></span>
                </button>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <button onClick={toggleLanguage} className="text-white hover:bg-secondary px-5 py-2 rounded-2xl border-2 border-white/10 font-black transition-all text-sm">
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            
             <button onClick={onToggleAiAssistant} className="text-white hover:scale-125 transition-transform bg-white/5 p-3 rounded-full hidden sm:flex">
              <SparklesIcon className="w-8 h-8 text-secondary" />
            </button>

            {user ? (
              <button onClick={onLogout} className="text-red-400 hover:bg-red-500/10 p-3 rounded-full transition-colors">
                <LogoutIcon />
              </button>
            ) : (
              <button onClick={() => setPage('login')} className="text-white hover:text-secondary bg-white/5 p-3 rounded-full transition-all">
                <UserIcon />
              </button>
            )}

            <button onClick={() => setPage('wishlist')} className="relative text-white bg-white/5 p-3 rounded-full group hidden md:flex">
               <HeartIcon className="w-8 h-8" />
               {wishlistItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center border-2 border-primary">
                  {wishlistItemCount}
                </span>
              )}
            </button>

            <button onClick={() => setPage('cart')} className="relative text-white bg-white/5 p-3 rounded-full group">
              <ShoppingCartIcon className="w-8 h-8" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center border-2 border-primary animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon className="w-10 h-10" /> : <MenuIcon className="w-10 h-10" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/5 p-10 space-y-6 animate-fade-in-down">
           {navLinks.map(link => (
                <button 
                  key={link.page} 
                  onClick={() => { setPage(link.page); setIsMenuOpen(false); }} 
                  className="block w-full text-right text-white text-3xl font-black py-4 border-b border-white/5"
                >
                  {link.label}
                </button>
            ))}
            <button onClick={() => { onToggleAiAssistant(); setIsMenuOpen(false); }} className="w-full text-right text-secondary text-3xl font-black py-4 border-b border-white/5 flex items-center justify-between">
                <span>المساعد الذكي عُدي</span>
                <SparklesIcon className="w-8 h-8" />
            </button>
        </div>
      )}
    </header>
  );
};
