
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './lib/Header';
import { Footer } from './lib/Footer';
import { Home } from './Home';
import { ProductsPage } from './lib/contexts/ProductsPage';
import { CartPage } from './lib/CartPage';
import { LoginPage } from './lib/vip/LoginPage';
import { DashboardPage } from './DashboardPage';
import { VipLoginPage } from './VipLoginPage';
import { VipDashboardPage } from './VipDashboardPage';
import { PrivacyPolicyPage } from './lib/PrivacyPolicyPage';
import { WishlistPage } from './WishlistPage';
import { CartItem, Product, User, Page, ShowroomItem, PromotionalAd, CategoryConfig, CategoryKey } from '../types';
import { I18nProvider, GeminiAiProvider, useI18n } from './lib/contexts/I18nContext';
import { ToastProvider, useToast } from './ToastContext';
import { ToastContainer } from './ToastContainer';
import { mockProducts } from './lib/vip/products';
import { mockInvoices, mockPayments, mockVipClients, mockTransactions } from './lib/contexts/accounting';
import { WhatsappIcon, SparklesIcon } from './lib/contexts/Icons';
import { ShowroomPage } from './ShowroomPage';
import { COMPANY_INFO, DEFAULT_SHOWROOM_ITEMS } from './constants';
import { ProductDetailPage } from './lib/ProductDetailPage';
import { ErrorBoundary } from './ErrorBoundary';
import { AiAssistant } from './AiAssistant';

