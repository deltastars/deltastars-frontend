
import React, { useState } from 'react';
import { useI18n } from './lib/contexts/I18nContext';
import { Invoice, Payment, VipClient, VipTransaction } from '../types';
import { COMPANY_INFO } from './constants';
import { PrintIcon, MailIcon, PencilIcon, TrashIcon, PlusIcon, DocumentTextIcon, DotsVerticalIcon } from './lib/contexts/Icons';

type AccountsViewProps = {
    onBack: () => void;
    invoices: Invoice[];
    payments: Payment[];
    vipClients: VipClient[];
    transactions: VipTransaction[];
    onAddPayment: (payment: Payment) => void;
    onAddVipClient: (client: VipClient) => Promise<VipClient>;
    onUpdateVipClient: (client: VipClient) => Promise<VipClient>;
    onDeleteVipClient: (clientId: string) => Promise<boolean>;
};

export const AccountsView: React.FC<AccountsViewProps> = ({ onBack, invoices, vipClients }) => {
    const { t, language, formatCurrency } = useI18n();

    return (
        <div className="space-y-12 animate-fade-in-right">
            <div className="bg-green-600 text-white p-12 rounded-[4rem] shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h2 className="text-6xl font-black mb-4 uppercase tracking-tighter">{t('dashboard.sections.accounts.title')}</h2>
                    <p className="text-2xl font-bold opacity-80">{t('dashboard.sections.accounts.desc')}</p>
                </div>
                <button onClick={onBack} className="bg-white/10 hover:bg-white/20 px-10 py-4 rounded-3xl font-black border-2 border-white/20 text-xl transition-all shadow-xl">
                    &larr; عودة
                </button>
            </div>

            {/* Client Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
                {vipClients.map(client => (
                    <div key={client.id} className="bg-white p-8 rounded-[2.5rem] shadow-lg border-b-8 border-primary">
                        <h3 className="text-xl font-black mb-2">{client.companyName}</h3>
                        <p className="text-gray-500 font-bold mb-4">{client.contactPerson}</p>
                        <div className="flex justify-between items-center border-t pt-4">
                            <span className="text-sm font-bold opacity-50">{language === 'ar' ? 'الرصيد الحالي' : 'Balance'}</span>
                            <span className={`text-xl font-black ${client.currentBalance < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {formatCurrency(client.currentBalance)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Invoices */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl overflow-x-auto text-black">
                <h3 className="text-2xl font-black mb-8">{language === 'ar' ? 'آخر الفواتير' : 'Recent Invoices'}</h3>
                <table className="w-full text-right" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-black">INV ID</th>
                            <th className="p-4 font-black">{language === 'ar' ? 'العميل' : 'Client'}</th>
                            <th className="p-4 font-black">{language === 'ar' ? 'التاريخ' : 'Date'}</th>
                            <th className="p-4 font-black">{language === 'ar' ? 'المبلغ' : 'Amount'}</th>
                            <th className="p-4 font-black">{language === 'ar' ? 'الحالة' : 'Status'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map(inv => (
                            <tr key={inv.id} className="border-b">
                                <td className="p-4 font-mono font-bold">{inv.id}</td>
                                <td className="p-4 font-bold">{inv.customerName}</td>
                                <td className="p-4 text-gray-500 font-bold">{inv.date}</td>
                                <td className="p-4 font-black text-primary">{formatCurrency(inv.total)}</td>
                                <td className="p-4">
                                    <span className={`px-4 py-1 rounded-full text-xs font-black ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                        {language === 'ar' ? inv.status_ar : inv.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
