import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../constants';
import { 
    FacebookIcon, 
    InstagramIcon, 
    YoutubeIcon, 
    SnapchatIcon, 
    TiktokIcon, 
    WhatsappIcon, 
    TelegramIcon,
    LogoIcon, 
    PhoneIcon,
    LocationMarkerIcon,
    MailIcon
} from './contexts/Icons';
import { useI18n } from './contexts/I18nContext';
import { Page } from '../../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const { t, language } = useI18n();
  
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.865488107576!2d39.22013837588724!3d21.55243897008537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d9a100000001%3A0x3f5b721e0a6d0c9f!2sDelta%20Stars%20Trading%20Company!5e0!3m2!1sar!2ssa!4v1716986629168!5m2!1sar!2ssa";

  const socialPlatforms = [
    { icon: <FacebookIcon />, url: SOCIAL_LINKS.facebook, name: 'فيسبوك', color: 'bg-[#1877F2]' },
    { icon: <InstagramIcon />, url: SOCIAL_LINKS.instagram, name: 'انستجرام', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
    { icon: <TiktokIcon />, url: SOCIAL_LINKS.tiktok, name: 'تيك توك', color: 'bg-black' },
    { icon: <SnapchatIcon />, url: SOCIAL_LINKS.snapchat, name: 'سناب شات', color: 'bg-[#FFFC00] text-black' },
    { icon: <TelegramIcon />, url: SOCIAL_LINKS.telegram, name: 'تلغرام', color: 'bg-[#0088cc]' },
    { icon: <YoutubeIcon />, url: SOCIAL_LINKS.youtube, name: 'يوتيوب', color: 'bg-[#FF0000]' },
    { icon: <WhatsappIcon />, url: SOCIAL_LINKS.whatsapp_community, name: 'مجتمعنا', color: 'bg-[#25D366]' },
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden border-t-8 border-secondary/30">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mb-20 border-b border-white/10 pb-20">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setPage('home')}>
                <div className="bg-white p-3 rounded-2xl shadow-2xl transition-transform group-hover:rotate-12 group-hover:scale-110">
                    <LogoIcon className="w-14 h-14" />
                </div>
                <div>
                    <h2 className="text-3xl font-black leading-none">{t('header.storeName')}</h2>
                    <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Elite Supply Excellence</p>
                </div>
            </div>
            <p className="text-white/60 font-bold leading-relaxed text-lg italic border-r-2 border-white/10 pr-4">
                "{language === 'ar' ? COMPANY_INFO.slogan : COMPANY_INFO.slogan_en}"
            </p>
            <div className="flex flex-wrap gap-3">
                {socialPlatforms.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`${social.color} p-4 rounded-xl hover:scale-110 transition-all shadow-lg hover:shadow-secondary/20 flex items-center justify-center`}
                      title={social.name}
                    >
                        <div className="w-5 h-5">{social.icon}</div>
                    </a>
                ))}
            </div>
          </div>

          {/* Contact Data (Isolated from Map) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black border-r-4 border-secondary pr-4 uppercase tracking-widest">{language === 'ar' ? 'بيانات التواصل' : 'Contact Data'}</h3>
            <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-secondary transition-colors"><PhoneIcon className="w-6 h-6" /></div>
                    <div>
                        <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Customer Support</p>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-black hover:text-secondary transition-colors block">{COMPANY_INFO.phone}</a>
                    </div>
                </div>
                <div className="flex items-center gap-5 group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-green-500 transition-colors"><WhatsappIcon className="w-6 h-6" /></div>
                    <div>
                        <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Order WhatsApp</p>
                        <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-xl font-black hover:text-green-500 transition-colors block">{COMPANY_INFO.whatsapp}</a>
                    </div>
                </div>
                <div className="flex items-center gap-5 group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-secondary transition-colors"><MailIcon className="w-6 h-6" /></div>
                    <div>
                        <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Official Email</p>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-black hover:text-secondary transition-colors block uppercase">{COMPANY_INFO.email}</a>
                    </div>
                </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black border-r-4 border-secondary pr-4 uppercase tracking-widest">{language === 'ar' ? 'وصول سريع' : 'Quick Access'}</h3>
            <ul className="grid grid-cols-2 gap-4">
              {['home', 'products', 'showroom', 'privacy', 'login'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => setPage(page as Page)} 
                    className="text-white/50 hover:text-secondary font-black transition-all hover:translate-x-2 flex items-center gap-3 text-lg"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {t(`header.navLinks.${page === 'login' ? 'dashboard' : page}`)}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-4 group pt-4 border-t border-white/5">
                <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-secondary transition-colors"><LocationMarkerIcon className="w-6 h-6" /></div>
                <div>
                    <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Location</p>
                    <p className="text-sm font-black leading-tight text-white/80">{COMPANY_INFO.address}</p>
                </div>
            </div>
          </div>
        </div>

        {/* Dedicated Map Section (Bottom Full Width) */}
        <div className="space-y-8">
            <h3 className="text-2xl font-black border-r-4 border-secondary pr-4 uppercase tracking-widest">{language === 'ar' ? 'المقر الرئيسي (خريطة تفاعلية)' : 'Headquarters (Live Map)'}</h3>
            <div className="rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-3xl h-[400px] relative group bg-white/5">
                <iframe 
                  src={mapEmbedUrl}
                  className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                ></iframe>
                <a 
                  href={COMPANY_INFO.map_url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="absolute bottom-8 right-8 bg-white text-primary font-black px-12 py-5 rounded-2xl text-center text-lg shadow-2xl hover:bg-secondary hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                    📍 {language === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
                </a>
            </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 mt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 font-black text-[11px] uppercase tracking-[0.3em] flex items-center gap-3">
            © {new Date().getFullYear()} Delta Stars Trading Store
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
            {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
                <p className="text-[9px] font-black uppercase tracking-widest">Sovereign Delta Engine v10.0.2</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};