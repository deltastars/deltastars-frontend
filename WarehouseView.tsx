
import React, { useState, useMemo } from 'react';
import { useI18n } from './lib/contexts/I18nContext';
import { Product, StockMovement, Invoice } from '../types';
import { ChartBarIcon, PlusIcon, TrashIcon, PencilIcon, SparklesIcon, DocumentTextIcon } from './lib/contexts/Icons';

interface WarehouseViewProps {
    products: Product[];
    onUpdateStock: (productId: number, newQuantity: number) => void;
    onAddBulkProducts?: (products: Product[]) => void;
    onBack: () => void;
    invoices: Invoice[];
}

export const WarehouseView: React.FC<WarehouseViewProps> = ({ products, onUpdateStock, onBack, invoices }) => {
    const { t, language, formatCurrency } = useI18n();
    const [searchTerm, setSearchTerm] = useState('');
    const [movements, setMovements] = useState<StockMovement[]>([]);
    const [showBulkModal, setShowBulkModal] = useState(false);

    const filteredProducts = useMemo(() => {
        return products.filter(p => 
            (language === 'ar' ? p.name_ar : p.name_en).toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm, language]);

    const lowStockCount = products.filter(p => p.stock_quantity <= p.min_threshold).length;

    const handleStockAdjustment = (productId: number, amount: number, type: 'IN' | 'OUT') => {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        const newQty = type === 'IN' ? product.stock_quantity + amount : product.stock_quantity - amount;
        onUpdateStock(productId, newQty);
        
        const movement: StockMovement = {
            id: Date.now().toString(),
            productId,
            type,
            quantity: amount,
            reason: type === 'IN' ? 'توريد بضاعة جديدة' : 'مبيعات / صرف مخزني',
            date: new Date().toISOString(),
            user: 'Admin/Developer'
        };
        setMovements([movement, ...movements].slice(0, 20));
    };

    return (
        <div className="space-y-12 animate-fade-in-up">
            {/* Header Dashboard */}
            <div className="bg-slate-900 text-white p-12 rounded-[4.5rem] shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 border-b-[20px] border-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-8 relative z-10">
                    <div className="w-24 h-24 bg-secondary/20 rounded-[2.5rem] flex items-center justify-center text-6xl shadow-inner border border-white/10">📦</div>
                    <div>
                        <h2 className="text-6xl font-black uppercase tracking-tighter">Delta Logistics WMS</h2>
                        <p className="text-xl font-bold opacity-70">إدارة المستودعات الذكية والتحكم في المخزون</p>
                    </div>
                </div>
                <div className="flex gap-4 relative z-10">
                    <button onClick={onBack} className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-3xl font-black text-xl shadow-xl transition-all">إغلاق النظام</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Product Inventory Table */}
                <div className="lg:col-span-8 bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col text-black">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-3xl font-black text-slate-800">جرد المخزون الفعلي</h3>
                        <div className="relative w-80">
                            <input 
                                type="text" 
                                placeholder="بحث في المستودعات..." 
                                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-8 py-4 font-bold focus:border-primary outline-none transition-all"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-right" dir="rtl">
                            <thead>
                                <tr className="text-gray-400 border-b">
                                    <th className="p-4 font-black text-xs uppercase tracking-widest">المنتج</th>
                                    <th className="p-4 font-black text-xs uppercase tracking-widest">المخزون</th>
                                    <th className="p-4 font-black text-xs uppercase tracking-widest">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map(p => (
                                    <tr key={p.id} className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="p-6">
                                            <div className="flex items-center gap-6">
                                                <img src={p.image} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                                                <p className="font-black text-lg text-slate-800">{language === 'ar' ? p.name_ar : p.name_en}</p>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`px-6 py-2 rounded-2xl font-black text-lg ${p.stock_quantity <= p.min_threshold ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
                                                {p.stock_quantity}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex gap-4">
                                                <button onClick={() => handleStockAdjustment(p.id, 50, 'IN')} className="bg-green-500 text-white w-10 h-10 rounded-xl font-black">+</button>
                                                <button onClick={() => handleStockAdjustment(p.id, 50, 'OUT')} className="bg-slate-200 text-slate-700 w-10 h-10 rounded-xl font-black">-</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
