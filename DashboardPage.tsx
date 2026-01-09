
import React, { useState, useEffect } from 'react';
import { User, Product, ShowroomItem, Page, PromotionalAd, CategoryConfig, Invoice, Payment, VipClient, VipTransaction, CategoryKey } from '../types';
import { useI18n } from './lib/contexts/I18nContext';
import { PencilIcon, TrashIcon, PlusIcon, SparklesIcon, ChartBarIcon, FingerprintIcon, XIcon, LogoutIcon, EyeIcon, EyeOffIcon, QualityIcon, DeliveryIcon } from './lib/contexts/Icons';
import { AccountsView } from './AccountsView';
import { OperationsView } from './OperationsView';
import { WarehouseView } from './WarehouseView';
import { useToast } from './ToastContext';
import { SectionAuthModal } from './lib/SectionAuthModal';

interface DashboardPageProps {
  user: User | null;
  products: Product[];
  showroomItems: ShowroomItem[];
  promotions: PromotionalAd[];
  categoryConfigs: CategoryConfig[];
  onAddProduct: (p: Product) => Promise<Product>;
  onUpdateProduct: (p: Product) => Promise<Product>;
  onDeleteProduct: (id: number) => Promise<boolean>;
  onSetShowroomItems: (items: ShowroomItem[]) => void;
  onSetPromotions: (promos: PromotionalAd[]) => void;
  onSetCategoryConfigs: (configs: CategoryConfig[]) => void;
  setPage: (page: Page) => void;
  invoices: Invoice[];
  payments: Payment[];
  vipClients: VipClient[];
  transactions: VipTransaction[];
  onAddPayment: (p: Payment) => void;
  onAddVipClient: (c: VipClient) => Promise<VipClient>;
  onUpdateVipClient: (c: VipClient) => Promise<VipClient>;
  onDeleteVipClient: (id: string) => Promise<boolean>;
}