function MainApp() {
  const { language, t } = useI18n();
  const { addToast } = useToast();

  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const saved = localStorage.getItem('delta-page-v10');
    return (saved as Page) || 'home';
  });

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('delta-products-v10');
    return saved ? JSON.parse(saved) : mockProducts;
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('delta-wishlist-v10');
    return saved ? JSON.parse(saved) : [];
  });

  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
      const saved = localStorage.getItem('delta-session-v10');
      return saved ? JSON.parse(saved) : null;
  });

  const [categories, setCategories] = useState<CategoryConfig[]>(() => {
    const saved = localStorage.getItem('delta-categories-v10');
    if (saved) return JSON.parse(saved);
    return [
        { key: 'fruits', label_ar: 'فواكه طازجة', label_en: 'Fresh Fruits', icon: '🍎', order: 1, isVisible: true },
        { key: 'vegetables', label_ar: 'خضروات', label_en: 'Vegetables', icon: '🥦', order: 2, isVisible: true },
        { key: 'herbs', label_ar: 'ورقيات طازجة', label_en: 'Leafy Greens', icon: '🌿', order: 3, isVisible: true },
        { key: 'qassim', label_ar: 'منتجات القصيم', label_en: 'Qassim Products', icon: '🌾', order: 4, isVisible: true },
        { key: 'dates', label_ar: 'تمور فاخرة', label_en: 'Premium Dates', icon: '🌴', order: 5, isVisible: true },
        { key: 'packages', label_ar: 'قسم البكجات والتغليف', label_en: 'Packaging & Bundles', icon: '📦', order: 6, isVisible: true },
        { key: 'seasonal', label_ar: 'أصناف موسمية', label_en: 'Seasonal', icon: '⏳', order: 7, isVisible: true },
        { key: 'nuts', label_ar: 'مكسرات', label_en: 'Nuts', icon: '🥜', order: 8, isVisible: true },
        { key: 'flowers', label_ar: 'ورود وهدايا', label_en: 'Flowers & Gifts', icon: '🌸', order: 9, isVisible: true }
    ];
  });

  const [showroomItems, setShowroomItems] = useState<ShowroomItem[]>(() => {
    const saved = localStorage.getItem('delta-showroom-v10');
    return saved ? JSON.parse(saved) : DEFAULT_SHOWROOM_ITEMS;
  });

  const [promotions, setPromotions] = useState<PromotionalAd[]>(() => {
    const saved = localStorage.getItem('delta-promos-v10');
    if (saved) return JSON.parse(saved);
    return [
      { 
          id: 'promo-vip-evergreen', 
          title_ar: 'بوابة الشركات والتعاقدات (VIP)', 
          title_en: 'Corporate VIP Portal', 
          description_ar: 'نظام توريد ذكي وشامل للفنادق والشركات الكبرى بأسعار تنافسية عالمية.',
          description_en: 'Comprehensive smart supply system for hotels and corporations.',
          image: 'https://images.unsplash.com/photo-1624513142340-96d5570df44d?q=80&w=1200',
          link: '#', type: 'hero', isActive: true
      },
      { 
          id: 'promo-dates-event', 
          title_ar: 'عروض الموسم: تمور دلتا الملكية', 
          title_en: 'Delta Royal Season Offers', 
          description_ar: 'خصومات حصرية للكميات والمناسبات الكبرى.',
          image: 'https://images.unsplash.com/photo-1630138243676-e1792942049e?q=80&w=1200',
          link: '#', type: 'grid', isActive: true
      }
    ];
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  useEffect(() => {
    try {
        localStorage.setItem('delta-products-v10', JSON.stringify(products));
        localStorage.setItem('delta-categories-v10', JSON.stringify(categories));
        localStorage.setItem('delta-showroom-v10', JSON.stringify(showroomItems));
        localStorage.setItem('delta-promos-v10', JSON.stringify(promotions));
        localStorage.setItem('delta-wishlist-v10', JSON.stringify(wishlist));
        localStorage.setItem('delta-page-v10', currentPage);
        if (currentUser) {
            localStorage.setItem('delta-session-v10', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('delta-session-v10');
        }
    } catch (e) {
        console.warn("Storage Sync Failure", e);
    }
  }, [products, categories, showroomItems, promotions, wishlist, currentPage, currentUser]);

  const setPage = (page: Page, productId?: number, category?: string) => {
    if (page === 'productDetail' && productId) setSelectedProductId(productId);
    if (page === 'products') setSelectedCategory(category || 'all');
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (p: Product, q: number = 1) => {
    setCart(prev => {
        const exists = prev.find(i => i.id === p.id);
        if (exists) return prev.map(i => i.id === p.id ? {...i, quantity: i.quantity + q} : i);
        return [...prev, {...p, quantity: q}];
    });
    addToast(language === 'ar' ? 'تمت الإضافة للسلة' : 'Added to Cart', 'success');
  };

  const toggleWishlist = (p: Product) => {
    setWishlist(prev => {
        const exists = prev.find(i => i.id === p.id);
        if (exists) {
            addToast(language === 'ar' ? 'تمت الإزالة من المفضلة' : 'Removed from Wishlist', 'info');
            return prev.filter(i => i.id !== p.id);
        }
        addToast(language === 'ar' ? 'تمت الإضافة للمفضلة' : 'Added to Wishlist', 'success');
        return [...prev, p];
    });
  };

  const handleUpdateProduct = async (p: Product) => {
      setProducts(prev => prev.map(old => old.id === p.id ? p : old));
      return p;
  };

  const handleAddProduct = async (p: Product) => {
      setProducts(prev => [p, ...prev]);
      return p;
  };

  const handleDeleteProduct = async (id: number) => {
      setProducts(prev => prev.filter(p => p.id !== id));
      return true;
  };

  const renderPage = () => {
    switch (currentPage) {
        case 'home': 
            return <Home setPage={setPage} addToCart={handleAddToCart} products={products} promotions={promotions} categories={categories} />;
        case 'products': 
            return <ProductsPage setPage={setPage} addToCart={handleAddToCart} products={products} toggleWishlist={toggleWishlist} isProductInWishlist={(id) => !!wishlist.find(w => w.id === id)} getAverageRating={(id)=>({average:5,count:1})} reviews={[]} initialCategory={selectedCategory} />;
        case 'showroom': 
            return <ShowroomPage items={showroomItems} showroomBanner={COMPANY_INFO.wide_banner_url} setPage={setPage} />;
        case 'wishlist':
            return <WishlistPage wishlist={wishlist} removeFromWishlist={(id) => setWishlist(prev => prev.filter(p => p.id !== id))} addToCart={handleAddToCart} setPage={setPage} />;
        case 'dashboard': 
            return (
                <DashboardPage 
                    user={currentUser} 
                    products={products} 
                    showroomItems={showroomItems} 
                    promotions={promotions} 
                    categoryConfigs={categories}
                    onUpdateProduct={handleUpdateProduct}
                    onAddProduct={handleAddProduct}
                    onDeleteProduct={handleDeleteProduct}
                    onSetShowroomItems={setShowroomItems}
                    onSetPromotions={setPromotions}
                    onSetCategoryConfigs={setCategories}
                    setPage={setPage}
                    invoices={mockInvoices}
                    payments={mockPayments}
                    vipClients={mockVipClients}
                    transactions={mockTransactions}
                    onAddPayment={()=>{}}
                    onAddVipClient={async (c)=>c}
                    onUpdateVipClient={async (c)=>c}
                    onDeleteVipClient={async ()=>true}
                />
            );
        case 'login': 
            return <LoginPage onLogin={async (c)=>{
                const savedAuth = JSON.parse(localStorage.getItem('delta-stars-admin-auth') || '{"password": "12345", "isDefault": true}');
                if (c.email.toLowerCase() === 'deltastars777@gmail.com' && c.password === savedAuth.password) {
                    const userObj: User = { type: 'developer', email: c.email, isDefaultPassword: savedAuth.isDefault };
                    setCurrentUser(userObj);
                    setPage('dashboard');
                    return { success: true };
                }
                return { success: false, error: language === 'ar' ? 'بيانات الدخول غير صحيحة' : 'Invalid credentials' };
            }} setPage={setPage} />;
        case 'vipLogin': 
            return <VipLoginPage onLogin={async (c)=>{
                if(c.password==='vip' || c.phone === '966558828009'){
                    setCurrentUser({type:'vip', phone:c.phone, name: language === 'ar' ? 'فندق دلتا التجريبي' : 'Delta Demo Hotel'}); 
                    setPage('vipDashboard'); 
                    return {success:true}
                } 
                return {success:false, error: language === 'ar' ? 'بيانات الدخول غير صحيحة' : 'Invalid credentials'}
            }} setPage={setPage} />;
        case 'vipDashboard':
            return <VipDashboardPage user={currentUser} onLogout={()=>{setCurrentUser(null); setPage('home')}} products={products} addToCart={handleAddToCart} invoices={mockInvoices} transactions={mockTransactions} setPage={setPage} />;
        case 'productDetail': {
            const p = products.find(p => p.id === selectedProductId) || products[0];
            return <ProductDetailPage product={p} setPage={setPage} reviews={[]} onAddReview={()=>{}} addToCart={(prod) => handleAddToCart(prod, 1)} averageRating={{average:5,count:1}} />;
        }
        case 'cart':
            return <CartPage cart={cart} removeFromCart={(id)=>setCart(prev => prev.filter(i=>i.id!==id))} updateQuantity={(id,q)=>setCart(prev => prev.map(i=>i.id===id?{...i,quantity:Math.max(1,q)}:i))} clearCart={()=>setCart([])} setPage={setPage} addPurchaseHistory={()=>{}} />;
        case 'privacy':
            return <PrivacyPolicyPage />;
        default: 
            return <Home setPage={setPage} addToCart={handleAddToCart} products={products} promotions={promotions} categories={categories} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="bg-gray-50 min-h-screen flex flex-col page-transition selection:bg-primary selection:text-white">
        <Header setPage={setPage} cartItemCount={cart.length} wishlistItemCount={wishlist.length} user={currentUser} onLogout={()=>{setCurrentUser(null); setPage('home')}} onToggleAiAssistant={() => setShowAiAssistant(!showAiAssistant)} />
        <main className="flex-grow">{renderPage()}</main>
        <Footer setPage={setPage} />
        
        <div className="fixed bottom-10 left-10 z-[100] flex flex-col gap-4">
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="bg-green-500 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-white/20">
              <WhatsappIcon className="w-8 h-8" />
            </a>
            <button onClick={() => setShowAiAssistant(!showAiAssistant)} className="bg-primary text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-white/20 animate-bounce">
              <span className="text-2xl">👨‍🌾</span>
            </button>
        </div>

        {showAiAssistant && (
          <AiAssistant 
            products={products} 
            onClose={() => setShowAiAssistant(false)} 
            browsingHistory={[]} 
            purchaseHistory={[]} 
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <ToastProvider>
        <GeminiAiProvider>
          <MainApp />
          <ToastContainer />
          <Analytics />
        </GeminiAiProvider>
      </ToastProvider>
    </I18nProvider>
  );
}
