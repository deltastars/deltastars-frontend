
import React, { useState, useEffect } from 'react';
import { useI18n } from './lib/contexts/I18nContext';
import { DeliveryAgent } from '../types';
import { useToast } from './ToastContext';
import { PhoneIcon, DeliveryIcon, PlusIcon, TrashIcon, XIcon, ChartBarIcon, SparklesIcon, PencilIcon } from './lib/contexts/Icons';

export const OperationsView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const { language } = useI18n();
    const { addToast } = useToast();
    
    const [agents, setAgents] = useState<DeliveryAgent[]>(() => {
        const saved = localStorage.getItem('delta-fleet-data-v7');
        return saved ? JSON.parse(saved) : [
            { id: 'DS-701', name: 'أحمد محمد (شاحنة تبريد)', phone: '0558828009', vehicle_type: 'truck', status: 'delivering', rating: 4.9, completed_orders: 1540, location: { lat: 24.7136, lng: 46.6753 } },
            { id: 'DS-702', name: 'خالد السعدي (توريد سريع)', phone: '0551122334', vehicle_type: 'car', status: 'online', rating: 5.0, completed_orders: 980, location: { lat: 21.5424, lng: 39.2201 } }
        ];
    });

    const [showAgentForm, setShowAgentForm] = useState(false);
    const [editingAgent, setEditingAgent] = useState<DeliveryAgent | null>(null);

    // محاكاة تتبع الأسطول الفعلي (Real-time GPS Tracking Simulation)
    useEffect(() => {
        const interval = setInterval(() => {
            setAgents(prev => prev.map(agent => ({
                ...agent,
                location: {
                    lat: agent.location.lat + (Math.random() - 0.5) * 0.002,
                    lng: agent.location.lng + (Math.random() - 0.5) * 0.002
                }
            })));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        localStorage.setItem('delta-fleet-data-v7', JSON.stringify(agents));
    }, [agents]);

    const handleAddAgent = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const newAgent: DeliveryAgent = {
            id: editingAgent?.id || `DS-${Date.now()}`,
            name: formData.get('name') as string,
            phone: formData.get('phone') as string,
            vehicle_type: formData.get('vehicle') as any,
            status: 'online',
            rating: 5.0,
            completed_orders: editingAgent?.completed_orders || 0,
            location: editingAgent?.location || { lat: 24.7, lng: 46.6 }
        };

        if (editingAgent) {
            setAgents(agents.map(a => a.id === editingAgent.id ? newAgent : a));
            addToast(language === 'ar' ? 'تم تحديث بيانات المندوب' : 'Driver Updated', 'success');
        } else {
            setAgents([...agents, newAgent]);
            addToast(language === 'ar' ? 'تم نشر المندوب في الأسطول' : 'Driver Deployed', 'success');
        }
        setShowAgentForm(false);
        setEditingAgent(null);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white rounded-[4rem] p-6 md:p-12 flex flex-col gap-8 shadow-3xl border border-white/10 overflow-hidden relative">
            {/* Radar Background Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-secondary rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-secondary/50 rounded-full animate-ping [animation-delay:2s]"></div>
            </div>

            <div className="flex flex-col md:row justify-between items-center gap-6 bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 relative z-10">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-secondary animate-pulse shadow-[0_0_30px_rgba(255,146,43,0.3)]">
                        <DeliveryIcon className="w-10 h-10 text-secondary" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Unified Fleet Command</h2>
                        <p className="text-secondary font-bold text-sm tracking-widest">نظام رصد الأسطول والعمليات اللوجستية</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => { setEditingAgent(null); setShowAgentForm(true); }} className="bg-primary hover:bg-primary-light px-8 py-4 rounded-2xl font-black shadow-2xl transition-all flex items-center gap-2 border border-white/10">
                        <PlusIcon /> {language === 'ar' ? 'إضافة مندوب للرادار' : 'Deploy Driver'}
                    </button>
                    <button onClick={onBack} className="bg-white/10 p-4 rounded-2xl hover:bg-red-600 transition-all text-2xl font-black">&times;</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 relative z-10 h-[65vh]">
                {/* Live Tactical Map */}
                <div className="lg:col-span-8 relative bg-[#0a100a] rounded-[4rem] border-2 border-white/10 overflow-hidden group shadow-inner">
                    <div className="absolute inset-0 opacity-30 grayscale invert bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i12!2i2395!3i1608!2m3!1e0!2sm!3i633055999!3m8!2sar!3ssa!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')] bg-cover"></div>
                    
                    {/* Live Units */}
                    {agents.map(agent => (
                        <div 
                            key={agent.id} 
                            className="absolute transition-all duration-[4000ms] ease-linear z-20"
                            style={{ 
                                top: `${((agent.location.lat - 21) * 200) % 80 + 10}%`, 
                                left: `${((agent.location.lng - 39) * 200) % 80 + 10}%` 
                            }}
                        >
                            <div className="relative group/marker cursor-pointer">
                                <div className={`w-14 h-14 rounded-full border-4 border-white/30 flex items-center justify-center shadow-3xl transition-transform hover:scale-125 ${agent.status === 'delivering' ? 'bg-orange-500 animate-bounce' : 'bg-green-500'}`}>
                                    <span className="text-2xl">{agent.vehicle_type === 'truck' ? '🚛' : '🚗'}</span>
                                </div>
                                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black whitespace-nowrap border border-white/10 opacity-0 group-hover/marker:opacity-100 transition-all shadow-2xl">
                                    <p className="text-secondary mb-1">{agent.id}</p>
                                    <p className="text-white">{agent.name}</p>
                                    <p className="text-green-400 mt-1">LAT: {agent.location.lat.toFixed(4)}</p>
                                </div>
                                <div className="absolute -inset-6 bg-secondary/10 rounded-full animate-ping opacity-20 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                        <div className="flex items-center gap-4 text-xs font-black">
                            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span> {language === 'ar' ? 'متاح' : 'Idle'}</div>
                            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></span> {language === 'ar' ? 'جاري التوصيل' : 'Delivering'}</div>
                        </div>
                    </div>
                </div>

                {/* Fleet Statistics & List */}
                <div className="lg:col-span-4 flex flex-col gap-6 overflow-hidden">
                    <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 border border-white/10 flex-1 overflow-y-auto custom-scrollbar">
                        <h3 className="text-2xl font-black mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
                            <SparklesIcon className="text-secondary" /> {language === 'ar' ? 'إدارة الطاقم النشط' : 'Active Crew'}
                        </h3>
                        <div className="space-y-4">
                            {agents.map(agent => (
                                <div key={agent.id} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all flex justify-between items-center group shadow-lg">
                                    <div className="flex items-center gap-5">
                                        <div className="text-4xl group-hover:rotate-12 transition-transform">{agent.vehicle_type === 'truck' ? '🚛' : '🚗'}</div>
                                        <div>
                                            <p className="font-black text-lg">{agent.name}</p>
                                            <p className="text-xs text-secondary font-black">{agent.status.toUpperCase()}</p>
                                            <p className="text-[10px] opacity-40 font-mono mt-1">{agent.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => { setEditingAgent(agent); setShowAgentForm(true); }} className="p-3 bg-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all"><PencilIcon /></button>
                                        <button onClick={() => setAgents(agents.filter(a => a.id !== agent.id))} className="p-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all"><TrashIcon /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Agent Form Modal */}
            {showAgentForm && (
                <div className="fixed inset-0 bg-black/95 z-[500] flex justify-center items-center p-6 backdrop-blur-3xl animate-fade-in">
                    <div className="bg-slate-900 p-12 rounded-[4rem] w-full max-w-xl border border-white/10 shadow-[0_0_100px_rgba(255,146,43,0.1)] relative">
                        <button onClick={() => setShowAgentForm(false)} className="absolute top-8 right-10 text-4xl text-gray-500 hover:text-white transition-all">&times;</button>
                        <div className="text-center mb-10">
                            <h3 className="text-4xl font-black uppercase tracking-tighter text-secondary">Deploy New Unit</h3>
                            <p className="text-gray-400 font-bold">تحديث قاعدة بيانات الأسطول اللوجستي</p>
                        </div>
                        <form onSubmit={handleAddAgent} className="space-y-6">
                            <div>
                                <label className="block text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Driver Full Name</label>
                                <input name="name" type="text" defaultValue={editingAgent?.name} className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-2xl font-black outline-none focus:border-secondary text-white text-xl" required />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-black text-gray-500 mb-2 uppercase">Phone</label>
                                    <input name="phone" type="tel" defaultValue={editingAgent?.phone} className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-2xl font-black outline-none focus:border-secondary text-white" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-500 mb-2 uppercase">Vehicle Type</label>
                                    <select name="vehicle" defaultValue={editingAgent?.vehicle_type} className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-2xl font-black outline-none focus:border-secondary text-white bg-slate-900">
                                        <option value="truck">Heavy Truck (Frozen)</option>
                                        <option value="car">Delivery Van</option>
                                        <option value="bike">Express Bike</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-secondary text-white py-6 rounded-3xl font-black text-2xl shadow-3xl hover:scale-[1.02] transition-all mt-8">DEPLOY TO RADAR</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