const DevMasterPinModal: React.FC<{ onUnlock: () => void; onClose: () => void }> = ({ onUnlock, onClose }) => {
    const { language } = useI18n();
    const [pin, setPin] = useState('');
    const [error, setError] = useState(false);

    const checkPin = (val: string) => {
        setPin(val);
        if (val === '77777') { // رمز حماية سيادي ومستقل للمطور
            onUnlock();
        } else if (val.length >= 5) {
            setError(true);
            setTimeout(() => { setPin(''); setError(false); }, 1000);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-950/98 z-[900] flex justify-center items-center backdrop-blur-3xl animate-fade-in">
            <div className={`bg-white p-16 rounded-[4.5rem] w-full max-w-md shadow-3xl text-center border-t-[30px] border-cyan-500 relative ${error ? 'animate-shake' : ''}`}>
                <div className="w-24 h-24 bg-cyan-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <FingerprintIcon className="w-12 h-12 text-cyan-600" />
                </div>
                <h2 className="text-4xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Bypass Protocol 10.0</h2>
                <p className="text-gray-400 font-bold mb-10">أدخل رمز الوصول الفني لفتح "البوابة السيادية"</p>
                <input 
                    type="password" 
                    value={pin}
                    onChange={(e) => checkPin(e.target.value)}
                    placeholder="•••••"
                    maxLength={5}
                    className="w-full text-center text-7xl font-black tracking-[0.5em] p-8 bg-gray-50 border-4 border-gray-100 rounded-[2.5rem] outline-none focus:border-cyan-500 transition-all text-slate-800 shadow-inner"
                    autoFocus
                />
                {error && <p className="mt-6 text-red-600 font-black animate-pulse">INVALID ACCESS TOKEN</p>}
                <button onClick={onClose} className="mt-12 text-gray-300 font-black hover:text-red-500 transition-colors uppercase tracking-widest text-xs">Terminate Handshake</button>
            </div>
        </div>
    );
};

export const DashboardPage: React.FC<DashboardPageProps> = (props) => {
  const { language, t } = useI18n();
  const { addToast } = useToast();
  const [view, setView] = useState<string>(() => {
      return localStorage.getItem('delta-dashboard-last-view') || 'menu';
  });
  const [authNeeded, setAuthNeeded] = useState<string | null>(null);
  const [showDevPin, setShowDevPin] = useState(false);
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingPromotion, setEditingPromotion] = useState<PromotionalAd | null>(null);
  const [editingShowroom, setEditingShowroom] = useState<ShowroomItem | null>(null);

  useEffect(() => {
      localStorage.setItem('delta-dashboard-last-view', view);
  }, [view]);

  if (!props.user) return <div className="p-20 text-center font-black text-red-600">UNAUTHORIZED_ACCESS_ERR</div>;

  const renderDeveloperPanel = () => (
    <div className="space-y-12 animate-fade-in-up pb-20 text-black">
        {/* Sovereign Header for Dev Portal */}
        <div className="bg-slate-950 text-white p-14 rounded-[5rem] border-b-[20px] border-cyan-600 flex flex-col xl:flex-row justify-between items-center shadow-3xl gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse-slow"></div>
            <div className="flex items-center gap-10 relative z-10">
                <div className="w-28 h-28 bg-cyan-500/20 rounded-[2.5rem] flex items-center justify-center text-7xl shadow-inner border border-white/10">🛡️</div>
                <div>
                    <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-cyan-400">Master Core Gate</h2>
                    <p className="text-2xl font-bold opacity-60">تعديل البنية التحتية | إدارة أصول الصالة | حملات الترويج</p>
                </div>
            </div>
            <button onClick={() => setView('menu')} className="relative z-10 bg-white/10 hover:bg-white/20 px-12 py-5 rounded-3xl font-black text-2xl transition-all shadow-2xl border border-white/10">الخروج للبوابة المركزية &times;</button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Master Inventory Core */}
            <div className="bg-white p-12 rounded-[4.5rem] shadow-2xl border-4 border-slate-50 flex flex-col h-[900px]">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h3 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Database Entry</h3>
                        <p className="text-gray-400 font-bold">إدارة بيانات {props.products.length} وحدة نشطة</p>
                    </div>
                    <button 
                        onClick={() => setEditingProduct({ id: Date.now(), name_ar: '', name_en: '', category: 'fruits', price: 0, image: '', unit_ar: 'كيلو', unit_en: 'kg', stock_quantity: 500, min_threshold: 20 })} 
                        className="bg-cyan-600 text-white px-8 py-5 rounded-[2rem] shadow-xl hover:scale-105 transition-all flex items-center gap-3 font-black text-xl"
                    >
                        <PlusIcon /> صنف جديد
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-5">
                    {props.products.map(p => (
                        <div key={p.id} className="p-6 bg-slate-50 rounded-[2.5rem] border-2 border-transparent flex justify-between items-center group hover:bg-white hover:border-cyan-100 hover:shadow-2xl transition-all">
                             <div className="flex items-center gap-8">
                                <img src={p.image} className="w-20 h-20 rounded-3xl object-cover shadow-2xl border-4 border-white" alt="" />
                                <div>
                                    <p className="font-black text-2xl text-slate-800">{p.name_ar}</p>
                                    <p className="text-xs text-cyan-600 font-black uppercase tracking-widest">{p.category} | {p.price} SAR</p>
                                </div>
                             </div>
                             <div className="flex gap-3">
                                <button onClick={() => setEditingProduct(p)} className="p-4 bg-cyan-50 text-cyan-600 rounded-2xl hover:bg-cyan-600 hover:text-white transition-all"><PencilIcon className="w-5 h-5"/></button>
                                <button onClick={() => { if(window.confirm('Purge?')) props.onDeleteProduct(p.id); }} className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-600 hover:text-white transition-all"><TrashIcon className="w-5 h-5"/></button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Experience Manager */}
            <div className="space-y-12 h-[900px] overflow-y-auto custom-scrollbar pr-4">
                <div className="bg-white p-12 rounded-[4.5rem] shadow-2xl border-4 border-slate-50">
                    <h3 className="text-4xl font-black text-slate-800 mb-10 border-b-4 border-cyan-500/10 pb-6">صالة العروض الذكية</h3>
                    <div className="grid grid-cols-1 gap-6">
                        {props.showroomItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2.5rem] group hover:border-cyan-200 border-2 border-transparent transition-all shadow-sm">
                                <div className="flex items-center gap-6">
                                    <img src={item.image} className="w-24 h-24 rounded-3xl object-cover shadow-xl border-4 border-white" alt="" />
                                    <div><p className="font-black text-2xl text-slate-800">{item.title_ar}</p><p className="text-xs text-gray-400 font-bold uppercase">{item.section_en || 'Gallery'}</p></div>
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={() => setEditingShowroom(item)} className="p-4 bg-white text-cyan-600 rounded-2xl shadow-sm hover:bg-cyan-600 hover:text-white transition-all"><PencilIcon className="w-5 h-5"/></button>
                                    <button onClick={() => { if(window.confirm('Delete?')) props.onSetShowroomItems(props.showroomItems.filter(s => s.id !== item.id)) }} className="p-4 bg-white text-red-400 rounded-2xl shadow-sm hover:bg-red-500 hover:text-white transition-all"><TrashIcon className="w-5 h-5"/></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-12 rounded-[4.5rem] shadow-2xl border-4 border-slate-50">
                    <h3 className="text-4xl font-black text-slate-800 mb-10 border-b-4 border-secondary/20 pb-6">إعلانات المناسبات</h3>
                    <div className="grid grid-cols-2 gap-8">
                         {props.promotions.map(promo => (
                            <div key={promo.id} onClick={() => setEditingPromotion(promo)} className="cursor-pointer relative h-56 rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white hover:border-secondary transition-all">
                                <img src={promo.image} className="w-full h-full object-cover opacity-70 group-hover:scale-125 transition-transform duration-1000" alt="" />
                                <div className="absolute inset-0 bg-slate-900/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"><p className="text-white font-black text-lg">تعديل</p></div>
                                <div className="absolute top-6 left-6 bg-secondary text-white px-5 py-2 rounded-full text-xs font-black">{promo.title_ar}</div>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Master Data Override Modals */}
        {editingProduct && (
            <div className="fixed inset-0 bg-slate-950/98 z-[950] flex justify-center items-center p-6 backdrop-blur-3xl animate-fade-in">
                <div className="bg-white p-16 rounded-[5rem] w-full max-w-4xl shadow-3xl text-black relative border-t-[40px] border-cyan-600">
                    <button onClick={() => setEditingProduct(null)} className="absolute top-10 end-14 text-6xl text-gray-200 hover:text-red-500 transition-all font-black">&times;</button>
                    <h2 className="text-5xl font-black text-cyan-700 uppercase tracking-tighter mb-10">Data Override Protocol</h2>
                    <form onSubmit={(e) => { e.preventDefault(); props.onUpdateProduct(editingProduct); setEditingProduct(null); addToast('Master DB Updated', 'success'); }} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input type="text" value={editingProduct.name_ar} onChange={e => setEditingProduct({...editingProduct, name_ar: e.target.value})} className="w-full p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl font-black text-2xl outline-none focus:border-cyan-500" placeholder="Product Label (AR)" required />
                            <input type="number" step="0.01" value={editingProduct.price} onChange={e => setEditingProduct({...editingProduct, price: Number(e.target.value)})} className="w-full p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl font-black text-3xl outline-none focus:border-cyan-500" placeholder="Price (SAR)" required />
                        </div>
                        <input type="text" value={editingProduct.image} onChange={e => setEditingProduct({...editingProduct, image: e.target.value})} className="w-full p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl font-mono text-sm" placeholder="Image URL / ID" required />
                        <button type="submit" className="w-full bg-cyan-600 text-white py-8 rounded-[3rem] font-black text-3xl shadow-3xl border-b-[10px] border-cyan-800">COMMIT TO CLOUD MASTER</button>
                    </form>
                </div>
            </div>
        )}

        {editingShowroom && (
            <div className="fixed inset-0 bg-slate-950/98 z-[950] flex justify-center items-center p-6 backdrop-blur-3xl animate-fade-in">
                <div className="bg-white p-16 rounded-[5rem] w-full max-w-3xl shadow-3xl text-black relative border-t-[40px] border-primary">
                    <button onClick={() => setEditingShowroom(null)} className="absolute top-10 end-14 text-6xl text-gray-200 hover:text-red-500 transition-all font-black">&times;</button>
                    <h2 className="text-5xl font-black text-primary mb-12">Visual Asset Sync</h2>
                    <form onSubmit={(e) => { e.preventDefault(); props.onSetShowroomItems(props.showroomItems.some(s=>s.id===editingShowroom.id)?props.showroomItems.map(s=>s.id===editingShowroom.id?editingShowroom:s):[editingShowroom,...props.showroomItems]); setEditingShowroom(null); addToast('Gallery Sync Success', 'success'); }} className="space-y-8">
                        <input type="text" placeholder="Title (AR)" value={editingShowroom.title_ar} onChange={e => setEditingShowroom({...editingShowroom, title_ar: e.target.value})} className="w-full p-7 bg-gray-50 border-4 border-gray-100 rounded-3xl font-black text-2xl" required />
                        <input type="text" placeholder="Image Link" value={editingShowroom.image} onChange={e => setEditingShowroom({...editingShowroom, image: e.target.value})} className="w-full p-7 bg-gray-50 border-4 border-gray-100 rounded-3xl font-mono text-xs" required />
                        <button type="submit" className="w-full bg-primary text-white py-8 rounded-[3rem] font-black text-3xl shadow-3xl">PUSH TO SHOWROOM</button>
                    </form>
                </div>
            </div>
        )}
    </div>
  );

  const renderView = () => {
    switch (view) {
        case 'warehouse': return <WarehouseView products={props.products} invoices={props.invoices} onUpdateStock={(id, qty) => props.onUpdateProduct({ ...props.products.find(p => p.id === id)!, stock_quantity: qty })} onBack={() => setView('menu')} />;
        case 'operations': return <OperationsView onBack={() => setView('menu')} />;
        case 'accounts': return <AccountsView onBack={() => setView('menu')} invoices={props.invoices} payments={props.payments} vipClients={props.vipClients} transactions={props.transactions} onAddPayment={props.onAddPayment} onAddVipClient={props.onAddVipClient} onUpdateVipClient={props.onUpdateVipClient} onDeleteVipClient={props.onDeleteVipClient} />;
        case 'developer': return renderDeveloperPanel();
        default:
            const dashboardItems = [
                { id: 'warehouse', icon: '📦', color: 'bg-yellow-50 border-yellow-200 text-yellow-900', label: 'المستودعات واللوجستيات', desc: 'جرد وتحكم فوري في المخزون' },
                { id: 'operations', icon: '📡', color: 'bg-orange-50 border-orange-200 text-orange-900', label: 'رادار الأسطول GPS', desc: 'تتبع المناديب والشاحنات حياً' },
                { id: 'accounts', icon: '📈', color: 'bg-green-50 border-green-200 text-green-900', label: 'إدارة المالية والمحاسبة', desc: 'الفواتير، الرصيد، والمدفوعات' },
                { id: 'developer', icon: '🔒', color: 'bg-slate-900 border-slate-700 text-slate-100', label: 'البوابة السيادية (المطور)', desc: 'تحكم مطلق في أصول وهوية المتجر' }
            ];
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in text-black">
                    {dashboardItems.map(item => (
                        <div key={item.id} onClick={() => item.id === 'developer' ? setShowDevPin(true) : setAuthNeeded(item.id)} className={`${item.color} p-20 rounded-[5.5rem] border-4 shadow-3xl hover:shadow-[0_60px_150px_rgba(0,0,0,0.1)] transition-all cursor-pointer group hover:-translate-y-8 flex flex-col items-center text-center relative overflow-hidden`}>
                             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full group-hover:scale-150 transition-transform duration-1000"></div>
                             <div className="text-[14rem] mb-12 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">{item.icon}</div>
                             <h3 className="text-5xl font-black mb-4 uppercase tracking-tighter leading-none">{item.label}</h3>
                             <p className="text-2xl font-bold opacity-40">{item.desc}</p>
                        </div>
                    ))}
                </div>
            );
    }
  };

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      {showDevPin && <DevMasterPinModal onUnlock={() => { setShowDevPin(false); setView('developer'); addToast('Master Key Accepted :: Security Overridden', 'success'); }} onClose={() => setShowDevPin(false)} />}
      {authNeeded && (
          <SectionAuthModal 
            section={authNeeded as any} 
            onUnlock={() => { setView(authNeeded); setAuthNeeded(null); }} 
            onClose={() => setAuthNeeded(null)} 
          />
      )}
      <div className="bg-primary text-white p-20 md:p-32 rounded-[8rem] shadow-3xl mb-24 relative overflow-hidden border-b-[80px] border-secondary">
        <div className="absolute top-0 right-0 w-[80rem] h-[80rem] bg-white/5 rounded-bl-full blur-[200px] animate-pulse-slow"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="text-center lg:text-right">
                <h1 className="text-9xl md:text-[13rem] font-black text-white mb-16 tracking-tighter leading-none uppercase drop-shadow-3xl">Delta Control</h1>
                <p className="text-4xl text-white/50 font-extrabold uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: t('dashboard.welcome', { email: props.user.type === 'developer' ? 'MASTER_DEVELOPER' : (props.user.type === 'vip' ? props.user.name : props.user.email) }) }}></p>
            </div>
            <div className="bg-white/10 backdrop-blur-3xl px-24 py-12 rounded-[5rem] font-black text-5xl shadow-inner border-4 border-white/20 flex items-center gap-10 group">
                <FingerprintIcon className="w-24 h-24 text-secondary group-hover:scale-125 transition-transform" /> 
                <span className="uppercase tracking-[0.3em]">{props.user.type === 'developer' ? 'DEV_SHIELD_ON' : 'SECURE_LINK'}</span>
            </div>
        </div>
      </div>
      {renderView()}
    </div>
  );
};
